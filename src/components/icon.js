import React from "react"
import Icons from "simple-icons"

import iconStyles from "./icon.module.css"

export default (props) => {
    let icon = Icons[props.iconName];
    let blob = new Blob([icon.svg], {type: 'image/svg+xml'});
    let url = URL.createObjectURL(blob);

    function handleUnload(e) {
        return URL.revokeObjectURL(url), {once: true};
    }

    const imgWrapperStyle = {
        backgroundColor: `${icon.hex}`
    }

    return (
        <span class={iconStyles.wrapper}>
            <img src={url} alt={icon.title} class={iconStyles.small} onLoad={handleUnload} />
        </span> 
    )
}