const express = require('express')
const router = express.Router()
const config = require('config');
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')


router.post(
    '/register',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Некоректный пароль').isLength({min: 8, max: 20}),
        check('confirmPassword', 'Некоректный пароль').isLength({min: 8, max: 20})
    ], 
    async(req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации!"
                })
            }

            const {email, password, confirmPassword, userName} = req.body

            if (password !== confirmPassword) {
                return res.status(400).json({message: "Пароли не совпадают!"})
            }

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: "Такой пользователь уже существует!"})
            }

            const hashedPassword = await bcrypt.hash(password, 13)

            const user = new User({email, password: hashedPassword, userName})

            await user.save()
            
            res.status(201).json({message: "Пользователь успешно создан!"})

        } catch (e) {
            res.status(500).json({
                message:"Что-то пошло не так при регистрации!",
                messageOther: e.message
            })
        }
    }
)

router.post(
    '/login',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'Некоректный пароль').isLength({min: 8, max: 20})
    ], 
    async(req, res) => {
        console.log(req.body)
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при входе в систему!"
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: "Такой пользователь не существует!"})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: "Неверный пароль, попробуйте снова!"})
            }

            const token = await jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '365d'}
            )
            
            return res.status(200).json({token, userId: user.id, userName: user.userName, message: "Вы успешно авторизовались!"})

        } catch (e) {
            res.status(500).json({
                message:"Что-то пошло не так при регистрации!"
            })
        }
    }
)

module.exports = router


