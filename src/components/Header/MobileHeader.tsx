import { IHeaderVersion } from './types'
import HeaderContainer from '../HeaderContainer'
import HeaderLeft from '../HeaderLeft'
import Hamburger from '../Hamburger'
import { menuOpenAtom } from '@state'
import React from 'react'
import { useRecoilState } from 'recoil'

const MobileHeader = ({ pages }: IHeaderVersion) => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
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
