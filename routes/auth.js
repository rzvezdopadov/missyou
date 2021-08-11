const {Router} = require('express')
const router = Router()

router.post(
    '/register', 
    async(req, res) => {
        console.log(`Запрос POST! Страница /register Data:`)
        console.log(req.body)
        try {
            res.status(200).json({
                message:"Регистрация прошла успешно!"
            })
        } catch (e) {
            `Auth module 'register' error with message: '${e.message}'`
            res.status(500).json({
                message:"Что-то пошло не так при регистрации!"
            })
        }
    }
)

router.post(
    '/login', 
    async(req, res) => {
        console.log(`Запрос POST! Страница /login Data:`)
        console.log(req.body)
        try {
            res.status(200).json({
                message:"Залогинивание прошло успешно!"
            })
        } catch (e) {
            `Auth module 'login' error with message: '${e.message}'`
            res.status(500).json({
                message:"Что-то пошло не так при залогинивании!"
            })
        }
    }
)

router.get(
    '/login', 
    async(req, res) => {
        console.log(`Запрос GET! Страница /login Data:`)
        console.log(req.body)
        try {
            res.status(200).json({
                message:"get 200 server!"
            })
        } catch (e) {
            `Auth module 'login' error with message: '${e.message}'`
            res.status(500).json({
                message:"get 500 server!"
            })
        }
    }
)

module.exports = router


