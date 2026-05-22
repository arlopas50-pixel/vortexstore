const express = require('express')
const axios = require('axios')
const crypto = require('crypto')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/cek-nickname', async(req,res)=>{

try{

const { userId, serverId } = req.body

const response = await axios.post(
'https://api.isan.eu.org/nickname/ml',
{
userId:userId,
zoneId:serverId
}
)

res.json(response.data)

}catch(err){

res.json({
success:false
})

}

})
app.post('/order', async (req, res) => {

try {

const { userId, serverId, service } = req.body

const apiid = 'GLeRF4In'
const apikey = 'XbjGgWO77xo5SwhHgRGFDBzJwKRuE4xziUp7F5pEGyPlYAaAmLhLBGrnoJQ16azh'

const sign = crypto
.createHash('md5')
.update(apiid + apikey)
.digest('hex')

const response = await axios.post(
'https://vip-reseller.co.id/api/game-feature',
{
key: apikey,
sign: sign,
type: 'order',
service: service,
data_no: userId + '|' + serverId
}
)

res.json(response.data)

} catch (err) {

res.json({
success: false,
message: err.message
})

}

})

app.listen(process.env.PORT || 3000, () => {
console.log('Server running')
})
