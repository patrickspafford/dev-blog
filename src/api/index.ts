import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) {
  res.send(`I am root`)
}
