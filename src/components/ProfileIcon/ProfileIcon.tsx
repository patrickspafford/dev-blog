import React, { useState } from 'react'
import { IChildren } from '@interfaces'

interface IProfileIcon extends IChildren {
  href: string
  accentColor: string
}

const ProfileIcon = ({
  href,
  children,
  accentColor = 'black',
}: IProfileIcon) => {
  const [hovering, setHovering] = useState(false)
  return (
    <a
      href={href}
      className="cursor-pointer transition-all"
      style={{ color: hovering ? accentColor : 'black' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </a>
  )
}

export default ProfileIcon
