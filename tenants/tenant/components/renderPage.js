import React from 'react'
import dynamic from 'next/dynamic'
import Index from '../../templates/default/index'
const RenderPage = ({ websiteData,isSsr,page }) => {
    const DynamicComponent = dynamic(() => import(`../../templates/${websiteData.template}${page}`))
    return <DynamicComponent websiteData={websiteData} isSsr={isSsr} />
}

export default RenderPage
