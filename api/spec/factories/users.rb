FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { 'joanne@silva.com' }
    password { '123abc' }
  end
end
