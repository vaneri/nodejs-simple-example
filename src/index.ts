import express, { Request, Response } from 'express'
import JsonPlaceholderService from './service/JsonPlaceholderService'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');

})

app.get('/users/:id/posts', async (request, response) => {
    let userId = request.params.id || "0";
    try {
        response.send(await JsonPlaceholderService.getUser(userId));
    } catch (err) {
        response.send(err);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
