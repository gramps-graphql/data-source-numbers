export default {
  Query: {
    trivia: (_, { number }, context) => context.model.get(number, 'trivia'),
    date: (_, { date }, context) => context.model.get(date, 'date'),
    math: (_, { number }, context) => context.model.get(number, 'math'),
    year: (_, { number }, context) => context.model.get(number, 'year'),
  },
  Numbers_Trivia: {
    date: data => data.date || null,
    year: data => data.year || null,
  },
};
