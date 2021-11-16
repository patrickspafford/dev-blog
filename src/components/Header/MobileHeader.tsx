import React, { useContext } from 'react'
import { IHeaderVersion } from './types'
import HeaderContainer from '../HeaderContainer'
import HeaderLeft from '../HeaderLeft'
import Hamburger from '../Hamburger'
import { BlogContext } from '@state'

const MobileHeader = ({ pages }: IHeaderVersion) => {
  const { menuOpen, setMenuOpen } = useContext(BlogContext)
  return (
    <HeaderContainer>
      <HeaderLeft />
      <div className="flex items-center justify-center">
        <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
      </div>
    </HeaderContainer>
  )
}

export default MobileHeader
