const express = require('express')
const axios = require('axios')
const crypto = require('crypto')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/order', async(req,res)=>{

try{

const { userId, service } = req.body

const refId = 'VRX' + Date.now()

const sign = crypto
.createHash('md5')
.update(process.env.VIP_API_ID + process.env.VIP_API_KEY + refId)
.digest('hex')

const response = await axios.post(
'https://vip-reseller.co.id/api/game-feature',
{
key: process.env.VIP_API_KEY,
sign: sign,
type: 'order',
service: service,
data_no: userId,
trxid: refId
}
)

res.json({
success:true,
data:response.data
})

}catch(err){

res.json({
success:false
})

}

})

app.listen(process.env.PORT || 3000)
