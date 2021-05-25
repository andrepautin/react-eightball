/** Function takes in array of items:
 *  
 *  Returns a random item from the array
 *  
 */
function choice(answers) {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

export {choice}
