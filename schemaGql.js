
import { gql } from 'apollo-server'

const typeDefs = gql`
   type Query{
       greet:String,
       namaste:String,
       Users:[User]
       user(id:ID!):User
       Quotes:[Quote]
       hisQuote(id:ID!):[Quote]
   }
   type User{
       id:ID!
       firstName:String
       lastName:String
       email:String
       password:String
       Quotes:[Quote]
   }
   type Quote{
       name:String
       by:ID
   }
`;

export default typeDefs;