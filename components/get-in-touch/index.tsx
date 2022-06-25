import {
    Container,
    Title,
    Text,
    Form,
    SendForm,
    Contact,
    ContactWrapper,
} from './styles/get-in-touch'

export default function GetInTouch({
    title,
    children,
    ...restProps
}: {
    title: string
    children: any
}): JSX.Element {
    return (
        <Container {...restProps}>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

GetInTouch.Text = function GetInTouchText({
    children,
    ...restProps
}: {
    children: string
}): JSX.Element {
    return <Text {...restProps}>{children}</Text>
}

GetInTouch.Form = function GetInTouchForm({
    buttonText,
    ...restProps
}: {
    buttonText: string
}): JSX.Element {
    return (
        <Form {...restProps}>
            <input type={'text'} name="name" id="name" placeholder="Neved" />
            <input type={'email'} name="email" id="email" placeholder="Email cimed" />
            <textarea name="message" id="message" placeholder="Uzenet..." rows={10}></textarea>
            <SendForm type="submit">{buttonText}</SendForm>
        </Form>
    )
}

GetInTouch.ContactWrapper = function GetInTouchContactWrapper({
    children,
    ...restProps
}: {
    children: any
}): JSX.Element {
    return <ContactWrapper {...restProps}>{children}</ContactWrapper>
}

GetInTouch.Contact = function GetInTouchContact({
    children,
    icon,
    ...restProps
}: {
    children: JSX.Element
    icon: string
}): JSX.Element {
    return (
        <Contact {...restProps}>
            <i className={icon}></i>
            {children}
        </Contact>
    )
}
