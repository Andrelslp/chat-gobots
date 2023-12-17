# ChatGoBots

This project was created as a test for a job application. It is built using Next.js 14, with Node.js version 21.4.0 and npm version 10.2.4.

ChatGoBots is a real-time chat application designed to facilitate communication between multiple users. The login page prompts users to enter a nickname. If the nickname is not registered in the system (local storage), a new user profile is created. Otherwise, the user is logged into the chat page.

**Private Chats:** Users can initiate private conversations with any contact listed on the chat page. Conversations are exclusive between two users, ensuring privacy.

- **User Interaction:** The chat interface displays all existing contacts, allowing users to engage in private conversations with multiple users simultaneously.

- **Emoji Support:** Users can send a variety of emojis. The complete emoji list is searchable, providing an efficient way to find and use specific emojis.

- **Persistent Data:** User messages and contacts are saved in the system, allowing users to leave the page and return later without losing their conversation history or contacts. 

- **Real-time Updates:** The application updates in real-time. If a user creates a new contact or sends a message from one window, it is instantly reflected in other open windows.

- **Responsiveness:** The application is responsive, providing an optimal viewing experience across various devices, including mobile phones.

- **User-Friendly Navigation:** Clicking on the logo returns users to the login screen, offering a convenient way to navigate the application.

## Deploy Version

You can access the deployed version of the application at [https://chatgobots.vercel.app/](https://chatgobots.vercel.app/). Feel free to use the link directly on your computer or mobile device to start chatting!

## Getting Started

To run the project locally, follow these steps:

#### Install dependencies:

```
npm install
```

#### Run the project:

```
npm run dev
```

#### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Integration

The project includes a Dockerfile for containerization. Use the following commands:

#### Build Docker image:

```
docker build -t chat-gobots -f Dockerfile .
```

#### Create and run a Docker container:

```
docker run -p 8080:3000 -d chat-gobots
```

#### Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Development Tools

Ensure you have the following tools installed in your VSCode for a consistent development environment:

- ESLint
- Prettier
- EditorConfig
