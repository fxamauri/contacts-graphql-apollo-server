const db = require('../db');

class ContactService {
    getAllContacts = () => db('contacts');
    
    createContact =  async ({ data }) => await (await db('contacts').insert(data).returning('*'))[0];

    updateContact =  async ({ id, data }) => await (await db('contacts').where({ id }).update(data).returning('*'))[0];

    deleteContact =  async ({ filter }) => {
        if (filter.id) {
            return await db('contacts').where({ id: filter.id }).delete()
        }
        if (filter.id) {
            return await db('contacts').where({ email: filter.email }).delete()
        }
        throw Error('error filter')
    }
}

module.exports = new ContactService();