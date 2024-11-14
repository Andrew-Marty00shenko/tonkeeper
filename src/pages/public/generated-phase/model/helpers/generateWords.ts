//TODO: delete after integration
export const generateWords = (numWords: number) => {
  const wordList = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon',
    'mango',
    'nectarine',
    'orange',
    'papaya',
    'quince',
    'raspberry',
    'strawberry',
    'tangerine',
    'ugli',
    'vanilla',
    'watermelon',
    'xigua',
    'yangmei',
    'zucchini', // Add more words as needed
  ];

  // Shuffle the word list
  const shuffledWords = wordList.sort(() => 0.5 - Math.random());

  // Get the first 'numWords' words from the shuffled list
  const selectedWords = shuffledWords.slice(0, numWords);

  return selectedWords;
};
