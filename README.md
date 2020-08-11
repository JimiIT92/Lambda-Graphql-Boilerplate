# Lambda GraphQL Boilerplate

Boilerplate code to make a fast GraphQL Apollo Server
running on AWS Lambda. Just add in your models/resolvers
and you are good to go! 😁

<p align="center">
  <img src="logo.png" />
</p>

## 🔧 Install

Clone this repository on your local machine

```
git clone https://github.com/JimiIT92/Lambda-Graphql-Boilerplate
```

Open the project in your favorite IDE or text editor
(I suggest [VSCode](https://code.visualstudio.com/))

Once open, open a new terminal and install the project dependencies

```
npm install
```

Remember to rename the `.env.example` file to `.env`
or make your own `.env` file!

## 🔗 Dependencies

Since the project is intended to run on AWS Lambda, you need
[Serverless Framework](https://serverless.com/) installed
to make it run on your local machine too.
Otherwise you need to change the `src/app.js` code
to start a web server with [Apollo](https://www.apollographql.com/).
Note that in this case you won't be able to deploy the service
to AWS Lambda, since Lambda can't run a normal Apollo Server.

## 👨🏻‍💻 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

Licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, share and edit this code as you wish 😁
