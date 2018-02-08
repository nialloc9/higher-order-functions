/**
 * handles errors in async functions
 * @param promise
 * returns an array. first item is an error second is the result
 */
const asyncErrorHandler = promise => promise.then(data => [null, data]).catch(err => [err]);

export default asyncErrorHandler;
