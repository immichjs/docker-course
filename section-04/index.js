const yaml = require('js-yaml')
const fs = require('fs')

try {
  const document = yaml.load(fs.readFileSync(__dirname + '/config.yaml', 'utf8'))

  console.log(document)
} catch(e) {
  console.log(e)
}