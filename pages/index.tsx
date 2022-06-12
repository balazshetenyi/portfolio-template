import type { NextPage } from 'next'
import Head from 'next/head'
import {
    FooterContainer,
    GetInTouchContainer,
    HeaderContainer,
    IntroContainer,
    MainContainer,
    RecentWorkContainer,
} from '../containers'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>

            <HeaderContainer />

            <MainContainer>
                <IntroContainer />
                <RecentWorkContainer />
                <GetInTouchContainer />
            </MainContainer>

            <FooterContainer />
        </>
    )
}

export default Home
