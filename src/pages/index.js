import React from 'react'
import { graphql, Link } from 'gatsby'

const Page = (props) => {
  const { data: { allPages } } = props
  const home = allPages.nodes.find(page => page.url === '/')

  return (
    <div>
      <ul id="nav">
        {
          allPages.nodes.map(node => <li><Link to={node.url}>{node.title}</Link></li>)
        }
        <li><Link to={`blog`}>Blog</Link></li>
      </ul>  
      <div id= "main">
        <div dangerouslySetInnerHTML={{ __html: home.html }} />
      </div>
    </div>
  )
}

export default Page
export const query = graphql`
  query {
    allPages(filter: {status: {eq: "published"}}) {
      nodes {
        title
        blurb
        status
        url
        html
      }
    }
  }
`