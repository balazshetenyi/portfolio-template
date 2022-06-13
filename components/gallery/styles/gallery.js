import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.section`
    padding: 2rem;
`
export const Wrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    }
`
export const Item = styled.div`
    position: relative;
    width: 300px;
    height: 168.75px;
    margin: 0 auto 1rem;

    @media (min-width: 900px) {
        width: 360px;
        height: 202.5px;
    }
`
export const ItemImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 400px auto;

    &.first {
        background-image: url(${({ src }) => src || ''});
    }
    &.second {
        background-image: url(${({ src }) => src || ''});
        width: ${({ pos }) => pos}%;
    }
`
export const Slider = styled.input`
    &#slider {
        position: absolute;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 100%;
        background: transparent;
        outline: none;
        margin: 0;
        transition: all 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: rgba(#f2f2f2, 0.1);
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 6px;
            height: 225px;
            background: white;
            cursor: pointer;
        }
    }
`
export const SliderButton = styled.div`
    pointer-events: none;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    left: calc(${({ pos }) => pos}% - 18px);
    top: calc(50% - 18px);
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: '';
        padding: 3px;
        display: inline-block;
        border: solid #5d5d5d;
        border-width: 0 2px 2px 0;
        transform: rotate(-45deg);
    }
    &::before {
        content: '';
        padding: 3px;
        display: inline-block;
        border: solid #5d5d5d;
        border-width: 0 2px 2px 0;
        transform: rotate(135deg);
    }
`
