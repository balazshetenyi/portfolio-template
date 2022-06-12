import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #1f1815;
    background-attachment: scroll, scroll;
    background-image: url(images/overlay.png), url(images/bg.jpg);
    background-position: center, center;
    background-repeat: repeat, no-repeat;
    background-size: auto, 150%;
    color: rgba(255, 255, 255, 0.5);
    padding: 3em 1em;

    &#footer__header {
        display: none;
    }

    @media (min-width: 900px) {
        margin: 0 0 2em 0;

        &#footer__main {
            display: none;
        }
        &#footer__header {
            display: block;
            margin: 0 auto;
        }
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
    display: flex;
    justify-content: flex-end;
`
export const SocialLink = styled.li`
    display: inline-block;
    margin-right: 2rem;

    i {
        font-size: 2.5rem;
    }

    @media (min-width: 900px) {
        &:last-of-type {
            margin-right: 0;
        }
    }
`

export const Copyright = styled.div``

export const TextSmall = styled.small``
