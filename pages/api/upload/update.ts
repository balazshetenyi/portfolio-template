import { NextApiResponse, NextApiRequest } from 'next'
import clientPromise from '../../../libs/mongodb'
import { Portfolio } from '../../../schemas/portfolio'
import { ObjectId } from 'mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const title = req.query.title
    const description = req.query.desc
    const id: string = req.query.id.toString()

    try {
        const client = await clientPromise
        const db = client.db('tamas-portfolio')
        const collection = await db.collection('portfolio')
        const portfolio: Portfolio = await collection.find({ _id: new ObjectId(id) }).toArray()
        console.log(portfolio)

        const document = await portfolio[0]

        let result: any
        if (document) {
            result = await collection.updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: { title: title, description: description },
                }
            )
        }

        res.status(201).json({ response: result })
    } catch (error) {
        res.status(501).json(error)
    }
}
