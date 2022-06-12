import styled from 'styled-components'

export const Container = styled.footer`
    margin: 0 auto;

    @media (min-width: 900px) {
        margin: 0 0 2em 0;
    }
`

export const FooterWrapper = styled.div`
    & li {
        cursor: default;
        list-style: none;
        padding-left: 0;
    }
`
export const SocialLinks = styled.ul`
    list-style: none;
`
export const SocialLink = styled.li`
    display: inline-block;
    padding: 0 1em 0 0;

    i {
        font-size: 2.5rem;
    }
`

export const Copyright = styled.div``

export const TextSmall = styled.small``
