Rails.application.routes.draw do
  resources :meets do
    resources :meetings
  end

  resources :conversations, only: [:index, :create]
  resources :messagems, only: [:create]
  mount ActionCable.server => '/cable'

  resources :user_meets, except: :show

  get 'search/:term', to: 'meets#search'
  get 'user_meets/meets/:user_id', to: 'user_meets#show'
  get 'user_meets/users/:meet_id', to: 'user_meets#show'
  post 'auth/login', to: 'authentication#authenticate'
  post 'auth/signup', to: 'users#create'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
end
