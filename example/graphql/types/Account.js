import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql'

const AccountType = new GraphQLObjectType({
  name: 'Account',
  description: 'Thông tin cơ bản của một account',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    email: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    fullName: {
      type: GraphQLString,
    },
    active: {
      type: GraphQLBoolean,
    },
    role: {
      type: GraphQLString,
    },
    deleted: {
      type: GraphQLBoolean,
    },
  }),
})

export { AccountType }
