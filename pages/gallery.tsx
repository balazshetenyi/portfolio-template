import { NextPage } from 'next/types'
import { GalleryContainer } from '../containers'
import Layout from '../containers/layout'

const Gallery: NextPage = () => {
    return (
        <Layout>
            <GalleryContainer />
        </Layout>
    )
}

export default Gallery
