include_recipe 'git'

nodejs_npm "typefighter" do
  path "/srv/app"
  json true
end