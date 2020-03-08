import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../../public/img/hotfix/logo_white.png'

import styled from '@emotion/styled'

const Nav = styled.nav`
  // background: black;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
`

const Navbar = class extends React.Component {
  render() {
    return (
      <Nav className='flex items-center px2'>
        <img src={logo} width="170px" />
      </Nav>
    )
  }
}

export default Navbar
