import React from "react"
import { graphql, Link } from "gatsby"

// components
import Header from "../components/header"
import SocialMediaNav from "../components/socialmedianav"

export default ({ data }) => (
    <>
        <Header>
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
                <h2 className="lowlight">
                    Video Game <span className="highlight">Developer</span>.
                    Cloud <span className="highlight">Solution Architect</span>.
                    Open Web <span className="highlight">Advocate</span>.
                    DevOps <span className="highlight">Enthusiast</span>.
                    Work-Life <span className="highlight">Balancer</span>.
                </h2>
            </header>
            <section>
                <h3>Welcome. Please, take a look around.</h3>
                <nav>
                    <Link to="/about/">About</Link>
                    <Link to="/blog/">Blog</Link>
                    <Link to="/talks/">Talks</Link>
                    <Link to="/contact/">Contact</Link>
                </nav>
            </section>
        </Header>
        <main>
            <section>
                <h3>Looking for my video game? Here you go.</h3>
                <nav>
                    <a href="/">Vagabond</a>
                </nav>
            </section>
            <section>
                <h3>I tend to hang out in these digital places.</h3>
                <SocialMediaNav />
            </section>
        </main>
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
