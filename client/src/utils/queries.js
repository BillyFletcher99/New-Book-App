import gql from "graphql-tag";

export const GET_ME = gql`{
    me {
    _id
    email
    username
    bookCount
    savedBooks {
    authors
    bookId
    description
    title
    image
    link  }}}`;