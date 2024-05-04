# YouTubeSubscriber-Backend

This is a backend part of youtubesubscriber project.
In this we create API's to get data from DataBase.

Here, we use MongoDB cluster DataBase.

## Tech Stack

Node.js, Express.js, MongoDB, Mongoose, OpenApiSpec,SWAGGER-UI

## Run Locally

Clone the project

```bash
  git clone https://github.com/MrButtons26/D-Subscribers-Mongo-Node-BoilerPlate-main
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Get all subscriber data

```http
  GET /subscriber
```

| Parameter | Type   | Description                                     |
| :-------- | :----- | :---------------------------------------------- |
| `-`       | `JSON` | Its fetch name & channel name of all subscriber |

#### Get name & channel name only

```http
  GET /subscriber/name
```

| Parameter | Type   | Description                                     |
| :-------- | :----- | :---------------------------------------------- |
| `-`       | `JSON` | Its fetch name & channel name of all subscriber |

#### Get item

```http
  GET /subscriber/${id}
```

| Parameter | Type   | Description                       |
| :-------- | :----- | :-------------------------------- |
| `id`      | `JSON` | **Required**. Id of item to fetch |

## Environment Variables

To run this project, we created a env file and add the following environment variables in .env file

`USER_NAME`

`PASSWORD`

`PORT`
