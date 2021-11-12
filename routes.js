import { Router } from 'express'

import got from 'got'

const routes = Router()

class Repository {
    constructor(full_name, description) {
        this.full_name = full_name,
        this.description = description
    }
}

routes.get('/users/:username', (req, res) => {
    (async () => {
        try {
            const { body } = await got(`https://api.github.com/users/${req.params.username}/repos`)
            
            const parseBody = JSON.parse(body)

            const repositories = []

            parseBody.forEach(element => {
                const { full_name, description } = element 

                repositories.push(new Repository(full_name, description))
            })            
            
            res.send(repositories)
        } catch (error) {
            console.log(error.response.body);
        }
    })()
})

export default routes