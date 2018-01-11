import { MockList } from 'graphql-tools';
import casual from 'casual';

export default {
  // TODO: Update to mock all schema types and fields
  Numbers_Trivia: () => ({
    text: casual.sentence,
    found: casual.boolean,
    number: casual.number,
    type: casual.random_element(['trivia', 'date', 'math', 'year']),
    date: casual.date('mmm D')
  }),
};
