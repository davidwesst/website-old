import React from "react"

// style
import styles from "./header.module.css"

export default ({ children }) => {
    // component
    return (
        <section className={styles.header} >
            <article className={styles.content}>
                {children}
            </article>
        </section>
    )
}