import React from "react"
import { graphql, Link } from "gatsby"

// components
import Splash from "../components/splash"

export default ({ data }) => (
    <div>
        <Splash>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{data.site.siteMetadata.subtitle}</h2>
            <article>
                <h3>Take a look around.</h3>
                <nav>
                    <Link to="/talks">About</Link>
                    <Link to="/blog/">Blog</Link>
                    <Link to="/talks/">Talks</Link>
                </nav>
            </article>
            <article>
                <h3>Or find me out and about.</h3>
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
        </Splash>
        <main>
            Page content goes here
        </main> 
    </div>
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
