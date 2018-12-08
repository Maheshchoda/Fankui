# Fankui

Taking feedback from the customers by sending an email to them and displaying it to the User.

# Install notes

1)git clone https://github.com/Maheshchoda/Fankui.git
2)cd feedback && npm i && cd client && npm i
3)Fill all the keys in the ./config/prod.js(don't copy and paste register in the following domains for you own keys)
keys required:{
Google: {
cookieKey,
clientID,
clientSecret,
},
mongoDB:{
mongoURI
},
Stripe: {
PublishableKey,
SecretKey
},
SendGrid:{
sendGridKey
}
domain:{
domain: http://localhost:3000
}
}

4)start the app by using 'npm run dev'
