import { User, Message } from './models.js';

const resolvers = {
  Query: {
    users: async () => await User.findAll(),
    user: async (_, { id }) => await User.findByPk(id),
    messages: async () => await Message.findAll(),
    message: async (_, { id }) => await Message.findByPk(id),
  },
  Mutation: {
    createUser: async (_, { username, email }) => {
      return await User.create({ username, email });
    },
    createMessage: async (_, { userId, content }) => {
      return await Message.create({ userId, content });
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByPk(id);
      if (!user) return false;
      await user.destroy();
      return true;
    },
    deleteMessage: async (_, { id }) => {
      const message = await Message.findByPk(id);
      if (!message) return false;
      await message.destroy();
      return true;
    },
  },
  User: {
    messages: async (user) => await Message.findAll({ where: { userId: user.id } })
  },
  Message: {
    user: async (message) => await User.findByPk(message.userId)
  }
};

export default resolvers;
