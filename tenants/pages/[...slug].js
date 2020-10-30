import React from 'react'
import RenderPage from '../tenant/components/renderPage'
import { useRouter } from 'next/router'

const Home = ({ websiteData,isSsr }) => {
    const router = useRouter()
    const { slug} = router.query
    const { asPath} = router
    return <RenderPage page={asPath} websiteData={websiteData} isSsr={isSsr} />
}
export default Home
