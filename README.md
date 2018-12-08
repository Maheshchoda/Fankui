# Fankui

Taking feedback from the customers by sending an email to them and displaying it to the User.

# Install notes

1)git clone https://github.com/Maheshchoda/Fankui.git <br>
2)cd feedback && npm i && cd client && npm i<br>
3)Fill all the keys in the ./config/prod.js(don't copy and paste register in the following domains for you own keys)<br>
keys required:{<br>
Google: {<br>
cookieKey,<br>
clientID,<br>
clientSecret,<br>
},<br>
mongoDB:{<br>
mongoURI<br>
},<br>
Stripe: {<br>
PublishableKey,<br>
SecretKey<br>
},<br>
SendGrid:{<br>
sendGridKey<br>
}<br>
domain:{<br>
domain: http://localhost:3000<br>
}<br>
}<br>

4)start the app by using 'npm run dev'<br>
