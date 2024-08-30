const axios = require('axios');

describe('Login and Logout Verification', () => {
  it('should successfully log in ', async () => {
    const username = 'Claire';
    const password = 'password123';

    
    const response = await axios.get(`https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`);

    
    expect(response.status).to.equal(200);

    expect(response.data.message).to.include('logged in user session');
  });

  it('should successfully log out ', async () => {
  

    const logoutResponse = await axios.get(`https://petstore.swagger.io/v2/user/logout`);

    
    expect(logoutResponse.status).to.equal(200);

    expect(logoutResponse.data.message).to.include('ok');
  });
});