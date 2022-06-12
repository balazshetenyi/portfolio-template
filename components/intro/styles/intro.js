import styled from 'styled-components'
import { DARK, SHADOW } from '../../../constants/colors'

export const Container = styled.section`
    margin: 2rem 1.25rem;
    color: ${DARK};
    padding-bottom: 3rem;
    border-bottom: 2px solid ${SHADOW};

    @media (min-width: 600px) {
        padding: 3rem 2rem;
    }
    @media (min-width: 900px) {
        padding: 3rem 0;
    }
`
export const Title = styled.h1`
    margin-top: 0;
`
export const Text = styled.p``
