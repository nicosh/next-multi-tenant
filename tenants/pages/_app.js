import DataProvider from '../tenant/components/dataProvider'
import config from '../tenant/config'
import fetchData from '../tenant/drivers/fetchData'
const { SSR, UseLocalStorage } = config
// You should import here you global (used for every website) css, such boostrap grid system
function MyApp({ Component, pageProps, websiteData }) {
    return (
        <DataProvider
            websiteData={websiteData}
            SSR={SSR}
            UseLocalStorage={UseLocalStorage}
        >
            <Component {...pageProps} />
        </DataProvider>
    )
}

if (SSR) {
    MyApp.getInitialProps = async ({ ctx }) => {
        const host = ctx.req.headers.host
        const url = ctx.req.url 
        const data = await fetchData(host,url,ctx.req)
        return {
            websiteData: {
                ...data
            }
        }
    }
}


export default MyApp