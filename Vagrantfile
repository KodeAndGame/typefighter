# Check required plugins
REQUIRED_PLUGINS = %w(vagrant-berkshelf vagrant-triggers)
exit unless REQUIRED_PLUGINS.all? do |plugin|
  Vagrant.has_plugin?(plugin) || (
    puts "The #{plugin} plugin is required. Please install it with:"
    puts "$ vagrant plugin install #{plugin}"
    false
  )
end

Vagrant.configure(2) do |config|
  # Workaround for synced_folder cache issue (https://github.com/mitchellh/vagrant/issues/5199)
  config.trigger.before [:reload, :up, :provision], stdout: true do
    SYNCED_FOLDER = ".vagrant/machines/default/virtualbox/synced_folders"
    info "Trying to delete folder #{SYNCED_FOLDER}"
    
    begin
      File.delete(SYNCED_FOLDER)
    rescue Exception => ex
      warn "Could not delete folder #{SYNCED_FOLDER}."
      warn ex.message
    end
  end

  config.vm.box = "precise32"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "src/", "/srv/app"

  config.vm.provider "virtualbox" do |vb|  
     vb.memory = "1024"
  end
  
  config.vm.provision "chef_zero" do |chef|
    chef.cookbooks_path = "chef/cookbooks"
    chef.add_recipe "typefighter"
    config.berkshelf.enabled = true
    config.berkshelf.berksfile_path = "chef/cookbooks/typefighter/Berksfile"

    #chef.roles_path = "roles"
    #chef.add_role "web"
    #chef.nodes_path = "nodes"    
  end
end
