'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.get('/home', function * (request, response) {
//   response.send('this is the home page')
// })
//
// Route.get('users/:id', function * (request, response) {
//   const id = request.param('id')
//   response.send(`Profile for user with id ${id}`)
// })
//
// Route.get('make/:drink?', function * (request, response) {
//   const drink = request.param('drink', 'coffee')
//   response.send(`Order for ${drink} has been placed`)
// })

Route.get('/', 'PostsController.index')
Route.on('about').render('about')
Route.on('contact').render('contact')
