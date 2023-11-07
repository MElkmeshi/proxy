# Node.js Proxy Server

## Overview
This Node.js project implements a proxy server designed to forward requests to a specified API service. It was created to meet the requirements of companies that need to route traffic through a server with a static IP address. This ensures that all outbound requests appear to come from a single, consistent source.

## Features
- Forwards all HTTP/HTTPS requests to the configured API service.
- Allows for request modification before proxying.
- Utilizes `http-proxy-middleware` for efficient proxying.
- Easy to set up and configure with minimal overhead.

## Prerequisites
- Node.js installed on your system.
- Basic understanding of Node.js and Express.

## Installation

To set up the proxy server, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.

## Configuration

Before starting the server, configure the following variables in `index.js`:

- `PORT`: The port number on which the proxy server will listen.
- `API_SERVICE_URL`: The URL of the API service to which requests will be proxied.

## Starting the Server

Run the following command to start the proxy server:

```sh
npm start
```

You will see a message indicating that the proxy has started, along with the local URL and port number.

## Usage

Send your HTTP/HTTPS requests to `http://localhost:PORT` where `PORT` is the port number you configured. The proxy server will forward your requests to `API_SERVICE_URL` and return the response.

## Contributing

We welcome contributions to this project. Please open an issue or submit a pull request for any improvements or features you would like to suggest.
