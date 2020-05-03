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
    margin-right: 10px;
    margin-left: 20px;

    &.cta {
      border-radius: 3px;
      border: 1px solid white;
      padding: 6px 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      &:hover {
        background: #000;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
    }
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
              {/* <Link to='/'>Home</Link> */}
              {/* <Link to='/about' style={{ marginLeft: '20px', marginRight: '10px' }}>About</Link> */}
              <a className='cta' href="https://podcasts.apple.com/ca/podcast/hotfix/id1509473966" target="_blank">Leave a Review</a>
            </div>
          </Nav>
        </Headroom>
      </header>
    )
  }
}

export default Navbar
