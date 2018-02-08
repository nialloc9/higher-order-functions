/**
 * checks whether a value has been passed
 * @param {*} value - the value to be passed
 * @param {string} message - the message to display
 * @param {object} test - the test handler function
 * @returns {*}
 */
const required = ({ value, message, test }) => {
    const result = value ? null : message;

    return test(result);
};

export default required;