import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import typeDefs from './schemaGql.js';
import mongoose from 'mongoose';
import { mongo_uri } from './config.js';

mongoose.connect(mongo_uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

mongoose.connection.on("connected",()=>{
    console.log('Successfully connected to mongoDB');
})

mongoose.connection.on("error",(error)=>{
    console.log('Invalid',error);
})

// import model 
import './models/quotes.js';
import './models/user.js'

import resolvers from './resolvers.js';



const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});