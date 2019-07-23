import React from "react"
import { Link } from "gatsby"

// components
import Splash from "../components/splash"

export default () => (
    <Splash>
        <h1>404</h1>
        <p>Err...that's probably not good. You should probably <Link to="/">head back home.</Link></p>
    </Splash>
)