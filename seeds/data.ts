export const users = [
    {
      username: "johndoe",
      email: "johndoe@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "janedoe",
      email: "janedoe@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "alice",
      email: "alice@example.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "bob",
      email: "bob@example.com",
      thoughts: [],
      friends: [],
    },
  ];
  
  export const thoughts = [
    {
      thoughtText: "This is my first thought!",
      username: "johndoe",
      reactions: [
        {
          reactionBody: "Great thought!",
          username: "janedoe",
        },
      ],
    },
    {
      thoughtText: "I love programming!",
      username: "janedoe",
      reactions: [
        {
          reactionBody: "Me too!",
          username: "alice",
        },
      ],
    },
    {
      thoughtText: "JavaScript is awesome!",
      username: "alice",
      reactions: [
        {
          reactionBody: "Absolutely agree!",
          username: "bob",
        },
      ],
    },
    {
      thoughtText: "MongoDB makes NoSQL fun!",
      username: "bob",
      reactions: [
        {
          reactionBody: "Yes, it does!",
          username: "johndoe",
        },
      ],
    },
  ];