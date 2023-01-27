import pg from 'pg'

const Client=pg.Client
const Pool=pg.Pool 

const clientConnection=async(req,params)=>{
    try{
        const client=new Client({
            user:process.env.DB_USER,
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            port:process.env.DB_PORT
        })
        await client.connect()
        const res = await client.query(req,params)
        await client.end()
        return {count:res.rowCount,data:res.rows}
    }catch(error){
        console.log(error)
    }
}

const signQuerry=async(email,password)=>{
    const pool=new Pool({
        user:process.env.DB_USER,
        host:process.env.DB_HOST,
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD,
        port:process.env.DB_PORT
    })
    const transactionClient=await pool.connect()
    try{
        await transactionClient.query("BEGIN")
        const searchUserReq='SELECT * FROM schema1.participant where email=$1'
        const values=[email]
        const profile=await transactionClient.query(searchUserReq,values)
        if(profile.rowCount>0 && profile.rows[0].pass==password){
            return profile.rows[0]
        }
        else console.log("Неверные данные для входа")
        await transactionClient.query("COMMIT")
    }catch(error){
        await transactionClient.query("ROLLBACK")
        console.log(error.stack)
    }
}

export {clientConnection, signQuerry}