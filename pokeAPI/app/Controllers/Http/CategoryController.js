'use strict'

const Category = use('App/Models/Category')
class CategoryController {

    async index() {
        const category = await Category.all()
        return category
    }
}

module.exports = CategoryController
