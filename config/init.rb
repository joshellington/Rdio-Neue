require 'newrelic_rpm'
require 'open-uri'
require 'json'
require 'date'
require 'time'
require 'pp'
# require 'rdio'

require './app/models/rdio'

enable :sessions

RDIO_CONSUMER_KEY = '2g4p4yha4c3q84b7y8wynw2r'
RDIO_CONSUMER_SECRET = 'yYjPGvzWPE'

def base_uri
  base_uri_raw = request.env["HTTP_HOST"]+request.env["SCRIPT_NAME"]
  path = URI.parse(request.env["REQUEST_URI"]).path
  base_uri = "http://"+base_uri_raw.split(path)[0]
end

def curr_path
  base_uri_raw = request.env["HTTP_REFERER"]
end

def match(path, opts={}, &block)
  get(path, opts, &block)
  post(path, opts, &block)
end