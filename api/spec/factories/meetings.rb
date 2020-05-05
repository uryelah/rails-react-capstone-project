FactoryBot.define do
  factory :meeting do
    title { Faker::Lorem.question }
  end
end
