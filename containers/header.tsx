import { Header, Footer } from '../components'
import FooterContainer from './footer'

export default function HeaderContainer() {
    return (
        <>
            {/* Header */}
            <Header>
                <Header.Wrapper>
                    <Header.Link>
                        <Header.Avatar src="images/avatar.jpg"></Header.Avatar>
                    </Header.Link>
                    <Header.Title>
                        <strong>I am Strata</strong>, a super simple <br />
                        responsive site template freebie <br />
                        crafted by <a href="#">HTML5 UP</a>
                    </Header.Title>
                </Header.Wrapper>

                {/* Footer */}
                <FooterContainer id="footer__header" />
            </Header>
        </>
    )
}
