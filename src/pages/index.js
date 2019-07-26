import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

// components
import Header from "../components/header"
import SocialMediaNav from "../components/socialmedianav"

export default ({ data }) => (
    <>
        <Helmet>
            <title>{data.site.siteMetadata.title} | Home</title>
        </Helmet>
        <Header>
            <section>
                <h1>
                    Hi friendo. My name is <span className="highlight">David Wesst</span>. I am <span className="highlight">making a video game</span> I like to call <span className="highlight">#VagabondGame</span>.
                </h1>
            </section>
            <section>
                <h2>
                    You can download and play my game <a href="https://cocobokostudios.itch.io/vagabond" className="highlight">here</a>.
                </h2>
            </section>
            <section>
                <h2>
                    You can find in and around these places:
                    <SocialMediaNav />
                </h2>
            </section>
        </Header>
    </>
)

// query
export const data = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
