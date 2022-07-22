# asynchronous-requests

Async Request strategies and basic implementations to get you started

Requirements:

- async 3.2.4
- express 4.18.1
- node-fetch 3.2.9
- nodemon 2.0.19

## Installation

To get started clone this repo and run the below commands

Install dependencies
`npm install`
& start the express server
`npm start`

## Usage

In a separate terminal interact with the express server with the below commands

- example synchronous request with varying times

```bash
curl http://localhost:5500/requests/sync
```

- Async Parallel: array of endpoints fetched in parallel

```bash
curl http://localhost:5500/requests/async-parallel
```

- Async Queue: endpoints added to a queue run in parallel based on concurrency

```bash
curl http://localhost:5500/requests/async-parallel
curl http://localhost:5500/requests/async-parallel-fast
```

- Async Waterfall: array of functions, which relies on the output of the function before

```bash
curl http://localhost:5500/requests/async-waterfall
```

- Async Series: array of functions, which execute as the previous task finishes

```bash
curl http://localhost:5500/requests/async-waterfall
```

- Async Retry: retry with exponential backoff, attempts to get a successful response from the task run no more than the specified retry amount

```bash
curl http://localhost:5500/requests/async-retry
```
