//eslint-disable-next-line
import React from 'react'

import styles from '../css/Signin.module.css'
const Signin = () => {
    return (
        <>
            <div className={styles.container}>
                <form>
                    <h2>Sign In</h2>
                    <div className={styles.form_group}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div >

        </>
    )
}

export default Signin