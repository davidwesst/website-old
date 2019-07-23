import React from "react"

// style
import styles from "./splash.module.css"

export default ({ children }) => {
    // component
    return (
        <section className={styles.splash} >
            {children}
        </section>
    )
}