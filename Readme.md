# Notify Aliexpress Prices

From some aliexpress URL's you can receive in your discord webhook notification about the prices.

I'm using

```
node v14.19.1
```

To you install the dependencies use:

```js
npm install // or yarn install
```

To you run the project you'll need to create a .env file and include inside it a variable that includes your discord webhook token like:

```.env
DISCORD_WEBHOOK_TOKEN=token
```

And for build and do the first run use:

```
npm run buildstart
```

After this first command if you don't do any changes in the code use:

```
npm run start
```
