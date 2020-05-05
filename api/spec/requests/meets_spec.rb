require 'rails_helper'

RSpec.describe 'Meets API', type: :request do
  let!(:meets) { create_list(:meet, 10) }
  let(:meet_id) { meets.first.id }
  let!(:users) { create_list(:user, 1) }

  before { get '/meets', headers: authenticated_header(users.first) }

  describe 'GET /meets' do
    it 'returns meets' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /meets/:id' do
    before { get "/meets/#{meet_id}", headers: authenticated_header(users.first) }

    context 'when the record exists' do
      it 'returns the meet' do
        expect(json).not_to be_empty
        expect(json['meet']['id']).to eq(meet_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:meet_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Meet/)
      end
    end
  end

  describe 'POST /meets' do
    let(:valid_attributes) do
      { max_members: 10, created_by: users.first.id, duration: 2, day: 'Monday',
        frequency: 'Weekly', title: 'Learn Elm', description: 'This is a meeting for people learning Elm' }
    end

    context 'when the request is valid' do
      before { post '/meets', params: valid_attributes, headers: authenticated_header(users.first) }

      it 'creates a meet' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/meets', params: { title: 'Foobar' }, headers: authenticated_header(users.first) }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Description can't be blank/)
      end
    end
  end

  describe 'PUT /meets/:id' do
    let(:valid_attributes) { { title: 'Shopping' } }

    context 'when the record exists' do
      before { put "/meets/#{meet_id}", params: valid_attributes, headers: authenticated_header(users.first) }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /meets/:id' do
    before { delete "/meets/#{meet_id}", headers: authenticated_header(users.first) }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
