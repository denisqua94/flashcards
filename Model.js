const fs = require('fs').promises

class Model {
  constructor() {

  }

  async myRead () {
    const menu = await fs.readdir('./flashcards/topics')
    const res = menu.map(el => el.slice(0, -4))
    // console.log(res)
    return res
  }
  async readStr (id){
    const menu = await this.myRead();
    if(id > menu.length + 1){
      return false
    }
    const read = await fs.readFile(`./flashcards/topics/${menu[id - 1]}.txt`, 'utf8')
    // console.log(read)
    const arrText = read.split('\n\n').map(el => el.split('\n'))
    // console.log(arrText)
    return arrText
  }
  async runMenu(){
    const menu = await this.myRead();
    menu.forEach((res, i) => {console.log(`${i + 1}.${res}`)})
  }

}

const modul = new Model()
modul.myRead()
modul.readStr(1)
modul.runMenu()

module.exports = Model
