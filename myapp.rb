require 'rubygems'
require 'tuio-ruby'
require 'json'

require 'rack/contrib'
require 'sinatra'

use Rack::JSONP

configure do
  $client = TuioClient.new
  $client.start
end

get '/tuio.js' do
  content_type 'application/json', :charset => 'utf-8'
  
  objects = $client.tuio_objects.map{ |id, o| {:x => o.x_pos, :y => o.y_pos}  }
  objects.to_json
end