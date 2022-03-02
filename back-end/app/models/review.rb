class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :category
end
