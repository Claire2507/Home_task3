const axios = require("axios");
const sendRequest = async (url, data = null, method = "get") => {
    try {
        const response = await axios({
            method,
            url: `https://jsonplaceholder.typicode.com/${url}`,
            headers: {},
            data

        });
        return {
            status: response.status,
            data: response.data

        };
       
    } catch (error) {
        return {
            status: error.response.status
        };

    }
};

module.exports = {
    sendRequest
};
