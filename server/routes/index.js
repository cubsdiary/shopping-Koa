/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

router.get('/demo', controllers.demo)
router.get('/goods', controllers.goods)

module.exports = router
