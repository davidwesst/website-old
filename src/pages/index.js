import React, { Children } from "react"

// components
import Header from "../components/header"

export default () => (
    <div className="root">
        <Header />
        <main>
            Page content goes here
        </main> 
    </div>
)
