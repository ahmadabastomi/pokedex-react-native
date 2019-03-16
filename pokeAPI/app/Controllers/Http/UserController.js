'use strict'

const User = use('App/Models/User')
class UserController {

    async post({ request, response }) {
        const { username, email, password } = request.post()
        try {
            const user = new User()
            user.username = username
            user.email = email
            user.password = password
            await user.save()
        } catch (e) {
            console.log(e)
            return response.json({ message: 'Failed Register' })
        }
    }

    async login({ request, auth, response }) {
        const { email, password } = request.all()
        try {
            const user = await User.findBy('email', email, 'password', password)
            const check = await auth.attempt(email, password)
            if (check) {
                return { id: user.id, token: check.token }
            }
        } catch (e) {
            console.log(e)
            return response.json({ message: 'You are not registered!' })
        }
    }

    async show({ params }) {
        const { id } = params
        const user = await User.findBy('id', id)
        return user
    }
}

module.exports = UserController
