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

app.post('/order', async (req, res) => {

try {

const { userId, serverId, service } = req.body

const apiid = 'FaV5LJPb'
const apikey = 'bMFChywUboh7CRyPEd7QewgPlJtri6YGDBHdnxR75gmorBN4DleeJL92Lv20uYJz'

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
data_no: userId + serverId
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
