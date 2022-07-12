import { ChangeEvent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import {
    Container,
    Wrapper,
    PageTitle,
    Item,
    ItemImage,
    Slider,
    SliderButton,
    UploadGalleryContainer,
    ImageContainer,
    Picture,
    Button,
    ButtonContainer,
    ThumbnailsContainer,
    Thumbnail,
} from './styles/gallery'
import { DARK, LIGHT } from '../../constants/colors'
import { Portfolio } from '../../schemas/portfolio'

export default function Gallery({ children, ...restProps }: { children: any }): JSX.Element {
    return <Container {...restProps}>{children}</Container>
}

Gallery.Wrapper = function GalleryWrapper({ children, ...restProps }: { children: any }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Gallery.PageTitle = function GalleryPageTitle({ children, ...restProps }: { children: any }) {
    return <PageTitle {...restProps}>{children}</PageTitle>
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

Gallery.UploadGallery = function GalleryUploadGallery({ data }: { data: Portfolio }): JSX.Element {
    const [images, setImages] = useState([...data.all])
    const [activeIndex, setActiveIndex] = useState(0)

    const handleThumbnailClick = (item: HTMLImageElement) => {
        const imageUrl = item.getAttribute('src')
        const imageIndex = images.indexOf(imageUrl)
        setActiveIndex(imageIndex)
    }

    const scrollLeft = () => {
        if (activeIndex != 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    const scrollRight = () => {
        let scrollBy = 0
        if (activeIndex != images.length - 1) {
            setActiveIndex(activeIndex + 1)
            if (activeIndex != 0) {
                const image: HTMLImageElement = document.querySelector('.selected')
                const imageContainer: HTMLDivElement =
                    document.querySelector('.thumbnailsContainer')
                console.log(image.scrollWidth)
                scrollBy += image.scrollWidth
                imageContainer.scroll({ top: 0, left: scrollBy, behavior: 'smooth' })
            }
        }
    }

    const handleClick = (route: string, image: string) => {
        axios.put(`api/upload/${route}?image=${image}`)
    }

    return (
        <UploadGalleryContainer>
            <ImageContainer>
                <Picture src={images[activeIndex]} />
                <FontAwesomeIcon icon={faCircleLeft} onClick={scrollLeft} />
                <FontAwesomeIcon icon={faCircleRight} className="right" onClick={scrollRight} />
                <ButtonContainer>
                    <Button onClick={() => handleClick('before', images[activeIndex])}>
                        Elotte
                    </Button>
                    <Button onClick={() => handleClick('after', images[activeIndex])}>Utana</Button>
                    <Button
                        onClick={() => handleClick('delete', images[activeIndex])}
                        className="delete-button"
                    >
                        X
                    </Button>
                </ButtonContainer>
            </ImageContainer>
            <ThumbnailsContainer className="thumbnailsContainer">
                {images.map((thumbnail: string) => (
                    <Thumbnail
                        src={thumbnail}
                        className={thumbnail == images[activeIndex] && 'selected'}
                        onClick={({ target }) => handleThumbnailClick(target)}
                        key={thumbnail}
                    />
                ))}
                <FontAwesomeIcon icon={faCircleLeft} onClick={scrollLeft} />
                <FontAwesomeIcon icon={faCircleRight} className="right" onClick={scrollRight} />
            </ThumbnailsContainer>
        </UploadGalleryContainer>
    )
}

Gallery.UpdateUploadedGallery = function GalleryUpdateUploadedGallery({
    data,
}: {
    data: Portfolio
}): JSX.Element {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onButtonClick = (e) => {
        e.preventDefault()
        axios.put(`api/upload/update?title=${title}&desc=${description}&id=${data._id}`)
        setTitle('')
        setDescription('')
    }

    return (
        <form>
            <label>
                A munka cime
                <input
                    type={'text'}
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                    placeholder="munka cime"
                />
            </label>
            <label>
                Rovid leiras
                <input
                    type={'text'}
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                    placeholder="leiras"
                />
            </label>
            <button onClick={(e) => onButtonClick(e)}>Hozzaadas</button>

            <style jsx>{`
                form {
                    margin: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 1rem;
                }
                input {
                    margin-left: 1rem;
                    padding: 4px;
                }
                button {
                    background: ${DARK};
                    color: ${LIGHT};
                    padding: 0.5rem 1.5rem;
                    cursor: pointer;
                }
            `}</style>
        </form>
    )
}
