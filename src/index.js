import typeDefs from './schema.graphql';
import Connector from './connector';
import Model from './model';
import resolvers from './resolvers';
import mocks from './mocks';

/*
 * For more information on the building GrAMPS data sources, see
 * https://gramps.js.org/data-source/data-source-overview/
 */
export default {
  namespace: 'Numbers',
  context: new Model({ connector: new Connector() }),
  typeDefs,
  resolvers,
  mocks,
};
