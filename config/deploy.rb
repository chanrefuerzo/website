# config valid only for current version of Capistrano
# lock "3.11.0"


# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5

# Default value for :linked_files is []
# append :linked_files, ".env"

# Default value for linked_dirs is []
append :linked_dirs, "node_modules"

set :keep_releases, 2


namespace :deploy do
  desc 'install packages'
  task :install do
    on roles(:app) do
       within current_path do
        execute :yarn, :install
      end
    end
  end

  desc 'build webapp'
  task :build do
    on roles(:app) do
      within current_path do
        execute :yarn , 'build'
      end
    end
  end

  desc 'upload env'
  task :upload do
    on roles(:app) do
      upload!("./#{fetch(:env)}", "#{shared_path}/.env", :via => :scp)
      end
  end

  desc 'upload build'
  task :upload_build do 
    on roles(:app) do
      upload!("./build", "#{release_path}/", :via=> :scp ,:recursive => true)
      upload!("./build", "#{current_path}/", :via=> :scp ,:recursive => true)
      end
  end

  desc 'nginx restart'
  task :ngrestart do
    on roles(:app) do
      within current_path do
        execute :sudo, :service, :nginx, :restart
      end
    end
  end  
  


#   before :check, 'deploy:upload'
  # after :publishing, 'deploy:build'
  before :publishing, 'deploy:upload_build'
  # after :publishing, 'deploy:install'
  # after :publishing, 'deploy:start'
  # after :publishing, 'deploy:nginx_upload'
  after :publishing, 'deploy:ngrestart'
end

