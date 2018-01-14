import expectMockFields from './helpers/expectMockFields';
import mocks from '../src/mocks';

describe('mock resolvers', () => {
  describe('Numbers_Trivia', () => {
    const mockResolvers = mocks.Numbers_Trivia();

    // This helper creates a test to ensure each field has a mock resolver.
    expectMockFields(mockResolvers, [
      'text',
      'found',
      'number',
      'type',
      'date',
    ]);
  });
});
