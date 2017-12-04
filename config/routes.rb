Rails.application.routes.draw do
  # For questions, see http://guides.rubyonrails.org/routing.html
  root to: 'application#display'

  namespace :api, defaults: {format: :json} do
    resources :cards
  end
end
