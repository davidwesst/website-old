import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default props => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{props.headerText}</h2>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
        </header>
    )
}