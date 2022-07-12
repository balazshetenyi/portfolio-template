import { NextApiResponse, NextApiRequest } from 'next'
import clientPromise from '../../../libs/mongodb'
import { Portfolio } from '../../../schemas/portfolio'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const image = req.query.image

    try {
        const client = await clientPromise
        const db = client.db('tamas-portfolio')
        const collection = await db.collection('portfolio')
        const query = { all: { $exists: true, $eq: image } }
        const latest: Portfolio = await collection.find(query).sort({ _id: -1 }).limit(1).toArray()
        const document = await latest[0]

        let result: any
        if (document) {
            result = await collection.updateOne(query, { $set: { before: image } })
        }

        res.status(201).json({ response: result })
    } catch (error) {
        res.status(501).json(error)
    }
}
