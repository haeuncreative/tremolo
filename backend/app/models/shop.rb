# == Schema Information
#
# Table name: shops
#
#  id         :bigint           not null, primary key
#  shop_name  :string           not null
#  owner_id   :bigint           not null
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Shop < ApplicationRecord
  validates :shop_name
end