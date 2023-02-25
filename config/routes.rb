Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :questions, only: [:index, :show, :create, :destroy, :update] do
      collection do
        get :search
      end
      resources :answers, only: [:index, :show, :create, :destroy, :update]
    end
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end

# below all routes
  get '*path', to: "static_pages#frontend_index"

end
