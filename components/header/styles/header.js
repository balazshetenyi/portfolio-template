import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    background-color: #1f1815;
    background-attachment: scroll, scroll;
    background-image: url(images/overlay.png), url(images/bg.jpg);
    background-position: top left, top left;
    background-repeat: repeat, no-repeat;
    background-size: auto, 150%;
    color: rgba(255, 255, 255, 0.5);
    padding: 4em 1em;
    left: 0;
    top: 0;
    text-align: center;

    footer {
        background: 0;
    }

    @media (min-width: 900px) {
        height: 100vh;
        padding: 8em 2em;
        text-align: right;
        position: sticky;
        min-width: 35%;
    }
`

export const Wrapper = styled.div`
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    margin: 0 auto 2rem;

    @media (min-width: 900px) {
        margin: 0 0 2em 0;
    }
`

export const Avatar = styled.img`
    border-radius: 100%;
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
`

export const Title = styled.h1`
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.35em;
    line-height: 1.75em;
    margin: 0;
    font-weight: 400;
`

export const Link = styled.a`
    margin: 0 0 1em 0;
    width: 6.25em;
    border-radius: 100%;
    border: 0;
    display: inline-block;
    position: relative;
    -moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-bottom: dotted 1px;
    color: #49bf9d;
    text-decoration: none;
`
