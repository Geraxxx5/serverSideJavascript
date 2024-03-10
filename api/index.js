const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const fs = require('fs');

const app = express()
const port = 3000
const logStream = fs.createWriteStream('./log.txt', { flags: 'a' });

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms', { stream: logStream })
);

const {
  validateDataPostCharacters,
  validateDataUpdateCharacters, validateDataPostObject,
  validateDataUpdateObject,
} = require('./functions')

const {
  getAllCharacters, createCharacter,
  getOneCharacter, deleteCharacter, updateCharacter,
  getAllObjects, createObject, getOneObject, updateObject,
} = require('./db')

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
/* console.log(`Server listening at http://127.0.0.1:${port}`) */
})

/* Character */
app.post('/character', validateDataPostCharacters, async (req, res) => {
  try {
    const [nameCharacter,
      descriptionCharacter,
      imgCharacter] = [req.body.name, req.body.description, req.body.img]
    const messages = await createCharacter(nameCharacter, descriptionCharacter, imgCharacter)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error in character creation' })
  }
})

app.get('/character', async (req, res) => {
  try {
    const messages = await getAllCharacters()
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the characters' })
  }
})

app.get('/character/:characterID', async (req, res) => {
  try {
    const { characterID } = req.params
    const messages = await getOneCharacter(characterID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the character' })
  }
})

app.delete('/character/:characterID', async (req, res) => {
  try {
    const { characterID } = req.params
    const messages = await deleteCharacter(characterID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error deleting the character' })
  }
})

app.put('/character/:characterID', validateDataUpdateCharacters, async (req, res) => {
  try {
    const [nameCharacter,
      descriptionCharacter,
      imgCharacter,
      characterID] = [req.body.name, req.body.description, req.body.img, req.body.id]
    const messages = await updateCharacter(
      nameCharacter,
      descriptionCharacter,
      imgCharacter,
      characterID,
    )
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

/* Object */
app.get('/object', async (req, res) => {
  try {
    const messages = await getAllObjects()
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the object' })
  }
})

app.post('/object', validateDataPostObject, async (req, res) => {
  try {
    const [nameObject,
      imgObject,
      descriptionObject] = [req.body.name, req.body.img, req.body.description]
    const messages = await createObject(nameObject, imgObject, descriptionObject)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error in object creation' })
  }
})

app.get('/object/:objectID', async (req, res) => {
  try {
    const { objectID } = req.params
    const messages = await getOneObject(objectID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error retrieving the character' })
  }
})

app.put('/object/:objectID', validateDataUpdateObject, async (req, res) => {
  try {
    const [nameObject,
      descriptionObject,
      imgObject,
      objectID] = [req.body.name, req.body.description, req.body.img, req.body.id]
    const messages = await updateObject(nameObject, descriptionObject, imgObject, objectID)
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ message: 'error updating the character' })
  }
})

app.use((req, res) => {
  res.status(400).send('no endpoint was found')
})

app.use((err, req, res) => {
  res.status(500).send('Hubo un problema con la conexión a la base de datos o un error de código')
})

/* games */

/*
id_character INT AUTO_INCREMENT PRIMARY KEY,
    name_character VARCHAR(255) NOT NULL,
    description_character VARCHAR(255) NOT NULL,
    img_character VARCHAR(255) NOT NULL
*/
