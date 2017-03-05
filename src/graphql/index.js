import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';
import rootValue from './root';

const router = express.Router();

router.use('/', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue
}));

export default router;
