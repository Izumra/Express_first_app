import pg from 'pg'
import dotenv from 'dotenv'
const Pool=pg.Pool

dotenv.config()
const pool=new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
})

const userConnecting=async(request,params)=>{
    try{
        const data=await pool.query(request,params)
        return data?data.rows[0]:null
    }
    catch(error){
        console.log(error.stack)
    }
}
export {userConnecting}