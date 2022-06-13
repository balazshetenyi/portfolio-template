import type { NextPage } from 'next'
import { GetInTouchContainer, IntroContainer, RecentWorkContainer } from '../containers'
import Layout from '../containers/layout'

const Home: NextPage = () => {
    return (
        <Layout>
            <IntroContainer />
            <RecentWorkContainer />
            <GetInTouchContainer />
        </Layout>
    )
}

export default Home
