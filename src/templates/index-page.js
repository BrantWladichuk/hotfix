import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Hero from '../components/Hero'
import Helmet from 'react-helmet'

export const IndexPageTemplate = ({
  heading,
  subheading,
  helmet
}) => (
  <div>
    {helmet || ''}
    <Hero title={heading} subheading={subheading} />
    <div className="max-width-4 mx-auto pt3 px3">
      <h2>Episodes</h2>
      <BlogRoll />
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        helmet={
          <Helmet titleTemplate="%s | Hotfix Podcast">
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading,
        title,
        description
      }
    }
  }
`
