class Api::AnswersController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def index
    @answers = Answer.all
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = @current_user.id


    if @answer.save!
      # render :index
      # render :show
      render json: @answer
    else 
      render json: { errors: @answer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy if @answer
    render :show
  end

  def update
    # debugger
    @answer = Answer.find_by(id: params[:id])

    if @answer.update!(answer_params)
      # redirect_to api_answer_url(@answer)
      # render :show
      render json: @answer
    else
      render json: @answer.errors.full_messages, status: :unprocessable_entity
    end
  end

  def relevent_time(created_at)
    ApplicationController.helpers.time_ago_in_words(created_at) + " ago"
  end

  private 

  def answer_params
    params.require(:answer).permit(:body,:question_id,:author_id, :id)
  end


end
