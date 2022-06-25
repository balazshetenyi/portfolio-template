import { NextApiResponse } from 'next'
import { handler } from '../../../libs/handler'
import { upload } from '../../../libs/multer'
import { MulterRequest } from '../../../types/multer-request'

export const config = {
    api: {
        bodyParser: false,
    },
}

handler.use(upload.single('before'))
handler.post((req: MulterRequest, res: NextApiResponse) => {
    const location = req.file.location
    console.log(location)

    res.status(200).json({ response: 'success' })
})

export default handler
