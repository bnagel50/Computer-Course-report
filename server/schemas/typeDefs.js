const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!

  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Course {
    _id: ID!
    cost: String
    length: Number
    avgRating: Number
    location: String
    numOfReviews: Number
    curriculum: String 
    reviews: [review]

  }

  type Review {
    _id: ID!
    name: String
    # curriculum: Number
    # instructors: Number
    # overallExperience: Number
    # jobAssistance: Number
    employment: String
    time: Date
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  




  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;