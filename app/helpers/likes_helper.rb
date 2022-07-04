module LikesHelper
  def likes(message, user)
    heart =
      if message.likes.find_by(user: user).present?
        "❤️"
      else
        "♡"
      end

    heart << "#{message.likes.count}" if message.likes.count.positive?
    heart
  end
end
