import React from 'react'
import RenderPage from '../tenant/components/renderPage'
import { useRouter } from 'next/router'

const Home = ({ websiteData,isSsr }) => {
    const router = useRouter()
    const { slug } = router.query
    return <RenderPage page="/index" websiteData={websiteData} isSsr={isSsr} />
}
export default Home
