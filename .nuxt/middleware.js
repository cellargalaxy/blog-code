const middleware = {}

middleware['config'] = require('../middleware/config.js')
middleware['config'] = middleware['config'].default || middleware['config']

middleware['log'] = require('../middleware/log.js')
middleware['log'] = middleware['log'].default || middleware['log']

middleware['model'] = require('../middleware/model.js')
middleware['model'] = middleware['model'].default || middleware['model']

middleware['service'] = require('../middleware/service.js')
middleware['service'] = middleware['service'].default || middleware['service']

middleware['util'] = require('../middleware/util.js')
middleware['util'] = middleware['util'].default || middleware['util']

export default middleware
