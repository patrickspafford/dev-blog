import React from 'react'
import Span from '../Span'
import { IMdxTableOfContentsItem } from '@interfaces'
import { Link } from 'gatsby'

interface ITableOfContents {
  items: IMdxTableOfContentsItem[]
}

const TableOfContents = ({ items }: ITableOfContents) => {
  return (
    <nav className="sticky top-24 left-0 bottom-0 overflow-y-scroll h-full-minus-header hide-scrollbar p-4">
      <Span className="block text-lg w-full text-center font-semibold text-gray-500">
        Table of Contents
      </Span>
      <div className="w-full mt-4">
        {items ? (
          items.map((item) => {
            return (
              <>
                <Link to={item.url}>
                  <Span className="mb-3 text-gray-500 hover:opacity-50">
                    {item.title}
                  </Span>
                </Link>
                {item?.items?.map((subitem) => {
                  return (
                    <Link to={subitem.url}>
                      <Span className="mb-3 ml-2 text-gray-500 hover:opacity-50">
                        {subitem.title}
                      </Span>
                    </Link>
                  )
                })}
              </>
            )
          })
        ) : (
          <Span className="text-gray-500 dark:text-gray-300">
            This post has no sections.
          </Span>
        )}
      </div>
    </nav>
  )
}

export default TableOfContents
