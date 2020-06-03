import React from 'react'
import { graphql } from 'gatsby'
import PostItem from "../components/postItem"

const Blog = (props) => {
  const { data: { allPosts } } = props
  return (
    <div id= "main">
      {
        allPosts.nodes.map(node => <PostItem data={node} />)
      }
    </div>
  )
}

export default Blog
export const query = graphql`
  query {
    allPosts(filter: {status: {eq: "published"}}  sort: { fields: [publish_date], order: DESC }) {
      nodes {
        title
        tags
        blurb
        status
        url
        cover_image
        publish_date(fromNow: false)
      }
    }
  }
`