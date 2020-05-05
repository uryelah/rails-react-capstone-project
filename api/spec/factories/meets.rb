FactoryBot.define do
  factory :meet do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    frequency { 'Weekly' }
    day { 'Monday' }
    duration { '2' }
    created_by { 1 }
    max_members { 10 }
  end
end
