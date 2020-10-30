// this function fetch data for each website
// you can change how you fetch your data ex. fetch from your db/api's
// you should fetch only necessary data ex.: client id, title, meta tags, css ecc. 
// while other data such pages contents should be fetched inside your components using, for example,  client id or hostname.
import absoluteUrl from 'next-absolute-url'

export default async function fetchData(host,url,req) { 
    host = host.includes("localhost") ? host.replace(":","") : host
    const { origin } = absoluteUrl(req)
    const FECTHURL = `${origin}/tenants/${host}/default.json`
    let hostdata = await fetch(FECTHURL)
    let hostData = await hostdata.json()
   // const hostData = require(`../tenants/${host}/default.json`) // default website data
    let pageData = {}
    return hostData
}
  