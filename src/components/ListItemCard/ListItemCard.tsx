import React, { FC, ReactNode } from 'react'
import Paragraph from '../Paragraph'
import { IWithTextStyled } from '@interfaces'
import { Link } from 'gatsby'
import { useClassNames } from '@hooks'

interface IListItemCard extends IWithTextStyled {
  icon: ReactNode
  href: string
  headline?: string
  textContainerClassName?: string
  titleClassName?: string
  headlineClassName?: string
}

const ListItemCard = ({
  icon,
  children,
  className,
  textContainerClassName,
  href,
  headline,
  headlineClassName,
  titleClassName,
}: IListItemCard) => {
  const classNames = useClassNames()
  return (
    <li
      className={classNames(
        `flex relative justify-start overflow-hidden items-center border border-nextjs hover:transition-boxShadow hover:shadow-next hover:border-transparent cursor-pointer p-2 mb-4 dark:border dark:border-white`,
        className,
      )}
    >
      <Link className="absolute top-0 left-0 right-0 bottom-0" to={href} />
      <div className="h-10 w-10">{icon}</div>
      <div className={textContainerClassName || ''}>
        <Paragraph
          className={classNames(
            `pl-4 whitespace-nowrap pb-0 pt-0`,
            titleClassName,
          )}
        >
          {children}
        </Paragraph>
        {headline && (
          <Paragraph
            className={classNames(`pt-4 pl-4 text-sm`, headlineClassName)}
          >
            {headline}
          </Paragraph>
        )}
      </div>
    </li>
  )
}

export default ListItemCard
