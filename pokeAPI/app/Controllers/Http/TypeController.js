'use strict'

const Type = use('App/Models/Type')
class TypeController {

    async index() {
        const type = await Type.all()
        return type
    }
}

module.exports = TypeController
