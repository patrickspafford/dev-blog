import "./src/css/index.css"
import React from 'react'


import { BlogContextProvider } from '@state'

export const wrapRootElement = ({ element }) => (
    <BlogContextProvider>
        {element}
    </BlogContextProvider>
)