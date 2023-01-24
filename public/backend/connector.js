import pg from 'pg'
const Client=pg.Client

const connection=async(req)=>{
    try{
        const client=new Client({
            user:process.env.DB_USER,
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            port:process.env.DB_PORT
        })
        await client.connect()
        const res = await client.query(req)
        await client.end()
        return {count:res.rowCount,data:res.rows}
    }catch(error){
        console.log(error)
    }
}

export default connection