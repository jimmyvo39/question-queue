Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :questions, only: [:index, :show, :create, :destroy, :update] do
        post 'upvote', to: 'votes#upvote', defaults: { votable_type: 'Question' }
        post 'downvote', to: 'votes#downvote', defaults: { votable_type: 'Question' }
      collection do
        get :search
      end
      resources :answers, only: [:index, :show, :create, :destroy, :update] do
        member do
          post 'upvote', to: 'votes#upvote', defaults: { votable_type: 'Answer' }
          post 'downvote', to: 'votes#downvote', defaults: { votable_type: 'Answer' }
        end
      end
    end
    post 'answers/:answer_id/upvote', to: 'votes#upvote', defaults: { votable_type: 'Answer' }
    post 'answers/:answer_id/downvote', to: 'votes#downvote', defaults: { votable_type: 'Answer' }
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
  end

  # below all routes
  get '*path', to: "static_pages#frontend_index"
end