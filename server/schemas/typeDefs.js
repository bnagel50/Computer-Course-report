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
    curriculum: [String!]
  }

  input CourseInput {
    school: String!
    cost: String!
    length: Int!
    location: String!
    curriculum: [String!]
  }

  type Review {
    experience: Int!
    instructors: Int!
    curriculum: Int!
    jobAssistance: Int!
    employment: String!
    commentBody: String
  }

  type ReviewInput {
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
    
    # course: (courseId: ID!): Course
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    # addCourse(courseData: CourseInput): Course
    # addReview(reviewData: ReviewInput): Review
    # # remove
    # removeReview: Review
  }
`;

module.exports = typeDefs;
