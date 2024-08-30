const {
    sendRequest
 } = require ("../helpers/api.helper");
const axios = require('axios');
describe('API Test', () => {
    it('GET test', async () => {
        
            const response = await axios({
                url: "https://jsonplaceholder.typicode.com/posts/1",
                method: "get"
            });
            expect(response.data.userId).to.equal(1);
            expect(response.status).to.equal(200);
            });

    it('POST test', async () => {
        
            const response = await axios({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "post",
                headers:{
                    'Content-Type': 'application/json'
                },
                data: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                  },
                });
                
                expect(response.status).to.equal(201);
                });       
});