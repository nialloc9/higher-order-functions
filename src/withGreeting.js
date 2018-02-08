/**
 * higher order function that passes Hello to function passed in
 * @param {object} myFunction - the function to be called
 */
const withGreeting = myFunction => myFunction("Hello");

export default withGreeting;