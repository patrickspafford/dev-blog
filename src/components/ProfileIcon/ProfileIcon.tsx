import React from 'react'
import { IWithChild } from '@interfaces'

interface IProfileIcon extends IWithChild {
  href: string
}

const ProfileIcon = ({ href, children }: IProfileIcon) => (
  <a href={href} className="hover:opacity-50 cursor-pointer">
    {children}
  </a>
)

export default ProfileIcon
