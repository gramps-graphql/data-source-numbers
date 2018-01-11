import resolvers from '../src/resolvers';
import expectNullable from './helpers/expectNullable';

describe('Data Source Resolvers', () => {
  describe('Query', () => {
    const mockContext = {
      get: (val, type) => Promise.resolve({ [type]: val }),
    };

    describe('trivia', () => {
      test('loads trivia for a number', () => {
        expect.assertions(1);

        return expect(
          resolvers.Query.trivia({}, { number: 123 }, mockContext),
        ).resolves.toEqual({ trivia: 123 });
      });
    });

    describe('date', () => {
      test('loads trivia for a date', () => {
        expect.assertions(1);

        return expect(
          resolvers.Query.date({}, { date: '2017-08' }, mockContext),
        ).resolves.toEqual({ date: '2017-08' });
      });
    });

    describe('math', () => {
      test('loads math-related trivia for a number', () => {
        expect.assertions(1);

        return expect(
          resolvers.Query.math({}, { number: 123 }, mockContext),
        ).resolves.toEqual({ math: 123 });
      });
    });

    describe('year', () => {
      test('loads year-related trivia for a number', () => {
        expect.assertions(1);

        return expect(
          resolvers.Query.year({}, { number: 123 }, mockContext),
        ).resolves.toEqual({ year: 123 });
      });
    });
  });

  // describe('PFX_DataSourceBase', () => {
  //   const resolver = resolvers.PFX_DataSourceBase;

  //   expectNullable(resolver, ['name']);
  // });
});
