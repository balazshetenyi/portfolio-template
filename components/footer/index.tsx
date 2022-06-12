import Link from 'next/link'
import React from 'react'
import {
    Container,
    FooterWrapper,
    SocialLink,
    Copyright,
    TextSmall,
    SocialLinks,
} from './styles/footer'

export default function Footer({
    id,
    children,
    ...restProps
}: {
    id: string
    children: any
}): JSX.Element {
    return (
        <Container id={id} {...restProps}>
            {children}
        </Container>
    )
}

Footer.FooterWrapper = ({ children, ...restProps }: { children: any }): any => {
    return (
        <FooterWrapper>
            <SocialLinks>{children}</SocialLinks>
        </FooterWrapper>
    )
}

Footer.SocialLink = ({ href, name, ...restProps }: { href: string; name: string }): JSX.Element => {
    return (
        <SocialLink>
            <Link href={href}>
                <a>
                    <i className={name} {...restProps}></i>
                </a>
            </Link>
        </SocialLink>
    )
}

Footer.Copyright = ({ children, ...restProps }: { children: any }): JSX.Element => {
    return (
        <Copyright {...restProps}>
            <TextSmall>{children}</TextSmall>
        </Copyright>
    )
}
