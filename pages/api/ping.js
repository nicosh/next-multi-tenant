import fetchData from '../../tenant/drivers/fetchData'

export default  async function handler(req, res) {
    let data = await fetchData(req.headers.host)
    res.json(data)
}