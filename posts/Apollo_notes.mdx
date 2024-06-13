---
title: Apollo_notes
story: >-
  //gist.githubusercontent.com/dipsywong98/a8c63a36ea41ad7cb05f81a34eb89239/raw/Apollo_notes.md
tags:
  - JavaScript
  - Apollo
  - GraphQL
id: Apollo_notes
date: 2019-08-17

---
# Apollo Notes
## Resolver
```js
fieldName: (parent, args, context, info) => data;
```

## Lazy query in graphql

Sometimes we are not interested in getting all values of a node, we can do some tricks to prevent loading extra contents or generating infinite circular structure. Below example the users have many books, and each book have one owner, which is a user again. How can we query the user without returning the books, or reuse the node resolver if we want to return the books?

Let's assume your database can query any user by his username, any book by bookId, both username and bookId are unique

```gql
query {
  my{
    self: User
  }
  
  user(username: String!): User!
}

type User {
  username: ID!
  age: Int
  nickname: String
  books: [Book]
}

type Book {
  id: ID!
  name: String
  owner: User
}
```

### 1. Just get my own nickname without querying my books
```gql
my{
  self{
    nickname
  }
}
```

This can be achieved by `self` resolver return the User object without exploiting the books field, in user resolver, you can get back the user object and in case user require books, retrive the books using the user object. Same for the book resolver

```js
myResolver = {
  self:(_,__,{usernameFromContext}) => getUserByUsername(usernameFromContext)
}

userResolver = {
  books: ({username},_,__) => getBooksByUsername(usename) //first parameter is the user that the myResolver gives
}

bookResolver = {
  owner: ({id},_,__) => getUserByBookId(id)
}
```

    