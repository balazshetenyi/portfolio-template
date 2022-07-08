import { NextApiResponse } from 'next'
import { handler } from '../../../libs/handler'
import { upload } from '../../../libs/multer'
import { MulterRequest } from '../../../types/multer-request'
import clientPromise from '../../../libs/mongodb'
import { Portfolio } from '../../../schemas/portfolio'

export const config = {
    api: {
        bodyParser: false,
    },
}

handler.use(upload.single('before'))
handler.post(async (req: MulterRequest, res: NextApiResponse) => {
    const date = new Date()
    const image = req.file.location
    console.log(req)

    try {
        const client = await clientPromise
        const db = client.db('tamas-portfolio')

        const collection = await db.collection('portfolio')
        const latest: Portfolio = await collection.find({}).sort({ _id: -1 }).limit(1).toArray()
        const item = await latest[0]

        let result: any
        if (item) {
            result = await collection.insertOne({ date, before: image })
        }

        res.status(201).json({ response: result })
    } catch (error) {
        res.status(501).json(error)
    }
})

export default handler
