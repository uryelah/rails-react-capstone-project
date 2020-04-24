# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sarah = User.create(name: 'Sarah', email: 'sarah@mail.com', password: '123abc')

sarah.meets.create(title: 'First meeting', description: 'Lorem ipsum sum don, fem teinho,m de lacarael.')