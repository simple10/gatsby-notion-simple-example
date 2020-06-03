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
    allPosts(filter: {status: {eq: "published"}, content_type: {eq: "article"}}  sort: { fields: [publish_date], order: DESC }) {
      nodes {
        title
        tags
        desc
        content_type
        status
        url
        read_time
        cover_image
        slug
        publish_date(fromNow: false)
      }
    }
  }
`