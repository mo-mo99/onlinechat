class RoomsController < ApplicationController
  def index
    @new_room = Room.new
    @rooms = Room.all
  end

  def create
    @new_room = current_user&.rooms&.build

    if @new_room&.save
      @new_room.broadcast_append_to :rooms  
    end
  end

  def show
    @room = Room.find_by!(title: params[:title])
    @new_message = current_user&.messages&.build
    @messages = @room.messages
  end
end