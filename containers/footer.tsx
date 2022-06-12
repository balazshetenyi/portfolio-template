import { Footer } from '../components'

export default function FooterContainer({ id }: { id: string }) {
    return (
        <Footer id={id}>
            <Footer.FooterWrapper>
                <Footer.SocialLink href="#" name="fa-brands fa-facebook-square"></Footer.SocialLink>
                <Footer.SocialLink href="#" name="fa-solid fa-envelope"></Footer.SocialLink>
            </Footer.FooterWrapper>
            <Footer.Copyright>
                &copy; {new Date().getFullYear()} Hetenyi Tamas | Designed by Balagedev
            </Footer.Copyright>
        </Footer>
    )
}
