class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :likes
  has_many :comments, dependent: :destroy
  has_many :photos, dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def owns?(post)
    post.user_id == self.id
  end

  def self.get_usernames(likes)
    likes.map{|like| User.find(like.user_id).username}.join(', ')
  end

end
