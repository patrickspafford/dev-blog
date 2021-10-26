import React, { FC, ReactNode } from 'react'
import Paragraph from '../Paragraph'
import { IWithTextStyled } from '@interfaces'
import { Link } from 'gatsby'

interface IListItemCard extends IWithTextStyled {
  icon: ReactNode
  href: string
}

const ListItemCard = ({ icon, children, className, href }: IListItemCard) => (
  <li
    className={`flex relative justify-start overflow-hidden items-center shadow-md hover:opacity-50 cursor-pointer pl-4 mb-4 dark:border dark:border-white ${className}`}
  >
    <Link className="absolute top-0 left-0 right-0 bottom-0" to={href} />
    <div className="h-10 w-10">{icon}</div>
    <Paragraph className="pt-4 pl-4 whitespace-nowrap">{children}</Paragraph>
  </li>
)

export default ListItemCard
