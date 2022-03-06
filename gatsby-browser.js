import "./src/css/index.css"
import "katex/dist/katex.min.css"
import React from 'react'
import { RecoilRoot } from "recoil"

export const wrapRootElement = ({ element }) => (
    <RecoilRoot>
        {element}
    </RecoilRoot>
)