import { S3Client } from '@aws-sdk/client-s3'

const region = process.env.AWS_BUCKET_REGION
const accesKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3Client = new S3Client({
    region,
    accesKeyId,
    secretAccessKey,
})

export { s3Client }
