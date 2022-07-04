module LikesHelper
  def likes(message)
    heart =
      if message.likes.find_by(user: current_user).present?
        "❤️"
      else
        "♡"
      end

    heart << "#{message.likes.count}" if message.likes.count.positive?
    heart
  end
end
