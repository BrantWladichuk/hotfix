import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import styled from '@emotion/styled'
import '../sass/reset.css'
import 'basscss/css/basscss.css'
import '../sass/all.sass'

const Container = styled.div`
  min-height: 100vh;
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="57x57" href={`${withPrefix('/')}apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${withPrefix('/')}apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${withPrefix('/')}apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${withPrefix('/')}apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${withPrefix('/')}apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${withPrefix('/')}apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${withPrefix('/')}apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${withPrefix('/')}apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`${withPrefix('/')}android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${withPrefix('/')}favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${withPrefix('/')}favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${withPrefix('/')}favicon-16x16.png`} />
        <link rel="manifest" href={`${withPrefix('/')}manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={`${withPrefix('/')}ms-icon-144x144.png`} />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        <script src="https://kit.fontawesome.com/52a2cd3c92.js" crossorigin="anonymous"></script>
      </Helmet>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
