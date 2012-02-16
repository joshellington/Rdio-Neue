require 'rubygems'
require 'sinatra'
require './config/init'

#
# Before any route is run
before do
  @path = request.env['SCRIPT_NAME']
end

#
# Routes

get '/' do
  access_token = session[:at]
  access_token_secret = session[:ats]
  if access_token and access_token_secret
    rdio = Rdio.new([RDIO_CONSUMER_KEY, RDIO_CONSUMER_SECRET], 
                    [access_token, access_token_secret])

    @user = rdio.call('currentUser')['result']
    @newReleases = rdio.call('getNewReleases', {'count' => 50})['result']
    @playbackToken = rdio.call('getPlaybackToken', {'domain' => 'localhost'})['result']

    pp @user
    pp @newReleases
    pp '-------------'
    pp @newReleases.length

    erb :index
  else
    erb :login
  end
end

post '/add/?' do
  access_token = session[:at]
  access_token_secret = session[:ats]
  if access_token and access_token_secret
    rdio = Rdio.new([RDIO_CONSUMER_KEY, RDIO_CONSUMER_SECRET], 
                    [access_token, access_token_secret])

    res = rdio.call('addToCollection', {'keys' => params[:keys]})
    pp '-------------'
    pp params[:key]

    content_type :json
    res.to_json
  else
    "no session!"
  end
end

get '/login' do
  session.clear
  # begin the authentication process
  rdio = Rdio.new([RDIO_CONSUMER_KEY, RDIO_CONSUMER_SECRET])
  callback_url = (URI.join request.url, '/callback').to_s
  url = rdio.begin_authentication(callback_url)
  # save our request token in the session
  session[:rt] = rdio.token[0]
  session[:rts] = rdio.token[1]
  # go to Rdio to authenticate the app
  redirect url
end

get '/callback' do
  # get the state from cookies and the query string
  request_token = session[:rt]
  request_token_secret = session[:rts]
  verifier = params[:oauth_verifier]
  # make sure we have everything we need
  if request_token and request_token_secret and verifier
    # exchange the verifier and request token for an access token
    rdio = Rdio.new([RDIO_CONSUMER_KEY, RDIO_CONSUMER_SECRET], 
                    [request_token, request_token_secret])
    rdio.complete_authentication(verifier)
    # save the access token in cookies (and discard the request token)
    session[:at] = rdio.token[0]
    session[:ats] = rdio.token[1]
    session.delete(:rt)
    session.delete(:rts)
    # go to the home page
    redirect to('/')
  else
    # we're missing something important
    redirect to('/logout')
  end
end

get '/logout' do
  session.clear
  redirect to('/')
end