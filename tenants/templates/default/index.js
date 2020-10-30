import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {BuildCss} from '../../tenant/helpers' 
import css from './default.module.css' // template css

const Home = ({ websiteData, isSsr }) => {
    const styles  = websiteData.css ? BuildCss(websiteData.css) : false // website custom css
    return (
        <div>
            <Head>
                <title>{websiteData.name}</title>
                <meta name="description" content={websiteData.description} />
                {styles}
            </Head>
            <div className='hero'>
                <h1 className='title'>Welcome to {websiteData.name}!</h1>
                <p className={css.dark}>
                    the app is {isSsr ? "" : "not"} server side rendered. <br/>
                    try to run the app on port 3030!
                 </p>

                <a href="/test">test</a>

            </div>
        </div>
    )
}

export default Home