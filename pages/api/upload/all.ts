import { NextApiResponse } from 'next'
import { handler } from '../../../libs/handler'
import { upload } from '../../../libs/multer'
import { MulterRequest } from '../../../types/multer-request'

export const config = {
    api: {
        bodyParser: false,
    },
}

handler.use(upload.array('all'))
handler.post((req: MulterRequest, res: NextApiResponse) => {
    const location: string[] = []
    req.files.forEach((file) => location.push(file.location))

    console.log(location)

    res.status(200).json({ response: 'success' })
})

export default handler
