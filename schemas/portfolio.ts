import { ObjectId } from 'mongodb'

export interface Portfolio {
    _id: ObjectId
    date: Date
    before: string
    after: string
    all: string[]
    title: string
    description: string
}
