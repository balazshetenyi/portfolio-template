import { FileUpload } from 'primereact/fileupload'
import { Upload } from '../components'

export default function UploadContainer() {
    return (
        <Upload>
            <Upload.Title>Elotte</Upload.Title>
            <FileUpload name="before" url="api/upload/before" mode="basic"></FileUpload>
            <Upload.Title>Utana</Upload.Title>
            <FileUpload name="after" url="api/upload/after" mode="basic"></FileUpload>
            <Upload.Title>Osszes kep</Upload.Title>
            <FileUpload name="all" url="api/upload/all" multiple></FileUpload>
        </Upload>
    )
}
