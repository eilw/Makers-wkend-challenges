require 'twilio-ruby'
require 'dotenv'

class Text

  def initialize
    @credentials = Dotenv.load('dotenv.env')
  end

  def send_confirmation(body)
    # put your own credentials here
    account_sid = @credentials["account_sid"]
    auth_token = @credentials["auth_token"]

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token

    @client.account.messages.create({
    	from: @credentials['tilio_nr'],
    	to: @credentials['phone_nr'],
      body: body
    })
  end
end
