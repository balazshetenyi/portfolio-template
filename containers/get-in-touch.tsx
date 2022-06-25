import { GetInTouch } from '../components'

export default function GetInTouchContainer() {
    return (
        <GetInTouch title="Get in touch">
            <GetInTouch.Text>
                Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan
                orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum
                dolor.
            </GetInTouch.Text>
            <GetInTouch.ContactWrapper>
                <GetInTouch.Form buttonText="Kuldes"></GetInTouch.Form>
                <div className="contact-holder">
                    <GetInTouch.Contact icon="fa-solid fa-house-chimney">
                        <p>
                            1234 Somewhere Rd.
                            <br />
                            Nashville,
                            <br />
                            TN 00000
                            <br />
                            United States
                        </p>
                    </GetInTouch.Contact>
                    <GetInTouch.Contact icon="fa-solid fa-mobile-screen-button">
                        <p>000-000-0000</p>
                    </GetInTouch.Contact>
                    <GetInTouch.Contact icon="fa-solid fa-envelope">
                        <a href="mailto:hello@untitled.tld?subject=Uzenet munka ugyben">
                            hello@untitled.tld
                        </a>
                    </GetInTouch.Contact>
                </div>
            </GetInTouch.ContactWrapper>
        </GetInTouch>
    )
}
