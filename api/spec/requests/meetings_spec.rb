require 'rails_helper'

RSpec.describe 'Meetings API' do
=begin
  # Initialize the test data
  let!(:meet) { create(:meet) }
  let!(:meetings) { create_list(:meeting, 20, meet_id: meet.id) }
  let(:meet_id) { meet.id }
  let(:id) { meetings.first.id }

  # Test suite for GET /meets/:meet_id/meetings
  describe 'GET /meets/:meet_id/meetings' do
    before { get "/meets/#{meet_id}/meetings" }

    context 'when meet exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all meet meetings' do
        expect(json.size).to eq(20)
      end
    end

    context 'when meet does not exist' do
      let(:meet_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Meet/)
      end
    end
  end

  # Test suite for GET /meets/:meet_id/meetings/:id
  describe 'GET /meets/:meet_id/meetings/:id' do
    before { get "/meets/#{meet_id}/meetings/#{id}" }

    context 'when meet meeting exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the meeting' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when meet meeting does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find meeting/)
      end
    end
  end

  # Test suite for PUT /meets/:meet_id/meetings
  describe 'POST /meets/:meet_id/meetings' do
    let(:valid_attributes) { { title: 'Visit Narnia', description: false } }

    context 'when request attributes are valid' do
      before { post "/meets/#{meet_id}/meetings", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/meets/#{meet_id}/meetings", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  # Test suite for PUT /meets/:meet_id/meetings/:id
  describe 'PUT /meets/:meet_id/meetings/:id' do
    let(:valid_attributes) { { title: 'Mozart' } }

    before { put "/meets/#{meet_id}/meetings/#{id}", params: valid_attributes }

    context 'when meeting exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the meeting' do
        updated_meeting = Meeting.find(id)
        expect(updated_meeting.title).to match(/Mozart/)
      end
    end

    context 'when the meeting does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find meeting/)
      end
    end
  end

  # Test suite for DELETE /meets/:id
  describe 'DELETE /meets/:id' do
    before { delete "/meets/#{meet_id}/meetings/#{id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
=end
end
