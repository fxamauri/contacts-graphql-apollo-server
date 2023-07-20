const contactService = require('../../../services/contactService');

module.exports = {
    Query: {
        contacts: (obj, args, context, info) => {
            console.log({ obj, args, context, info })
            return context.contactService.getAllContacts()
        },
    },
    Mutation: {
        createContact: (_, { data }) => contactService.createContact({ data }),
        updateContact: (_, { id, data }) => contactService.updateContact({ id, data }),
        deleteContact: (_, { filter }) => contactService.deleteContact({ filter })
    }
}