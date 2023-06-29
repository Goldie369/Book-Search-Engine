const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // get single user
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('You are not logged in.');
      }    
    },

    Mutation: {
        // create a user and sign a token, then return them
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },
        // log in user, find by email
        login: async (parent, { email, password }) => {
        const user = await User.findOne ( { email } );
        
        // check if user exists 
        if (!user) {
            throw new AuthenticationError('Wrong login credentials.');
          }
    
        // check password 
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Wrong login credentials.');
        }
  
        const token = signToken(user);
        return { token, user };
        },
        saveBook: async (parent, { bookData }, context) => {
          if (context.user) {
            const updatedUser =  await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              { new: true }
            );
          
            return updatedUser;
          } else {
            throw new AuthenticationError('Can\'t add book. You are not logged in.');
          }
        },
        removeBook: async (parent, { bookId }, context) => {
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { savedBooks: { bookId: bookId } } },
              { new: true }
          );
          return updatedUser;
          } else {
            throw new AuthenticationError('Can\'t delete book. You are not logged in.');
          }
        },
    }
}

module.exports = resolvers;