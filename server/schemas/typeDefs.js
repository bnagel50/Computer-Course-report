const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Course {
    school: String!
    cost: String!
    length: Int!
    location: String!
    curriculum: String!
    # reviews: [review]
  }

  # input CourseInput {
  #   school: String!
  #   cost: String!
  #   length: Number!
  #   location: String!
  #   curriculum: String!
  # }

  # type Review {
  #   experience: Number!
  #   instructors: Number!
  #   curriculum: Number!
  #   jobAssistance: Number!
  #   employment: String!
  #   commentBody: String
  # }

  # type ReviewInput {
  #   experience: Number!
  #   instructors: Number!
  #   curriculum: Number!
  #   jobAssistance: Number!
  #   employment: String!
  #   commentBody: String
  # }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    courses: [Course]!
    # course: (courseId: ID!): Course
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    # addCourse(courseData: CourseInput): Course
    # addReview(reviewData: ReviewInput): Reviews
    # remove
  }
`;

module.exports = typeDefs;
