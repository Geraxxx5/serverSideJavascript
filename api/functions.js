const axios = require('axios')

async function imageToBase64(url) {
  const response = await axios({
    method: 'GET',
    url,
    responseType: 'arraybuffer',
  })

  const base64Image = Buffer.from(response.data, 'binary').toString('base64')

  return base64Image
}

function validateDataPostCharacters(req, res, next) {
  let flag = true
  if (!Object.prototype.hasOwnProperty.call(req.body, 'name')
        || !Object.prototype.hasOwnProperty.call(req.body, 'description')
        || !Object.prototype.hasOwnProperty.call(req.body, 'img')) {
    flag = false
  }

  if (!flag) {
    return res.status(400).json({ message: 'Datos con formato incorrecto' })
  }
  if (typeof req.body.name !== 'string'
        || typeof req.body.description !== 'string'
        || typeof req.body.img !== 'string') {
    flag = false
  }
  if (!flag) {
    return res.status(400).json({ message: 'Datos con tipo incorrecto' })
  }
  next()
  return flag
}

function validateDataUpdateCharacters(req, res, next) {
  let flag = true
  if (!Object.prototype.hasOwnProperty.call(req.body, 'id')
        || !Object.prototype.hasOwnProperty.call(req.body, 'name')
        || !Object.prototype.hasOwnProperty.call(req.body, 'description')
        || !Object.prototype.hasOwnProperty.call(req.body, 'img')) {
    flag = false
  }

  if (!flag) {
    return res.status(400).json({ message: 'Datos con formato incorrecto' })
  }
  if (typeof req.body.id !== 'number'
        || typeof req.body.name !== 'string'
        || typeof req.body.description !== 'string'
        || typeof req.body.img !== 'string') {
    flag = false
  }
  if (!flag) {
    return res.status(400).json({ message: 'Datos con tipo incorrecto' })
  }
  next()
  return flag
}

function validateDataPostObject(req, res, next) {
  let flag = true
  if (!Object.prototype.hasOwnProperty.call(req.body, 'name')
        || !Object.prototype.hasOwnProperty.call(req.body, 'description')
        || !Object.prototype.hasOwnProperty.call(req.body, 'img')) {
    flag = false
  }

  if (!flag) {
    return res.status(400).json({ message: 'Datos con formato incorrecto' })
  }
  if (typeof req.body.name !== 'string'
        || typeof req.body.description !== 'string'
        || typeof req.body.img !== 'string') {
    flag = false
  }
  if (!flag) {
    return res.status(400).json({ message: 'Datos con tipo incorrecto' })
  }
  next()
  return flag
}

function validateDataUpdateObject(req, res, next) {
  let flag = true
  if (!Object.prototype.hasOwnProperty.call(req.body, 'name')
        || !Object.prototype.hasOwnProperty.call(req.body, 'description')
        || !Object.prototype.hasOwnProperty.call(req.body, 'id')
        || !Object.prototype.hasOwnProperty.call(req.body, 'img')) {
    flag = false
  }

  if (!flag) {
    return res.status(400).json({ message: 'Datos con formato incorrecto' })
  }
  if (typeof req.body.id !== 'number'
        || typeof req.body.name !== 'string'
        || typeof req.body.description !== 'string'
        || typeof req.body.img !== 'string') {
    flag = false
  }
  if (!flag) {
    return res.status(400).json({ message: 'Datos con tipo incorrecto' })
  }
  next()
  return flag
}

module.exports = {
  imageToBase64,
  validateDataPostCharacters,
  validateDataUpdateCharacters,
  validateDataPostObject,
  validateDataUpdateObject,
}
