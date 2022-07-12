import { Gallery, Upload } from '../components'
import { Portfolio } from '../schemas/portfolio'
import FileUpload from '../components/file-upload'

export default function UploadContainer({ data }: { data: Portfolio[] }): JSX.Element {
    return (
        <>
            <Upload>
                <Upload.Title>Kepek kivalsztasa</Upload.Title>
                <FileUpload name="all" route="api/upload/all" buttonText="Feltoltes" />
            </Upload>
            <Gallery>
                <Gallery.Wrapper>
                    {data &&
                        data.map((item, index) => (
                            <div key={index}>
                                <Gallery.UploadGallery data={item} />
                                <Gallery.UpdateUploadedGallery data={item} />
                            </div>
                        ))}
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
