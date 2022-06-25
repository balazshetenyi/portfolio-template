import React from 'react'
import { Container, Wrapper, Avatar, Title, AvatarLink } from './styles/header'

export default function Header({ children, ...restProps }: { children: any }): JSX.Element {
    return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = ({ children, ...restProps }: { children: any }): JSX.Element => {
    return <Wrapper className="header-container">{children}</Wrapper>
}

Header.Avatar = ({ src, ...restProps }: { src: string }): JSX.Element => {
    return <Avatar src={src} {...restProps} />
}

Header.Title = ({ children, ...restProps }: { children: any }): JSX.Element => {
    return <Title {...restProps}>{children}</Title>
}

Header.AvatarLink = ({
    href,
    children,
    ...restProps
}: {
    href: string
    children: any
}): JSX.Element => {
    return (
        <AvatarLink href={href} {...restProps}>
            <a className="avatar-link">{children}</a>
        </AvatarLink>
    )
}
