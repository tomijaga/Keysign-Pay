
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keysign-pay-react.cjs.production.min.js')
} else {
  module.exports = require('./keysign-pay-react.cjs.development.js')
}
