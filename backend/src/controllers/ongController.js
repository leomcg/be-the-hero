const crypto = require('crypto')

const connection = require('../database/connection')

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        
        await response.json(ongs)
        },
    
    async create(request, response) {
    //destructuring
    const { name, email, whatsapp, city, uf } = request.body
    // Create random id number using crypto package
    const id = crypto.randomBytes(4).toString('HEX')
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
        return response.json({ id })
    }
}

