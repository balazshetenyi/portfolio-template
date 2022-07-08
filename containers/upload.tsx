import { Gallery, Upload } from '../components'
import { Portfolio } from '../schemas/portfolio'
import Image from 'next/image'
import FileUpload from '../components/file-upload'

export default function UploadContainer({ data }: { data: Portfolio[] }): JSX.Element {
    return (
        <>
            <Upload>
                <Upload.Title>Osszes kep</Upload.Title>
                <FileUpload name="all" route="api/upload/all" />
            </Upload>
            <Gallery>
                <Gallery.Wrapper>
                    {data &&
                        data.map((item) =>
                            item.all.map((image, index) => (
                                <div className="container" key={index}>
                                    <Image src={image} layout="fill" />
                                </div>
                            ))
                        )}
                </Gallery.Wrapper>
            </Gallery>

            <style jsx>{`
                .container {
                    position: relative;
                    width: 300px;
                    height: 200px;
                }
            `}</style>
        </>
    )
}
