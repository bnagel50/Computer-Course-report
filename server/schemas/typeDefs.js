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
    _id: ID!
    school: String!
    cost: String!
    length: Int!
    location: String!
    curriculum: [String!]
    reviews: [Review]
  }

  # input CourseInput {
  #   school: String!
  #   cost: String!
  #   length: Int!
  #   location: String!
  #   curriculum: [String!]
  # }

  type Review {
    _id: ID!
    experience: Int!
    instructors: Int!
    curriculum: Int!
    jobAssistance: Int!
    employment: String!
    commentBody: String
    course: Course!
    user: User!
  }

  input ReviewInput {
    courseId: ID!
    userId: ID!
    experience: Int!
    instructors: Int!
    curriculum: Int!
    jobAssistance: Int!
    employment: String!
    commentBody: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    courses: [Course]!
    reviews: [Review]!
    review(reviewId: ID!): Review
    course(courseId: ID!): Course
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    # addCourse(courseData: CourseInput): Course
    
    addReview(reviewInput: ReviewInput): Review
    # # remove
    removeReview(reviewId: ID!): Course
  }
`;

module.exports = typeDefs;
