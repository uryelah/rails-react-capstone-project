Rails.application.routes.draw do
  resources :meets do
    resources :meetings
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'auth/signup', to: 'users#create'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
end
