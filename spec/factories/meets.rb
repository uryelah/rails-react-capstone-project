FactoryBot.define do
    factory :meet do
      title { Faker::Lorem.word }
      description { Faker::Lorem.sentence }
      created_by { Faker::Number.number(10) }
    end
end