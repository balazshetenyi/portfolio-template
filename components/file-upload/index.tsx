import axios from 'axios'
import { useState } from 'react'
import { Form, Input, Button } from './styles/file-upload'

export default function FileUpload({ name, route }: { name: string; route: string }): JSX.Element {
    const [files, setFiles] = useState(null)

    const handleSubmit = (e: Event, route: string) => {
        e.preventDefault()
        const formData = new FormData()
        for (const file of files) {
            formData.append('all', file)
        }

        axios.post(route, formData)
    }

    return (
        <Form>
            <Input type="file" name={name} onChange={(e) => setFiles(e.target.files)} multiple />
            <Button onClick={(e: Event) => handleSubmit(e, route)}>Send</Button>
        </Form>
    )
}
