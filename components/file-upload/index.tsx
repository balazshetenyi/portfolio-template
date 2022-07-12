import axios from 'axios'
import { useState } from 'react'
import { Form, Input, Button } from './styles/file-upload'

export default function FileUpload({
    name,
    route,
    buttonText,
}: {
    name: string
    route: string
    buttonText: string
}): JSX.Element {
    const [files, setFiles] = useState(null)

    const handleSubmit = (e: Event, route: string) => {
        e.preventDefault()
        if (files) {
            const formData = new FormData()
            for (const file of files) {
                formData.append('all', file)
            }

            axios.post(route, formData)
        }
    }

    return (
        <Form>
            <Input type="file" name={name} onChange={(e) => setFiles(e.target.files)} multiple />
            <Button onClick={(e: Event) => handleSubmit(e, route)}>{buttonText}</Button>
        </Form>
    )
}
