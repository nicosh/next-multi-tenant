import React, { Component } from 'react';
import absoluteUrl from 'next-absolute-url'
import {setStorage,GetFromStorage} from './drivers/localStorage'

class DataProvider extends Component {
    constructor(props) {
        super(props)
        const { children, SSR, websiteData } = props
        this.state = {
            loading: SSR == false,
            websiteData,

        }
    }

    async componentDidMount() {
        const { SSR,UseLocalStorage } = this.props
        const { origin } = absoluteUrl(this.props.req)
        let url = `${origin}/api/ping`
        if (!SSR) {
            let cachedData = UseLocalStorage ? GetFromStorage() : false 
            if(cachedData){
                this.setState({
                    loading: false,
                    websiteData: cachedData
                })
            }else{
                let request = await fetch(url)
                let data = await request.json()
                UseLocalStorage ? setStorage(data) : false
                this.setState({
                    loading: false,
                    websiteData: data
                })
            }
        }
    }

    render() {
        const { loading, websiteData } = this.state
        const { children, SSR } = this.props
        let elements = React.Children.toArray(children)
        let injectedProps = { isSsr: SSR, websiteData }
        elements = React.cloneElement(elements[0], injectedProps)
        return SSR ? elements : (loading ? <p>Loading</p> : elements)
    }
}


export default DataProvider
