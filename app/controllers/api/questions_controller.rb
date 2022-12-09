class Api::QuestionsController < ApplicationController
  before_action: require_logged_in: only: [:create, :destroy, :update]
  wrap_parameters include: Question.attribute_names + [:author_id]

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render :show
    else 
      render json: { errors: @question.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :index
  end

  def update
    @question = Question.find(params[:id])

    if @question.update(question_params)
      redirect_to question_url(@question)
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 

  def question_params
    params.require(:question).permit(:title,:body)
  end


end
