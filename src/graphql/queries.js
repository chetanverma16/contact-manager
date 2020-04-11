/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContacts = /* GraphQL */ `
  query GetContacts($id: ID!) {
    getContacts(id: $id) {
      id
      fullname
      email
      phonenumber
      status
    }
  }
`;
export const listContactss = /* GraphQL */ `
  query ListContactss(
    $filter: ModelContactsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullname
        email
        phonenumber
        status
      }
      nextToken
    }
  }
`;
