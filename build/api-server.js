var expressRestResource = require('express-rest-generator')
var nedb = require('nedb')
var path = require('path')
var fs = require('fs')

const dataFilePath = path.join(__dirname, '..', 'data') 

function api(app, router) {
  var users = new nedb({filename: __dirname + '/../data/person.db', autoload: true})
  app.use('/api/person', expressRestResource({db: users}))
  router.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });
  router.route('/file/:filename').get(function(req, res) {
    var file = path.join(dataFilePath, req.params.filename)
    if(fs.existsSync(file)) {
      res.send(fs.readFileSync(file, 'utf8'))
    } else {
      res.json({msg: 'file does not exist'})
    }
  })
}

module.exports = api
