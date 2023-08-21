import { writable } from 'svelte/store';
const PollStore = writable([
  {
    id: 1,
    question: 'Python or JavaScript?',
    answerA: 'Python',
    asnwerB: 'JavaScript',
    votesA: 5,
    votesB: 9

  },
]);

export default PollStore;