import multer from 'multer'
import multerS3 from 'multer-s3'
import { s3Client } from './s3Client'

const bucketName: any = process.env.AWS_BUCKET_NAME

export const upload = multer({
    storage: multerS3({
        s3: s3Client,
        bucket: bucketName,
        cacheControl: 'max-age=31536000',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, `${file.originalname}`)
        },
    }),
})
