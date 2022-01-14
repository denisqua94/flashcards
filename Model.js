const fs = require('fs').promises

class Model {
  constructor() {

  }

  async myRead () {
    const menu = await fs.readdir('./flashcards/topics')
    console.log(menu.map(el => el.slice(0, -4)))
  }
}

const modul = new Model()
modul.myRead()

module.exports = Model
