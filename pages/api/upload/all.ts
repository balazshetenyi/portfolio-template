import * as mongoDB from 'mongodb'
import { Collection, Db, MongoClient } from 'mongodb'
import { NextApiResponse } from 'next'
import { handler } from '../../../libs/handler'
import clientPromise from '../../../libs/mongodb'
import { upload } from '../../../libs/multer'
import { Portfolio } from '../../../schemas/portfolio'
import { MulterRequest } from '../../../types/multer-request'

export const config = {
    api: {
        bodyParser: false,
    },
}

handler.use(upload.array('all'))
handler.post(async (req: MulterRequest, res: NextApiResponse) => {
    const date = new Date()
    const images: string[] = []
    req.files.forEach((file) => images.push(file.location))

    try {
        const client: MongoClient = await clientPromise
        const db: Db = client.db('tamas-portfolio')

        const collection: Collection = db.collection('portfolio')

        const result = await collection.insertOne({ date, all: images })

        res.status(201).json({ response: result })
    } catch (error) {
        res.status(501).json(error)
    }
})

export default handler
