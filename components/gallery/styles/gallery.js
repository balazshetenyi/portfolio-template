import Image from 'next/image'
import styled from 'styled-components'
import { DARK, LIGHT } from '../../../constants/colors'

export const Container = styled.section`
    padding: 2rem 0;
    @media (min-width: 900px) {
        width: 90%;
        margin: 0 auto;
    }
`
export const Wrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`
export const PageTitle = styled.h2`
    color: ${DARK};
    text-align: center;
    margin-bottom: 2rem;
`
export const Item = styled.div`
    position: relative;
    width: 300px;
    height: 168.75px;
    margin: 0 auto 1rem;

    @media (min-width: 900px) {
        width: 400px;
        height: 225px;
    }
`
export const ItemImage = styled.div`
    border-radius: 6px 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 300px auto;
    -webkit-box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.61);
    box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.61);

    @media (min-width: 900px) {
        background-size: 400px auto;
    }

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
export const ViewGalleryButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    padding: 5px 15px;
    border: 0;
    color: ${DARK};

    &:hover {
        opacity: 0.7;
    }
`
export const UploadGalleryContainer = styled.div`
    width: 100%;
    max-height: 500px;
    background-color: #000;
    display: inline-table;
    margin: 1rem;

    img {
        inline-size: 100%;
        height: auto;
        max-height: inherit;
        margin: 0 auto;
    }
`
export const ImageContainer = styled.div`
    max-height: inherit;
    position: relative;

    svg {
        position: absolute;
        font-size: 2rem;
        color: #fff;
        top: 50%;
        transform: translate(0, 50%);
        opacity: 0.7;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        &.left-arrow {
            left: 6%;
        }
        &.right-arrow {
            right: 6%;
        }
    }
`
export const Picture = styled.img``
export const Thumbnail = styled.img`
    opacity: 0.5;
    cursor: pointer;
    inline-size: 100%;
    max-width: 200px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    scroll-snap-align: start;

    &.selected {
        opacity: 1;
    }
`
export const Control = styled.img``
export const ThumbnailsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    column-gap: 0.5rem;
    overflow: scroll;
    max-height: 200px;
    padding: 1rem;
    background-color: inherit;
    position: relative;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 0.5rem;
`
export const ButtonContainer = styled.div`
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;
    gap: 1rem;
`
export const Button = styled.a`
    display: inline-block;
    background-color: ${LIGHT};
    color: ${DARK};
    padding: 0.5rem 1.5rem;
    border: 1px solid ${DARK};
    border-radius: 6px;

    &.delete-button {
        background-color: red;
        color: ${LIGHT};
        opacity: 0.7;
    }

    &:hover {
        background-color: ${DARK};
        color: ${LIGHT};

        &.delete-button {
            background-color: red;
            opacity: 1;
        }
    }
`
