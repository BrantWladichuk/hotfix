/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { css, jsx } from '@emotion/core'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article>
                <Link to={post.fields.slug} css={css`
                  position: relative;
                  color: #222;
                  text-decoration: none;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                  display: block;
                  border-radius: 5px;
                  margin-bottom: 20px;
                  background: white;
                  &:hover {
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                  }
                `}>
                  <div className='flex items-center justify-between pr2'>
                    <div className='flex items-center'>
                      <img width="110" className='mr2' css={css`
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                      `}src={post.frontmatter.thumbnailimage.childImageSharp.fluid.src} />
                      <strong>{post.frontmatter.title}</strong>
                    </div>
                    <small>{post.frontmatter.date}</small>
                  </div>
                </Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                number
                templateKey
                date(formatString: "MMMM DD, YYYY")
                thumbnailimage {
                  childImageSharp {
                    fluid(maxWidth: 200, quality: 75) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
