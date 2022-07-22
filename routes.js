const express = require('express')
const router = express.Router()

const {
  synchronousExample,
  asyncParallel,
  asyncQueue,
  asyncQueueFast,
  asyncWaterfall,
  asyncSeries,
  asyncRetry
} = require('./functions')

// Synchronous Request Example with added delay
router.get('/sync', async function (req, res) {
  synchronousExample()
  res.end()
})

// Async Parallel requests
router.get('/async-parallel', function (req, res) {
  asyncParallel()
  res.end()
})

// Async Queue requests concurrency 1
router.get('/async-queue', async function (req, res) {
  asyncQueue()
  res.end()
})

// Async Queue requests concurrency 3
router.get('/async-queue-fast', async function (req, res) {
  asyncQueueFast()
  res.end()
})

// Async Waterfall Requests
router.get('/async-waterfall', function (req, res) {
  asyncWaterfall()
  res.end()
})

// Async Series Requests
router.get('/async-series', function (req, res) {
  asyncSeries()
  res.end()
})

// Async Retry with exponential backoff
router.get('/async-retry', function (req, res) {
  asyncRetry()
  res.end()
})

// retru endpoint to for /async-retry
router.get('/retry-endpoint', function (req, res) {
  const randomBoolean = () => Math.random() >= 0.5
  if (randomBoolean()) {
    res.send({ status: 200, retry: 'not needed' })
  } else {
    res.sendStatus(429)
  }
})

module.exports = router
