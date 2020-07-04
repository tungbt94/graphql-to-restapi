import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql'

export const accounts = {
  type: GraphQLBoolean,
  description: 'Danh sách tài khoản',
  args: {},
  resolve() {
    return true
  },
}

export const accountInfo = {
  type: GraphQLBoolean,
  description: 'Lấy thông tin tài khoản dựa trên id',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve() {
    return true
  },
}
