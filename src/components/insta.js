var Instafeed = require('instafeed.js')
/**
 * Created by AnthonyGarera on 7/2/17.
 */
var userFeed = new Instafeed({
  get: 'user',
  userId: 'anthonygarera',
  accessToken: '125d84c3519a4a49a9b7ca5adb7e187a'
})
userFeed.run()
