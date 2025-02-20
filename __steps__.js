/**
 * ----------
 * Mongodb Connection
 * -------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database? connect > drive > node > view full code
 * 5. change the password the url
 * -----------------------
 * 1. CREATE ---POST
 * 2.app.post('/users'/ async(req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make suer you use the express.json() midleware
 * 5. access data from the body: const user = req.body
 * 6. const result = awit useCollection.insertOne(user)
 * 7. res.send(result)
 *
 *
 *
 * Client
 * 1. create fetch
 * 2. and second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: 'content-type' = 'application/json'
 * 5. add body: JSON.Stringify(user)
 *
 *
 *
 * --------------
 * READ MANY
 * --------------
 * 1. create a cursor = useCollection.find()
 * 2. const result = await cursor.toArray()
 *
 *
 *
 * -----------
 * DELETE
 * -----------
 * 1. create app.delete('/users/:id/, async(req, res) => {})
 * 2. specify uniqe ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await useCollection deleteOne(query)
 *
 *
 * --------------
 * client
 * 1. create dynamic url with id
 * 2. mention the DELETE Method
 *
 *
 *
 *
 *
 *
 *
 */
