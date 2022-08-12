import classes from './Navigation.module.css'

const Navigation = () => {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        Random
                    </li>
                    <li>
                        All Quotes
                    </li>
                    <li>
                        + Add Quote
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;