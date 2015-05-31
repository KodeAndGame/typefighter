#
# Cookbook Name:: typefighter
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#

include_recipe 'nodejs'
include_recipe 'nodejs::npm'
include_recipe 'typefighter::npm'

link "/home/vagrant/app" do
  to "/srv/app"
end