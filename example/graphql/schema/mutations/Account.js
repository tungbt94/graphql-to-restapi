import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql'
import { GraphQLEmail } from 'graphql-custom-types'

import { AccountType } from '../../types'

export const createAccount = {
  type: AccountType,
  description: 'Tạo tài khoản',
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return params
  },
}

export const resetPassword = {
  type: GraphQLBoolean,
  description: 'Reset Password',
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLEmail),
    },
  },
  resolve() {
    return true
  },
}

export const createMultiAccount = {
  type: GraphQLBoolean,
  description: 'Create multi account',
  args: {
    accounts: {
      type: new GraphQLList(GraphQLString),
    },
  },
  resolve() {
    return true
  },
}
