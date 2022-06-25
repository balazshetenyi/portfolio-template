import { NextApiResponse } from 'next'
import { MulterRequest } from '../types/multer-request'
import nc from 'next-connect'

export const handler = nc<MulterRequest, NextApiResponse>({
    onError(error, req: MulterRequest, res: NextApiResponse) {
        res.status(500).json({ Error: error })
    },
    onNoMatch(req, res) {
        res.status(404).json({ Error: 'Address not found!' })
    },
    attachParams: true,
})
