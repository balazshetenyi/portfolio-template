import styled from 'styled-components'
import { DARK, LIGHT, SHADOW } from '../../../constants/colors'

export const Container = styled.section`
    color: ${DARK};
    margin: 1.25rem;

    @media (min-width: 900px) {
        width: 80%;
    }
`
export const Title = styled.h2`
    text-transform: capitalize;
    width: 100%;
`
export const Text = styled.p`
    margin-top: 0;
`
export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    flex-grow: 1;

    input,
    textarea {
        padding: 1rem 0.5rem;
        color: ${DARK};
        border: 0;
        background-color: ${LIGHT};
    }

    @media (min-width: 600px) {
        width: 100%;
        margin-right: 2rem;
    }
`
export const SendForm = styled.button`
    padding: 0.5rem;
    background-color: transparent;
    border-color: ${SHADOW};
    border-radius: 5px;
    color: ${DARK};
    font-size: 1.125rem;
    cursor: pointer;
    margin-bottom: 2rem;
`
export const ContactWrapper = styled.div`
    @media (min-width: 600px) {
        display: flex;
        flex-flow: row nowrap;

        .contact-holder {
            margin-right: 3rem;
        }
    }
`
export const Contact = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    i {
        min-width: 1rem;
    }

    p {
        margin: 0;
    }
`
