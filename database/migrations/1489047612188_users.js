'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email').unique()
      table.string('lastname', 60)
      table.string('forename', 50)
      table.string('password')
      table.boolean('isAdmin').defaultTo(false)
      table.boolean('isAccepted').defaultTo(false)
      table.timestamps()
      table.softDeletes()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
