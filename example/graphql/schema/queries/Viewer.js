import { GraphQLBoolean } from 'graphql'

export const profile = {
  type: GraphQLBoolean,
  description: 'Viewer Profile',
  args: {},
  resolve() {
    return true
  },
}
