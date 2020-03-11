import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
  border-radius: 20px;
  transform: translateY(-60px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background: #fff;
`

const Video = styled.iframe`
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
`

const Description = styled.p`
  text-align: center;
  padding: 20px 0 20px 0;
  margin-bottom: 80px;
`

const Where = styled.div`
  margin-bottom: 100px;
  text-align: center;
`

const ServiceButton = styled.a`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  background: #fff;
  color: #000;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  margin: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
const ServiceButtonInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  i {
    font-size: 3em;
    margin-bottom: 10px;
  }

  span {
    display: block;
  }
`

const Title = styled.h2`
  font-size: 2em;
  text-transform: uppercase;
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  number,
  youtube
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet}
      <Hero title={'Episode ' + number} subheading={title} />
      <div className='max-width-4 mx-auto'>
        <VideoContainer>
          <Video
            src={"https://www.youtube.com/embed/" + youtube}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </VideoContainer>
        <Description>
          <Title>Description</Title>
          {description}
        </Description>

        <Where>
          <Title>Listen on</Title>

          <ServiceButton href="#">
            <ServiceButtonInner>
              <i className="fab fa-spotify" style={{ color: '#1DB954' }}></i>
              <span>Spotify</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href="#">
            <ServiceButtonInner>
              <i className="fas fa-podcast" style={{ color: '#873cc1' }}></i>
              <span>Apple</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href="#">
            <ServiceButtonInner>
              <i className="fab fa-youtube" style={{ color: '#FF0000' }}></i>
              <span>Youtube</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href="#">
            <ServiceButtonInner>
              <i className="fas fa-headphones"></i>
              <span>More...</span>
            </ServiceButtonInner>
          </ServiceButton>
        </Where>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  number: PropTypes.string,
  youtube: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        number={post.frontmatter.number}
        youtube={post.frontmatter.youtube}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description,
        number,
        youtube
      }
    }
  }
`
