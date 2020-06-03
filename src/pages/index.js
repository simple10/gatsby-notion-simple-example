import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <div>Hello world!</div>
      <ul>
        <li><Link to={`blog`} className="button">All Articles</Link></li>
      </ul>
    </div>
  )
}

