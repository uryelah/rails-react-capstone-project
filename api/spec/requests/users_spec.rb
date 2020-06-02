require 'rails_helper'

RSpec.describe 'Meets API', type: :request do
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }

  before { get '/users', headers: authenticated_header(users.first) }

  describe 'GET /users' do
    it 'returns users' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /users/:id' do
    before { get "/users/#{user_id}", headers: authenticated_header(users.first) }

    context 'when the record exists' do
      it 'returns the user' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(user_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:user_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find User/)
      end
    end
  end

  describe 'POST /auth/signup' do
    let(:valid_attributes) do
      { name: 'Sheyla', password: '123abc', password_confirmation: '123abc', email: 'shey@mail.com' }
    end

    context 'when the request is valid' do
      before { post '/auth/signup', params: valid_attributes, headers: authenticated_header(users.first) }

      it 'creates a user' do
        expect(json['message']).to eq('Account created successfully')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/auth/signup', params: { name: 'Foobar' }, headers: authenticated_header(users.first) }

      it 'returns status code 401' do
        expect(response).to have_http_status(401)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Invalid credentials/)
      end
    end
  end
end
