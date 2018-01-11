export default {
  Query: {
    trivia: (_, { number }, context) => context.get(number, 'trivia'),
    date: (_, { date }, context) => context.get(date, 'date'),
    math: (_, { number }, context) => context.get(number, 'math'),
    year: (_, { number }, context) => context.get(number, 'year'),
  },
};
