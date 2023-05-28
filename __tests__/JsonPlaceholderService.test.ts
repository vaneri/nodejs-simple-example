
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import JsonPlaceholderService from '../src/service/JsonPlaceholderService';

describe('test sending message', () => {

    interface User {
        userid: string,
        posts?: any[]
    }

    test('returns data', async () => {
        var mock = new MockAdapter(axios);
        const user:User = { userid: "1" };
        const postData = [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                "hasEventId": false
            }
        ];
        let userId = "1";
        mock.onGet(`https://jsonplaceholder.typicode.com/users/${userId}`).reply(200, user);
        mock.onGet(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).reply(200, postData);
        let userReturned = await JsonPlaceholderService.getUser(userId);
        user.posts = postData;
        expect(userReturned.posts).toBeDefined();
    });
});
