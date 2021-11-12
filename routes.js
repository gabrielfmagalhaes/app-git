import { Router } from 'express'

import got from 'got'

const routes = Router()

routes.get('/users/:profileUrl', (req, res) => {
    (async () => {
        try {
            const response = await got(`https://api.github.com/users/gabrielfmagalhaes/repos`)
        
            console.log(response.body)
        } catch (error) {
            console.log(error.response.body);
            //=> 'Internal server error ...'
        }
    })();
})

export default routes