require 'rubygems'
gem 'rubyzip'
require 'zip/zip'
require 'zip/zipfilesystem'

zip = File.join(File.join('build', "light-themes-scrollbar.zip"))

task :default => :package

task :clear do
	if (File.exists?(zip))
		File.delete(zip)
	end
end

task :watch do
	sh "compass -w"
end

task :compile => :clear do
	sh "compass -s compressed --force"
end

task :package => :compile do
	source_files = ["images/icon48.png", "manifest.json", "stylesheets/scrollbar.css", "js/scrollbars.js"]
	Zip::ZipFile.open(zip, 'w') do
		|zipfile|
		0.upto(source_files.size-1) do |i|
			puts "Zipping #{source_files[i]}"
			zipfile.add(source_files[i], source_files[i])
		end
	end
end



