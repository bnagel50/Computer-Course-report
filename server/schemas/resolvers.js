const { AuthenticationError } = require('apollo-server-express');
const { User, Course, Review } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    courses: async () => {
      return Course.find();
    },

    course: async(parent, { courseId }) => {
      return Course.findOne({ _id: courseId });
    },

    reviews: async () => {
      return Review.find();
    },

    review: async(parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId })
    }
  },

  Course: {
    reviews: async (parent) => {
      return Review.find({ courseId: parent._id })
    }
  },

  Review: {
    user: async (parent) => {
      return User.findOne({ _id: parent.userId })
    }
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      console.log('Made it here')
      const user = await User.create({ name, email, password });
      console.log(user);
      const token = signToken(user);
      console.log(token);
      console.log('hellooooooo')
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No account with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password!');
      }

      console.log(user)
      const token = signToken(user);
      console.log(token);
      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addCourse: async (parent, {courseData}) => {
    //   console.log('Made it here')
    //   const course = await Course.create(courseData);
    //   return { course };
    // },
    // removeCourse: async (parent, args, context) => {
    //   if (context.user) {
    //     return Course.findOneAndDelete({ _id: args.course_id})
    //   }
    // },


    addReview: async (parent, { reviewInput }) => {
      console.log('Made it here', reviewInput)
      const review = await Review.create(reviewInput);
      console.log(review)
      return review;
    },
    removeReview: async (parent, args, context) => {
      if (context.review) {
        return Review.findOneAndDelete({ _id: context.review._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
