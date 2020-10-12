import test from '../mock/test'

// this function fetch data for each website
// you can change how you fetch your data ex. fetch from your db/api's
// you should fetch only necessary data ex.: client id, title, meta tags, css ecc. 
// while other data such pages contents should be fetched inside your components using, for example,  client id or hostname.

export default async function fetchData(host,url) { 
    let data =  test[host]
    return data
}
  