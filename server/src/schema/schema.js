import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull } from 'graphql'
import UserModel from '../model/user-model.js'

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    emailId: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: User,
      args: { emailId: { type: GraphQLString } },
      resolve(parent, args) { return UserModel.findOne({ emailId: args.emailId }) }
    }
  }
})

//Mutation 
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: User,
      args: {
        emailId: { type: GraphQLNonNull(GraphQLString) },
        userName: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const user = new UserModel({
          emailId: args.emailId,
          userName: args.userName,
          password: args.password
        })
        return user.save()
      }
    },
    updateUserUsername: {
      type: User,
      args: {
        emailId: { type: GraphQLNonNull(GraphQLString) },
        newUsername: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return UserModel.findOneAndUpdate(
          { emailId: args.emailId },
          { userName: args.newUsername },
          { new: true } // To return the updated user
        )
      },
    },
    deleteUser: {
      type: User,
      args: { emailId: { type: GraphQLString } },
      resolve(parent, args) { return UserModel.deleteOne({ emailId: args.emailId }) }
    },
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

export default schema
