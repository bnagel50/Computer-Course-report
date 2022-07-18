import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_COURSES = gql`
query allCourses {
  courses {
    _id
    school
    cost
    length
    location
    curriculum
  }
}
`;

export const QUERY_COURSE = gql`
query singleCourse($courseId: ID!) {
  course(courseId: $courseId) {
    _id
    school
    cost
    length
    location
    curriculum
  }
}
`;


