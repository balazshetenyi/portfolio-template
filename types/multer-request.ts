import { NextApiRequest } from 'next'

export interface MulterRequest extends NextApiRequest {
    file: any
    files: any[]
    path: string
}
