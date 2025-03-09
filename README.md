# Real-Time Chat Application

A simple real-time chat application built with Socket.IO, Express, and vanilla JavaScript.

## Features

- Real-time messaging between multiple users
- User join/leave notifications
- Clean and responsive UI
- Messages are displayed with left/right alignment to distinguish between sent and received

## Tech Stack

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Socket.IO Client

- **Backend:**
  - Node.js
  - Express
  - Socket.IO

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd chat-app
```

2. Install server dependencies:
```sh
cd server
npm install
```

## Running the Application

1. Start the server:
```sh
cd server
npm run nodemon
```

2. Open the client:
   - Navigate to the `client` folder
   - Open `index.html` in your web browser
   - Or serve it using a local development server

The server runs on port 5000 by default.

## Usage

1. Open the application in your browser
2. Enter your name when prompted
3. Start chatting with other connected users
4. Messages you send will appear on the right
5. Messages from others will appear on the left

## Structure

```
chat-app/
├── client/
│   ├── client.js    # Frontend Socket.IO logic
│   ├── index.html   # Web interface
│   └── style.css    # Styling
└── server/
    ├── index.js     # Server implementation
    └── package.json # Dependencies
```
