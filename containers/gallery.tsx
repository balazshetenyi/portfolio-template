import { Gallery } from '../components'
import { Portfolio } from '../schemas/portfolio'

export default function GalleryContainer({ data }: { data: Portfolio[] }) {
    return (
        <Gallery>
            <Gallery.PageTitle>Kep galeria</Gallery.PageTitle>
            <Gallery.Wrapper>
                {data &&
                    data.map((document) => (
                        <Gallery.Item
                            srcOne={document.before}
                            srcTwo={document.after}
                            key={document.before}
                        />
                    ))}
            </Gallery.Wrapper>
        </Gallery>
    )
}
