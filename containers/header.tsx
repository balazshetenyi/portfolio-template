import Link from 'next/link'
import { Header, Footer } from '../components'
import FooterContainer from './footer'
import { useUser } from '@auth0/nextjs-auth0'

export default function HeaderContainer() {
    const { user } = useUser()

    return (
        <>
            {/* Header */}
            <Header>
                <Header.Wrapper>
                    <Header.AvatarLink href="/">
                        <Header.Avatar src="images/avatar.jpg"></Header.Avatar>
                    </Header.AvatarLink>
                    <Header.Title>
                        <strong>I am Strata</strong>, a super simple <br />
                        responsive site template freebie <br />
                        crafted by <a href="#">HTML5 UP</a>
                    </Header.Title>
                </Header.Wrapper>

                {/* Footer */}
                <FooterContainer id="footer__header" />
                {user && (
                    <>
                        <a className="upload" href="upload">
                            Upload
                        </a>
                        <a className="logout" href="/api/auth/logout">
                            Logout
                        </a>
                    </>
                )}
            </Header>
        </>
    )
}
