import styled from 'styled-components'
import { DARK, LIGHT } from '../../../constants/colors'

export const PopupContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.6;
`
export const Content = styled.div`
    position: relative;
    /* opacity: 1; */
    background-color: ${DARK};
    padding: 2rem;
    z-index: 2;
    -webkit-box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.61);
    box-shadow: 10px 10px 11px -8px rgba(0, 0, 0, 0.61);
`
export const ClosePopup = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: red;
    color: ${LIGHT};
    border: 0;
    cursor: pointer;
`
