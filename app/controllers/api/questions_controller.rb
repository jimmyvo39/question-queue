class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def search
    @questions = Question.where('title LIKE ?', "%#{params[:query]}%")
  end

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = @current_user.id


    if @question.save!
      # render :index
      # render :show
      render json: @question
    else 
      render json: { errors: @question.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy if @question
    render :show
  end

  def update
    # debugger
    @question = Question.find_by(id: params[:id])

    if @question.update!(question_params)
      # redirect_to api_question_url(@question)
      # render :show
      render json: @question
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def relevent_time(created_at)
    ApplicationController.helpers.time_ago_in_words(created_at) + " ago"
  end

  private 

  def question_params
    params.require(:question).permit(:title,:body,:author_id, :id, :query)
  end


end
