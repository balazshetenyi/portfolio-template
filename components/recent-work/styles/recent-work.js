import Link from 'next/link'
import styled from 'styled-components'
import { DARK, SHADOW } from '../../../constants/colors'

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    color: ${DARK};
    margin: 1.25rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid ${SHADOW};

    .button__show-more {
        border: 1px solid ${DARK};
        border-radius: 5px;
        padding: 0.75rem 2.25rem;
        margin: 0 auto;
    }

    @media (min-width: 600px) {
        width: 80%;
    }
`
export const Wrapper = styled.div`
    @media (min-width: 600px) {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`
export const Title = styled.h2`
    margin-bottom: 2rem;

    @media (min-width: 440px) {
        text-align: center;
    }
`
export const Item = styled.div`
    background: url(${({ bg }) => bg || ''});
    margin: 0 auto 2rem auto;
    width: 100%;
    max-width: 400px;
`
export const ItemTitle = styled.h3`
    margin: 0.5rem 0;
`
export const ItemCaption = styled.figcaption``
export const ShowMore = styled(Link)``
