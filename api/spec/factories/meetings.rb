FactoryBot.define do
  factory :meeting do
    title { Faker::Lorem.question }
    description { Faker::Lorem.sentence }
    date { Time.now + 1.day }
    link { 'https://zoom.com/fakelink' }
  end
end
