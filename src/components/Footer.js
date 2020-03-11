import React from 'react'
import logo from '../../public/img/hotfix/logo_white.png'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const FooterContainer = styled.footer`
  background: #080808;
  padding: 20px;
  text-align: center;
`
const Footer = class extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Link to='/'>
          <img src={logo} width="130px" style={{ opacity: '0.3' }}/>
        </Link>
      </FooterContainer>
    )
  }
}

export default Footer
