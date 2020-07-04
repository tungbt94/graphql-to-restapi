import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import Mutations from './mutations'
import Queries from './queries'

const RootQuery = new GraphQLObjectType({
  name: 'Query', //Return this type of object
  fields: Queries,
})

const RootMutation = new GraphQLObjectType({
  name: 'Mutation', //Return this type of object
  fields: Mutations,
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})

export default schema
