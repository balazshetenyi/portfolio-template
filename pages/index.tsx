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
        <div className="container">
            <Head>
                <title>Portfolio</title>
            </Head>

            <HeaderContainer />

            <MainContainer>
                <IntroContainer />
                <RecentWorkContainer />
                <GetInTouchContainer />
            </MainContainer>

            <FooterContainer id="footer__main" />

            <style jsx>{`
                .container {
                    display: flex;
                    flex-flow: column nowrap;
                }
                @media (min-width: 900px) {
                    .container {
                        flex-direction: row;
                    }
                }
            `}</style>
        </div>
    )
}

export default Home
