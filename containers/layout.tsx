import Head from 'next/head'
import { FooterContainer, HeaderContainer, MainContainer } from '.'

export default function Layout({ children }: { children: any }): JSX.Element {
    return (
        <div className="container">
            <Head>
                <title>Portfolio</title>
            </Head>

            <HeaderContainer />

            <MainContainer>{children}</MainContainer>
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
