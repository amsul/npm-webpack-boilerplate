require('./index.scss')


console.log('Starting the app')


window.addEventListener('load', launchApplication, false)


function launchApplication() {

  addDummyTemplate()
  addSmallDummyImage()
  addBigDummyImage()

  console.log('App started')

}


function addDummyTemplate() {
  var node = document.createElement('div')
  node.innerHTML = require('./templates/hello.html')
  document.body.appendChild(node)
}


function addBigDummyImage() {
  var node = document.createElement('img')
  node.src = require('./images/big.jpg')
  document.body.appendChild(node)
}


function addSmallDummyImage() {
  var node = document.createElement('img')
  node.src = require('./images/small.jpg')
  document.body.appendChild(node)
}
