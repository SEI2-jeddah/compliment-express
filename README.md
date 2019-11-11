# SEI Emergency Compliment, in Express

## Mission…

Run `npm install` then Create your own version of Emergency Compliment using Express. When a user visits the site, they should be greeted with a SEI-themed compliment to cheer them up.


## Level 1: Generic Compliment

When you visit the root (`"/"`) of your app, it should display a generic greeting and a randomly chosen compliment.

Here are some sample compliments
(feel free to substitute in your own):

```js
compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Tuesday yet?",
  "It's almost fun hours!",
  "The Force is strong with you",
  "Its dangerous to go alone, Take this!"
]
```

## Level 2: personalized compliment

When you visit `"/name"` (ie: `"/randy"`), the greeting should personalize itself to the provided name. There should still be a random compliment.

## Level 3: user submitted compliments

Allow a user to add to the list of compliments using a POST request. You can submit POST requests to the app using [Postman](https://www.getpostman.com/) or a form.

How/where would you store these compliments?  Need a hint?  Try to look at [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
