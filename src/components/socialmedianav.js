import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

function getAnchors (data) {
    return  data.map(link => {
        return (
            <a key={link.id} href={link.url}>{link.display}</a>
        )
    })
}

export default () => {
    // data
    const data = useStaticQuery(
        graphql`
        query {
            allSocialJson {
              nodes {
                id,
                display,
                url
              }
            }
          }
        `
    )

    // component
    return (
        <nav>
            {getAnchors(data.allSocialJson.nodes)}
        </nav>
    )
}