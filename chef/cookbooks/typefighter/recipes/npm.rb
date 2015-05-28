include_recipe 'git'

# install npm packages based on package.json in app
nodejs_npm "typefighter" do
  path "/srv/app"
  json true
end