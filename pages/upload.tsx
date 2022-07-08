import { NextPageContext } from 'next/types'
import { Layout, UploadContainer } from '../containers'
import clientPromise from '../libs/mongodb'
import { Portfolio } from '../schemas/portfolio'

const Upload = ({ data }: { data: Portfolio[] }) => {
    return (
        <Layout>
            <UploadContainer data={data} />
        </Layout>
    )
}

export default Upload

export async function getServerSideProps(context: NextPageContext) {
    try {
        const client = await clientPromise
        const db = client.db('tamas-portfolio')

        const collection = await db.collection('portfolio')
        const all: Portfolio = await collection.find({}).sort({ _id: -1 }).limit(20).toArray()
        const data = await JSON.parse(JSON.stringify(all))

        return {
            props: { data },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
