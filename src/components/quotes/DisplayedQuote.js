import React from "react";

import classes from './DisplayedQuote.module.css';

const DisplayedQuote = props => {

    return (
        <div className={classes.container}>
            <p className={classes.p}>{props.text}</p>
            <small className={classes.small}>{props.author || ""}</small>
        </div>
    )
}

export default DisplayedQuote;