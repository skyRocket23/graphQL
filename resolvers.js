import { users, quotes } from './fakedb.js';

const resolvers = {
    Query: {
        greet: () => {
            return "Hello world"
        },
        namaste: () => {
            return "Namaste Doston!"
        },
        Users: () => users,
        Quotes: () => quotes,
        user: (parent, { id }) => users.find(user => user.id == id),
        hisQuote: (parent, { id }) => quotes.filter(quotes => quotes.by == id),
    },

    User: {
        Quotes: (user) => quotes.filter(quotes => quotes.by == user.id)
    }
}

export default resolvers;