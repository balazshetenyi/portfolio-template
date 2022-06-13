import { Gallery } from '../components'

export default function GalleryContainer() {
    return (
        <Gallery>
            <Gallery.Wrapper>
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
                <Gallery.Item srcOne="/images/bg.jpg" srcTwo="/images/bg2.jpeg" />
            </Gallery.Wrapper>
        </Gallery>
    )
}
