import type { NextPage } from 'next'
import { GetInTouchContainer, IntroContainer, RecentWorkContainer } from '../containers'
import Layout from '../containers/layout'
import clientPromise from '../libs/mongodb'
import { Portfolio } from '../schemas/portfolio'

const Home = ({ data }: { data: Portfolio[] }) => {
    return (
        <Layout>
            <IntroContainer />
            <RecentWorkContainer data={data} />
            <GetInTouchContainer />
        </Layout>
    )
}

export default Home

export async function getServerSideProps() {
    try {
        const client = await clientPromise
        const db = client.db('tamas-portfolio')

        const collection = await db.collection('portfolio')
        const all: Portfolio = await collection.find({}).sort({ _id: -1 }).limit(4).toArray()
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
