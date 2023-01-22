import pg from 'pg'
import dotenv from 'dotenv'
const Client=pg.Client
dotenv.config()

const connection=async ()=>{
    try{
        const client =new Client({
            user:process.env.DB_USER,
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            port:process.env.DB_PORT
        })
        console.log({
            user:process.env.DB_USER,
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            port:process.env.DB_PORT
        })
        await client.connect()
        const res = await client.query(`SELECT * FROM schema1.participant`)
        console.log(res)
        await client.end()
    }catch(error){
        console.log(error)
    }
}

export default connection