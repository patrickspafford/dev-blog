import faunadb from 'faunadb'
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

const categories = [
  'react-native',
  'go',
  'evolutionary-computing',
  'swift-ui',
  'solidity',
]

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) => {
  try {
    const slug = req.params.slug.toString()
    if (!slug) return res.status(500).json({ error: 'Please provide a slug. ' })
    console.log(`Slug: ${slug}`)
    const q = faunadb.query
    const client = new faunadb.Client({
      secret: process.env.FAUNA,
      domain: 'db.us.fauna.com',
    })
    const doesDocExist = await client.query(
      q.Exists(q.Match(q.Index('hits_by_slug'), slug)),
    )
    if (!doesDocExist) {
      let category: undefined | string
      categories.forEach((cat) => {
        if (slug.includes(`${cat}/`)) {
          category = cat
        }
      })
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
