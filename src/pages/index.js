import React from "react"

import styles from "./index.module.css"
import Container from "../components/container"

console.log(styles)

const Post = props => (
    <div className={styles.post}>
        <h2>{props.postTitle}</h2>
    </div>
)

export default () => (
    <Container>
        <h1>David Wesst</h1>
        <div>This is my website. I do things.</div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Post postTitle="First blog" />
        <Post postTitle="Second blog" />
    </Container>
)
