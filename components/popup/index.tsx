import { PopupContainer, ClosePopup, Content, Overlay } from './styles/popup'

export default function Popup({
    isPopupOpen,
    setIsPopupOpen,
    children,
    ...restProps
}: {
    isPopupOpen: boolean
    setIsPopupOpen: Function
    children: any
}): JSX.Element {
    return isPopupOpen ? (
        <PopupContainer {...restProps}>
            <Overlay onClick={() => setIsPopupOpen(false)}></Overlay>
            <Content>
                <ClosePopup onClick={() => setIsPopupOpen(false)}>X</ClosePopup>
                {children}
            </Content>
        </PopupContainer>
    ) : null
}
