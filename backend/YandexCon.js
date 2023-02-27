import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()
const connector = new S3Client({region:"ru-central1",endpoint:'https://storage.yandexcloud.net',credentials:{accessKeyId:process.env.YANDEX_SUCCESS_KEY,secretAccessKey:process.env.YANDEX_SUCCESS_SECRET_KEY}})

const uploadPhoto=async(file)=>{
    const fileStream=fs.createReadStream(file.path)
    const dataForPullingFile={
        Bucket:process.env.YANDEX_BUCKET,
        Key:file.filename,
        Body:fileStream,
    }
    try{
        const sendler=await connector.send(new PutObjectCommand(dataForPullingFile))
        return sendler
    }catch(err){
        console.log(err)
    }
}

const getPhoto=async(file)=>{
    const dataForDownloadFile={
        Bucket:process.env.YANDEX_BUCKET,
        Key:file.filename
    }
    try{
        const sendler=await connector.send(new GetObjectCommand(dataForDownloadFile))
        console.log(sendler)
        //return await sendler.Body.transformToString()
    }catch(err){
        console.log(err)
    }
}

export {uploadPhoto,getPhoto}