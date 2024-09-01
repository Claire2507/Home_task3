const axios = require('axios');

describe('Login and Logout Verification', () => {
  it('should successfully log in ', async () => {
    const username = 'Claire';
    const password = 'password123';

    // login with data
    const response = await axios.get(`https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`);

    // verify the response is 200
    expect(response.status).to.equal(200);
    // verify the correct message is present in response
    expect(response.data.message).to.include('logged in user session');
  });

  it('should successfully log out ', async () => {
  
    // log out
    const logoutResponse = await axios.get(`https://petstore.swagger.io/v2/user/logout`);
    // verify the response is 200
    expect(logoutResponse.status).to.equal(200);
    // verify the message
    expect(logoutResponse.data.message).to.include('ok');
  });
});