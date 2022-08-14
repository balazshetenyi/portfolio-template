import { NextPageContext } from 'next/types'
import { Layout, UploadContainer } from '../containers'
import clientPromise from '../libs/mongodb'
import { Portfolio } from '../schemas/portfolio'
import { useUser } from '@auth0/nextjs-auth0'

const Upload = ({ data }: { data: Portfolio[] }) => {
    const { user, error, isLoading } = useUser()

    if (isLoading) {
        return <p>Loading...</p>
    }

    return user ? (
        <Layout>
            <UploadContainer data={data} />
        </Layout>
    ) : (
        <h1>Jelentkezz be, ha ezt az oldalt szeretned latogatni! </h1>
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
