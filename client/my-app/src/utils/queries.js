import { gql } from '@apollo/client';

export const QUERY_COURSES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

