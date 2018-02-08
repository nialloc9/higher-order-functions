import withGreeting from './withGreeting';
import required from './required';
import asyncErrorHandler from './asyncErrorHandler';

/**
 * logs greeting to console
 * @param greeting
 */
const testFunction = greeting => {
    console.log(greeting);
};

/** will call the withGreeting higher order function and then call testFunction with greeting from hof **/
withGreeting(testFunction); // Hello

/**
 * handles required values
 * @param {string} errorMessage - the errorMessage to display
 */
const handleRequiredValue = errorMessage => {
    if(errorMessage){
        console.log(`ERROR: ${errorMessage}`);
    }
};

required({ value: "niall", message: "Name is required", test: handleRequiredValue }); //
required({ value: name, message: "Age is required", test: handleRequiredValue }); // Age is required

/**
 * successfully resolves with data
 * @type {Promise} - the promise
 */
const fetchReturnData = new Promise((resolve, reject) => resolve({ data: [1, 2] }));

/**
 * rejects promise with error
 * @type {Promise} - the promise
 */
const fetchReturnError = new Promise((resolve, reject) => reject({ message: "error" }));

/**
 * fetches all data using fetches from above
 * @returns {Promise.<void>}
 */
const fetchAllData = async () => {

    // no need for a try catch
    const success = await asyncErrorHandler(fetchReturnData);
    const error = await asyncErrorHandler(fetchReturnError);

    console.log(success); // [null, { data: [ 1, 2 ] }
    console.log(error); // [{ messsage: "error" }, null ]
};

fetchAllData();
