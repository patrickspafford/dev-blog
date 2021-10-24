import React from 'react'
import { IHeaderVersion } from './types'
import HeaderContainer from '../HeaderContainer'
import HeaderLeft from '../HeaderLeft'
import FlexDiv from '../FlexDiv'
import Hamburger from '../Hamburger'
import { useRecoilState } from 'recoil'
import { menuOpenAtom } from '@state'

const MobileHeader = ({ pages }: IHeaderVersion) => {
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
  return (
    <HeaderContainer>
      <HeaderLeft />
      <FlexDiv>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
      </FlexDiv>
    </HeaderContainer>
  )
}

export default MobileHeader
