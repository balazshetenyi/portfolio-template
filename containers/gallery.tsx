import { Gallery } from '../components'
import Popup from '../components/popup'
import { Portfolio } from '../schemas/portfolio'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Galleria } from 'primereact/galleria'

export default function GalleryContainer({ data }: { data: Portfolio[] }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [collection, setCollection] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const togglePopup = (index: number) => {
        setCurrentIndex(index)
        setIsPopupOpen((prev) => !prev)
    }

    const itemTemplate = (item) => {
        return (
            <img
                src={`${item}`}
                onError={(e) =>
                    (e.target.src =
                        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                }
                alt={item.alt}
                style={{ width: '100%' }}
                width="auto"
                height="600"
            />
        )
    }

    const thumbnailTemplate = (item) => {
        return (
            <img
                src={`${item}`}
                onError={(e) =>
                    (e.target.src =
                        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                }
                alt={item.alt}
                width="100"
                height="60"
            />
        )
    }

    return (
        <Gallery>
            <Gallery.PageTitle>Kep galeria</Gallery.PageTitle>
            <Gallery.Wrapper>
                {data &&
                    data.map((item, index) => {
                        collection == item && setCollection(item)
                        return (
                            <Gallery.Item
                                srcOne={item.before}
                                srcTwo={item.after}
                                buttonAction={() => togglePopup(index)}
                                key={item.before}
                            >
                                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </Gallery.Item>
                        )
                    })}
                <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}>
                    <Galleria
                        value={data[currentIndex].all}
                        item={itemTemplate}
                        thumbnail={thumbnailTemplate}
                        numVisible={3}
                        style={{
                            maxWidth: '640px',
                            boxShadow: '10px 10px 11px -8px rgba(0,0,0,0.61)',
                        }}
                    ></Galleria>
                </Popup>
            </Gallery.Wrapper>
        </Gallery>
    )
}
