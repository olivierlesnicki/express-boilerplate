import { buildSchema } from 'graphql';

export default buildSchema(`

  type Query {
    viewer: String
  }

`);
