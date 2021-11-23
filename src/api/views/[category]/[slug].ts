import faunadb from 'faunadb'
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let { slug, category } = req.params
    res.status(200).json({
      slug,
      category,
    })
    if (!slug) return res.status(500).json({ error: 'Please provide a slug. ' })
    if (!category)
      return res.status(500).json({ error: 'Please provide a category.' })
    slug = slug.toString()
    category = category.toString()
    console.log(`Slug: ${slug}; Category ${category}`)
    const q = faunadb.query
    const client = new faunadb.Client({
      secret: process.env.FAUNA,
      domain: 'db.us.fauna.com',
    })
    const doesDocExist = await client.query(
      q.Exists(q.Match(q.Index('hits_by_slug'), slug)),
    )
    if (!doesDocExist) {
      await client.query(
        q.Create(q.Collection('hits'), {
          data: {
            slug,
            hits: 0,
            category: category ?? 'uncategorized',
          },
        }),
      )
    }
    const document = await client.query(
      q.Get(q.Match(q.Index('hits_by_slug'), slug)),
    )
    await client.query(
      q.Update(document.ref, {
        data: {
          hits: document.data.hits + 1,
        },
      }),
    )
    return res.status(200).json({
      hits: document.data.hits,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.toString() })
  }
}

export default handler
