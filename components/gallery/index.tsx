import { ChangeEvent, useState } from 'react'
import { Container, Wrapper, Item, ItemImage, Slider, SliderButton } from './styles/gallery'

export default function Gallery({ children, ...restProps }: { children: any }): JSX.Element {
    return <Container {...restProps}>{children}</Container>
}

Gallery.Wrapper = function GalleryWrapper({ children, ...restProps }: { children: any }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Gallery.Item = function GalleryItem({
    srcOne,
    srcTwo,
    ...restProps
}: {
    srcOne: string
    srcTwo: string
}) {
    const [position, setPosition] = useState(50)
    return (
        <>
            <Item {...restProps}>
                <ItemImage className="first" src={srcOne} />
                <ItemImage className="second" src={srcTwo} pos={position} />
                <Slider
                    type="range"
                    min="1"
                    max="100"
                    value={position}
                    className="slider"
                    name="slider"
                    id="slider"
                    onChange={(e: ChangeEvent<HTMLProgressElement>) => setPosition(e.target.value)}
                />
                <SliderButton className="slider-button" pos={position}></SliderButton>
            </Item>
        </>
    )
}
