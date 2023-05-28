import axios from "axios";

class JsonPlaceholderService {

    static initializer = (() => {
        console.log('its happening');
        axios.interceptors.request.use(config => {
            console.log(`request intercepted config: ${config.url}`);
            return config;
        });
        axios.interceptors.response.use(config => {
            console.log(`response intercepted config: ${config.config.url}`);
            return config;
        });
    });


    public static async getUser(userId: string): Promise<any> {
        const [{ data: user }, { data: posts }] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);
        user.posts = posts || [];
        user.posts.forEach(post => {
            post.hasEventId = !(post.id % 2);
        });
        return user;
    }

}
JsonPlaceholderService.initializer();
export default JsonPlaceholderService;