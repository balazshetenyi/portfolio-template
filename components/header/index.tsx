import React from 'react'
import { Container, Wrapper, Avatar, Title, Link } from './styles/header'

export default function Header({ children, ...restProps }: { children: any }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = ({ children, ...restProps }: { children: any }): any => {
    return <Wrapper className="header-container">{children}</Wrapper>
}

Header.Avatar = ({ src, ...restProps }: { src: string }): JSX.Element => {
    return <Avatar src={src} {...restProps} />
}

Header.Title = ({ children, ...restProps }: { children: any }): any => {
    return <Title {...restProps}>{children}</Title>
}

Header.Link = ({ children, ...restProps }: { children: any }): any => {
    return <Link {...restProps}>{children}</Link>
}
