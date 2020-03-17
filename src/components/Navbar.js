import React from 'react'
import { Link } from 'gatsby'
import logo from '../../public/img/hotfix/logo_white.png'
import Headroom from "react-headroom"
import styled from '@emotion/styled'

const Nav = styled.nav`
  background: ${props => props.pinned ? '#080808' : 'transparent'};
  height: 65px;

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
  }
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pinned: false
    }
  }
  render() {
    return (
      <header className="absolute col-12 z4">
        <Headroom
          pinStart={100}
          onUnfix={() => this.setState({ pinned: false })}
          onUnpin={() => this.setState({ pinned: false })}
          onPin={() => this.setState({ pinned: true })}>
          <Nav className='flex items-center justify-between px2' pinned={this.state.pinned}>
            <div>
              <Link to='/'><img src={logo} width="130px" /></Link>
            </div>
            <div>
              <Link to='/'>Home</Link>
              {/* <Link to='/about' style={{ marginLeft: '20px', marginRight: '10px' }}>About</Link> */}
            </div>
          </Nav>
        </Headroom>
      </header>
    )
  }
}

export default Navbar
