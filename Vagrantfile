# Check required plugins
REQUIRED_PLUGINS = %w(vagrant-berkshelf)
exit unless REQUIRED_PLUGINS.all? do |plugin|
  Vagrant.has_plugin?(plugin) || (
    puts "The #{plugin} plugin is required. Please install it with:"
    puts "$ vagrant plugin install #{plugin}"
    false
  )
end

Vagrant.configure(2) do |config|
  config.vm.box = "precise32"

  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.network "private_network", ip: "192.168.33.10"

  config.vm.synced_folder "src/", "/srv/app"

  config.vm.provider "virtualbox" do |vb|  
     # Customize the amount of memory on the VM:
     vb.memory = "1024"
  end
  
  config.vm.provision "chef_zero" do |chef|
    # Specify the local paths where Chef data is stored
    chef.cookbooks_path = ["chef/cookbooks/core", "chef/cookbooks/custom"]
    #chef.roles_path = "roles"
    #chef.nodes_path = "nodes"

    # Add a recipe
    chef.add_recipe "nodejs"

    # When Vagrant spins up a machine, it will also load your cookbook 
    # dependencies via Berkshelf
    config.berkshelf.enabled = true
    config.berkshelf.berksfile_path = "chef/cookbooks/core/nodejs/Berksfile"


    # Or maybe a role
    #chef.add_role "web"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
end
