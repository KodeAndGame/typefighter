#
# Cookbook Name:: typefighter
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#

node.set['nodejs']['version'] = '0.12.4'

include_recipe 'nodejs'
include_recipe 'nodejs::npm'
include_recipe 'typefighter::npm'

link "/home/vagrant/app" do
  to "/srv/app"
end