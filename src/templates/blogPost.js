import React from 'react'
import { graphql } from 'gatsby'
import { parseImageUrl } from 'notabase/src/utils'


export default ({ data }) => {
  const { posts: { title, tags, publish_date, html, url, blurb, cover_image } } = data

  return (
    <div id = "main">
      <div>{tags && tags.join(', ')}</div> 
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
      url
      blurb
      cover_image
    }
  }
`