import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import logo from '../../public/img/hotfix/logo_white.png'

import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  background: #222;
  padding: 20px;
  text-align: center;
`

const Footer = class extends React.Component {
  render() {
    return (
      <FooterContainer>
        <img src={logo} width="130px" style={{ opacity: '0.3' }}/>
      </FooterContainer>
    )
  }
}

export default Footer
