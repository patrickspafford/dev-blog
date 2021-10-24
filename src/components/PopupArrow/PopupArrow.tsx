import React, { ReactNode } from 'react'
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'
import { FaCaretDown } from 'react-icons/fa'
import { Timeouts } from '@utils'
import { IPopupArrow } from './types'

const PopupArrow = ({ children }: IPopupArrow) => (
  <Popup
    position="bottom right"
    on={['hover']}
    mouseLeaveDelay={Timeouts.sm}
    trigger={
      <div>
        <FaCaretDown color="#FFFFFF" />
      </div>
    }
  >
    {children}
  </Popup>
)

export default PopupArrow
