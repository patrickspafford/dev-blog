import React from 'react'
import { Link } from 'gatsby'
import Span from '../Span'
import { P } from '@images'

const HeaderLeft = () => (
  <div className="flex justify-start items-center">
    <Link to="/" className="flex-shrink-0">
      <div className="inline-block">
        <img src={P} height={72} width={72} />
      </div>
    </Link>
    <div className="pl-4">
      <Span className="sm:text-md md:text-2xl font-bold font-sourceCode">
        Patrick Spafford
      </Span>
      <Span className="text-xs md:text-base">Software Developer</Span>
    </div>
  </div>
)

export default HeaderLeft
