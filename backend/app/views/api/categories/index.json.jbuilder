json.categories @categories do |category|
  json.partial! "api/categories/category", category: category
end