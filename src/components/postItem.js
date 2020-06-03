import React from "react"
import { Link } from "gatsby";

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, blurb, url } = data

    return (
        <div style={{ margin: 10 }}>        
            <Link to={`/blog/${url}/`}>
              <h2>{title}</h2>
            </Link>
            <div style = {{color: "grey"}}>Tags: {tags && tags.join(', ')} • Published: {publish_date}</div>
            <p style = {{ color: "black" }} dangerouslySetInnerHTML={{ __html: blurb }}></p>
        </div>
    )
}
