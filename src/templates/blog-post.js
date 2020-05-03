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

export const BlogPostTemplate = ({
  description,
  title,
  helmet,
  number,
  youtube_link,
  youtube_embed,
  anchor_link,
  anchor_embed,
  spotify_link,
  apple_podcasts_link,
  url
}) => {
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
          <a className="resp-sharing-button__link" href={`https://facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener" aria-label="Share on Facebook">
            <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </div>Share on Facebook</div>
          </a>
          <a className="resp-sharing-button__link" href={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${url}`} target="_blank" rel="noopener" aria-label="Share on Twitter">
            <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
              </div>Share on Twitter</div>
          </a>
          <a className="resp-sharing-button__link" href={`https://reddit.com/submit/?url=${url}&amp;resubmit=true&amp;title=${title}`} target="_blank" rel="noopener" aria-label="Share on Reddit">
            <div className="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"/></svg>
              </div>Share on Reddit</div>
          </a>
        </Share>
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
  console.log(data)
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
        url={'https://hotfixpodcast.com' + post.fields.slug}
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
