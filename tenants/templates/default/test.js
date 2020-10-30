import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import css from './default.module.css'

const Test = ({ websiteData }) => {
    return (
        <div>
            <Head>
                <title>{websiteData.name}</title>
            </Head>
            <div className='hero'>
                <h1 className='title'>Welcome to {websiteData.name}!</h1>
                <p className='description'>
                    try to run the app on port 3030!
                 </p>

            </div>
        </div>
    )
}

export default Test
