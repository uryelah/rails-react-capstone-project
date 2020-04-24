Rails.application.routes.draw do
  resources :meets do
    resources :meetings
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
  get 'users', to: 'users#index'
end
