import React from 'react'
import styled from '@emotion/styled'

const Wrap = styled.div`
  height: 400px;
  background: rgb(142,20,94);
  background: linear-gradient(128deg, rgba(142,20,94,1) 0%, rgba(26,0,51,1) 100%);
`

const Title = styled.h1`
  font-family: proxima-nova, sans-serif;
  font-weight: 900;
  font-style: normal;
  text-transform: uppercase;
  font-size: 3rem;
  color: white;
`

const Subtitle = styled.h1`
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: white;
`

const Hero = ({ title, subheading }) =>
  <Wrap className='flex items-center justify-center'>
    <div>
      <Title className='center mb1'>
        {title}
      </Title>
      <Subtitle className='center'>
        {subheading}
      </Subtitle>
    </div>
  </Wrap>

export default Hero