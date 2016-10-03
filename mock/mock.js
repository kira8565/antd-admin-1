'use strict'

module.exports = {
  'GET /api/login': function (req, res) {
    setTimeout(function () {
      const account = req.query.account
      const password = req.query.password
      if (account === 'admin' && password === 'admin') {
        res.json({
          msg: '登录成功！',
          success: true,
          token: '11111111111111111111111111111'
        })
      } else {
        res.json({
          msg: '登录失败！',
          success: false
        })
      }
    }, 1000)
  }

}
