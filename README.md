# Social Network API

## Description

The **Social Network API** is a back-end application built using Node.js, Express.js, MongoDB, and Mongoose. It provides a RESTful API for managing users, thoughts, and reactions in a social network. This project demonstrates the use of NoSQL databases and includes features such as user management, thought creation, and reaction handling.

---

## Table of Contents

- [Installation](#installation)
- [Video Walkthrough](#video-walkthrough)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone: (https://github.com/AdrewReyes/social-network-api)

2. Navigate to the project directory:
   cd social-network-api
   
3. Install dependencies:
   npm install

4. Set up the database:
  Ensure MongoDB is installed and running on your machine.
  Update the database connection string in config/connection.ts if necessary.

5. Build the TypeScript files:
   npm run build

6.Seed the database: 
  npm run seed

## Video Walkthrough
  https://app.screencastify.com/manage/videos/WzH05y8G6As9uBndT7pn

## Usage

1. Start the server:
   npm start
2. The server will run on http://localhost:3001.
  
3. Use a tool like Postman, Insomnia, or cURL to interact with the API.

## API Endpoints
  # Users
    GET /api/users
    Retrieve all users.

    GET /api/users/:userId
    Retrieve a single user by ID, including their thoughts and friends.
    
    POST /api/users
    Create a new user.
    Request Body:
    
    PUT /api/users/:userId
    Update a user by ID.
    
    DELETE /api/users/:userId
    Delete a user by ID and remove their associated thoughts.
    
    POST /api/users/:userId/friends/:friendId
    Add a friend to a user's friend list.
    
    DELETE /api/users/:userId/friends/:friendId
    Remove a friend from a user's friend list.

  # Thoughts
    GET /api/thoughts
    Retrieve all thoughts.
    
    GET /api/thoughts/:thoughtId
    Retrieve a single thought by ID.
    
    POST /api/thoughts
    Create a new thought and associate it with a user.
    Request Body: 
      {
        "thoughtText": "This is a thought",
        "username": "exampleUser",
        "userId": "userIdHere"
      }

    PUT /api/thoughts/:thoughtId
    Update a thought by ID.
    
    DELETE /api/thoughts/:thoughtId
    Delete a thought by ID.

# Reactions
    POST /api/thoughts/:thoughtId/reactions
    Add a reaction to a thought.
    Request Body:
      {
        "reactionBody": "This is a reaction",
        "username": "exampleUser"
      }
    DELETE /api/thoughts/:thoughtId/reactions/:reactionId
    Remove a reaction by ID.

## Technologies Used

  Node.js: JavaScript runtime for building the server.
  Express.js: Web framework for creating RESTful APIs.
  MongoDB: NoSQL database for storing user and thought data.
  Mongoose: ODM library for MongoDB.
  TypeScript: Strongly typed JavaScript for better development experience.

## License

  This project is licensed under the ISC License.

## Contributing

  Contributions are welcome! Please fork the repository and submit a pull request.

## Questions

  If you have any questions, feel free to reach out: https://github.com/AdrewReyes
  




