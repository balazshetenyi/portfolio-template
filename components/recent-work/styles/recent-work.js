import Link from 'next/link'
import styled from 'styled-components'
import { DARK, SHADOW } from '../../../constants/colors'

export const Container = styled.section`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    color: ${DARK};
    margin: 1.25rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid ${SHADOW};

    .button__show-more {
        border: 1px solid ${DARK};
        border-radius: 5px;
        padding: 0.75rem 2.25rem;
    }
`
export const Title = styled.h2`
    align-self: flex-start;
    margin-bottom: 2rem;
`
export const Item = styled.div`
    margin-bottom: 2rem;
    width: 100%;
    max-width: 400px;
    display: inline-block;
`
export const ItemTitle = styled.h3`
    margin: 0.5rem 0;
`
export const ItemCaption = styled.figcaption``
export const ShowMore = styled(Link)``
