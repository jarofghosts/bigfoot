var http = require('http'),
    router = require('route-emitter').createRouter(),
    port = process.env.BIGFOOT_PORT || 8165

router.listen('*', '*', do_auth)

http.createServer(router.route).listen(port)

function do_auth(req, res) {
  // placeholder
  var method = req.method.toLowerCase()
  if (method == 'post' || method == 'put') {
    req.on('data', res.write.bind(null))
  } else {
    res.end()
  }
}
