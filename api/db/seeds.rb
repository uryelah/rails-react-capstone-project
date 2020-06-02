# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sarah = User.create(name: 'Sarah', email: 'sarah@mail.com', password: '123abc', picture: 'https://joeschmoe.io/api/v1/jane')
User.create(name: 'Jo', email: 'jo@mail.com', password: '123abc', picture: 'https://joeschmoe.io/api/v1/josephine')

12.times do |i|
  meet = sarah.meets.create(title: "Support meeting - #{i}",
                            description: 'This is a meeting for the members unnable to leave...',
                            frequency: 'weekly',
                            duration: 1.5,
                            day: 'Wednesday',
                            members: 20,
                            max_members: 24,
                            created_by: sarah.id)
  meet.meetings.create(title: 'Next meeting',
                       description: '...',
                       date: Date.new + 10.days,
                       confirmed_members: 0,
                       link: 'https://microverse.zoom.us/j/76632873333')
end
