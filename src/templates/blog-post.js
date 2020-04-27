import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import { withPrefix } from 'gatsby'

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
  margin-bottom: 80px;
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

const Title = styled.span`
  display: block;
  font-weight: 900;
  margin-bottom: 20px;
  font-size: 2em;
  text-transform: uppercase;
`

const AnchorEmbed = styled.iframe`
  width: 100%;
  height: 160px;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transform: translateY(-40px);
  
  @media (max-width: 800px) {
    height: 98px;
  }
`

const Share = styled.div`
  margin-bottom: 80px;
  text-align: center;
`

const Reaction = styled.div`
  margin-bottom: 100px;
  text-align: center;
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  number,
  youtube_link,
  youtube_embed,
  anchor_link,
  anchor_embed,
  spotify_link,
  apple_podcasts_link
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet}
      <Hero title={'Episode ' + number} subheading={title} />
      <div className='max-width-4 mx-auto px2'>
        <VideoContainer>
          <Video
            src={youtube_embed}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </VideoContainer>


        <AnchorEmbed src={anchor_embed} frameborder="0" scrolling="no"></AnchorEmbed>

        <Description>
          <Title className='h2'>Description</Title>
          {description}
        </Description>

        <Where>
          <Title>Listen on</Title>

          <ServiceButton href={spotify_link} target='_blank'>
            <ServiceButtonInner>
              <i className="fab fa-spotify" style={{ color: '#1DB954' }}></i>
              <span>Spotify</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href={apple_podcasts_link} target='_blank'>
            <ServiceButtonInner>
              <i className="fas fa-podcast" style={{ color: '#873cc1' }}></i>
              <span>Apple</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href={youtube_link} target='_blank'>
            <ServiceButtonInner>
              <i className="fab fa-youtube" style={{ color: '#FF0000' }}></i>
              <span>Youtube</span>
            </ServiceButtonInner>
          </ServiceButton>

          <ServiceButton href={anchor_link} target='_blank'>
            <ServiceButtonInner>
              <i className="fas fa-headphones"></i>
              <span>More...</span>
            </ServiceButtonInner>
          </ServiceButton>
        </Where>

        <Share>
          <Title>Share</Title>
          <div className="sharethis-inline-share-buttons"></div>
        </Share>
        <Reaction>
          <Title>React</Title>
          <div className="sharethis-inline-reaction-buttons"></div>
        </Reaction>
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
          <Helmet titleTemplate="%s">
            <title>{post.frontmatter.title + ` | Hotfix Podcast`}</title>
            <meta name="description" content={post.frontmatter.description} />
            <meta property="og:title" content={post.frontmatter.title + ` | Hotfix Podcast`} />
            <meta property="og:description" content={post.frontmatter.description} />
            <meta property="og:image" content={`https://hotfixpodcast.com${post.frontmatter.thumbnailimage.childImageSharp.resize.src}`} />
            <meta property="og:url" content={`https://hotfixpodcast.com${post.fields.slug}`} />
            <meta name="twitter:title" content={post.frontmatter.title + ` | Hotfix Podcast`} />
            <meta name="twitter:description" content={post.frontmatter.description} />
            <meta name="twitter:image" content={`https://hotfixpodcast.com${post.frontmatter.thumbnailimage.childImageSharp.resize.src}`} />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
        }
        title={post.frontmatter.title}
        number={post.frontmatter.number}
        youtube={post.frontmatter.youtube}
        youtube_link={post.frontmatter.youtube_link}
        youtube_embed={post.frontmatter.youtube_embed}
        anchor_link={post.frontmatter.anchor_link}
        anchor_embed={post.frontmatter.anchor_embed}
        spotify_link={post.frontmatter.spotify_link}
        apple_podcasts_link={post.frontmatter.apple_podcasts_link}
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
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        number
        youtube_link
        youtube_embed
        anchor_link
        anchor_embed
        spotify_link
        apple_podcasts_link
        thumbnailimage {
          childImageSharp {
            resize(width: 1200, height: 630, quality: 75) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`
