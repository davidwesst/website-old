import React from "react"
import { graphql, Link } from "gatsby"

// components
import Header from "../components/header"

export default ({ data }) => (
    <>
        <Header>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{data.site.siteMetadata.subtitle}</h2>
            <article>
                <h3>Take a look around.</h3>
                <nav>
                    <Link to="/about/">About</Link>
                    <Link to="/blog/">Blog</Link>
                    <Link to="/talks/">Talks</Link>
                </nav>
            </article>
            <article id="contact-me">
                <h3>Find me in the digital world.</h3>
                <nav>
                    <a href="/">Instagram</a>
                    <a href="/">Twitter</a>
                    <a href="/">Twitch</a>
                    <a href="/">Mixer</a>
                    <a href="/">Facebook</a>
                    <a href="/">YouTube</a>
                    <a href="/">LinkedIn</a>
                    <a href="/">GitHub</a>
                    <a href="/">Azure DevOps</a>
                </nav>
            </article>
        </Header>
    </>
)

// query
export const data = graphql`
    query {
        site {
            siteMetadata {
                title,
                subtitle
            }
        }
    }
`
