const async = require('async')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const links = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4',
  'https://jsonplaceholder.typicode.com/users/5'
]

const fetchArr = [
  function (callback) {
    setTimeout(() => {
      fetch(links[0])
        .then(res => res.json())
        .then(json => callback(null, json.name))
    }, 1000)
  },
  function (callback) {
    setTimeout(() => {
      fetch(links[1])
        .then(res => res.json())
        .then(json => callback(null, json.name))
    }, 1000)
  },
  function (callback) {
    setTimeout(() => {
      fetch(links[2])
        .then(res => res.json())
        .then(json => callback(null, json.name))
    }, 2000)
  },
  function (callback) {
    setTimeout(() => {
      fetch(links[3])
        .then(res => res.json())
        .then(json => callback(null, json.name))
    }, 2000)
  },
  function (callback) {
    setTimeout(() => {
      fetch(links[4])
        .then(res => res.json())
        .then(json => callback(null, json.name))
    }, 2000)
  }
]

const waterfallArr = [
  function (callback) {
    fetch(links[0])
      .then(res => res.json())
      .then(json => {
        let arr = []
        arr.push(json.name)
        callback(null, arr)
      })
  },
  function (arg1, callback) {
    console.log('adding name:', arg1)
    fetch(links[1])
      .then(res => res.json())
      .then(json => {
        arg1.push(json.name)
        callback(null, arg1)
      })
  },
  function (arg1, callback) {
    console.log('adding name:', arg1)
    fetch(links[2])
      .then(res => res.json())
      .then(json => {
        arg1.push(json.name)
        callback(null, arg1)
      })
  },
  function (arg1, callback) {
    console.log('adding name:', arg1)
    fetch(links[3])
      .then(res => res.json())
      .then(json => {
        arg1.push(json.name)
        console.log('adding name:', arg1)
        callback(null, arg1)
      })
  }
]

const seriesArr = [
  function (callback) {
    fetch(links[0])
      .then(res => res.json())
      .then(json => {
        callback(null, json.name)
      })
  },
  function (callback) {
    fetch(links[1])
      .then(res => res.json())
      .then(json => {
        callback(null, json.name)
      })
  },
  function (callback) {
    fetch(links[2])
      .then(res => res.json())
      .then(json => {
        callback(null, json.name)
      })
  },
  function (callback) {
    fetch(links[3])
      .then(res => res.json())
      .then(json => {
        callback(null, json.name)
      })
  }
]

/* example synchronous requests
 Synchronous requests retrieving back a name
 setTimeout is used to simulate varying response times
*/
const synchronousExample = () => {
  setTimeout(() => {
    fetch(links[0])
      .then(res => res.json())
      .then(json => {
        console.log('Request 1')
        console.log(json.name)
        console.log('------------')
      })
  }, 2000)

  setTimeout(() => {
    fetch(links[1])
      .then(res => res.json())
      .then(json => {
        console.log('Request 2')
        console.log(json.name)
        console.log('------------')
      })
  }, 3000)

  setTimeout(() => {
    fetch(links[2])
      .then(res => res.json())
      .then(json => {
        console.log('Request 3')
        console.log(json.name)
        console.log('------------')
      })
  }, 4000)

  setTimeout(() => {
    fetch(links[3])
      .then(res => res.json())
      .then(json => {
        console.log('Request 4')
        console.log(json.name)
        console.log('------------')
      })
  }, 10000)

  setTimeout(() => {
    fetch(links[4])
      .then(res => res.json())
      .then(json => {
        console.log('Request 5')
        console.log(json.name)
        console.log('------------')
      })
  }, 4000)
}

/* example parallel requests
 executes an array of fetch calls in parallel 
 logging out the results of each task
*/
const asyncParallel = () => {
  console.log('Parallel Requests')
  async.parallel(fetchArr, (err, results) => {
    console.log(results)
    console.log('-----------')
    return results
  })
}

/* example async queue with concurrency of 1
 push individual tasks to the queue 

 unshift is used to prioritise a task to the front of the queue

 push array of tasks to be requested "batches" 
*/

const asyncQueue = async () => {
  const concurrency = 1
  let userInfo = []
  const fetchQueue = async.queue((task, callback) => {
    console.log('Processing Task ' + task)
    fetch(task)
      .then(response => response.json())
      .then(json => {
        userInfo.push(json)
      })
      .catch(err => callback(err, null))

    // Simulate processing
    setTimeout(() => {
      // Number of elements to be processed.
      const length = fetchQueue.length()
      callback(null, { task, length })
    }, 1000)
  }, concurrency)

  fetchQueue.unshift(links[1], err => {
    console.log('finished task one')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links[0], err => {
    console.log('finished task two')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links[2], err => {
    console.log('finished task three')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links.slice(0, 3), err => {
    console.log('list of tasks 4')
    if (err) {
      throw err
    }
  })

  fetchQueue.drain(() => {
    console.log('all items have been processed')
    console.log('-------------------------------')
  })
}

/* example async queue with concurrency of 3

 processes 3 tasks at the same time, 
 adding one back to the queue as the subsequent task is finished

 unshift is used to prioritise a task to the front of the queue

 push array of tasks to be requested "batches" 
*/

const asyncQueueFast = async () => {
  const concurrency = 3
  let userInfo = []
  const fetchQueue = async.queue((task, callback) => {
    console.log('Processing Task ' + task)
    fetch(task)
      .then(response => response.json())
      .then(json => {
        userInfo.push(json)
      })
      .catch(err => console.log('an error has occurred please try again'))

    // Simulate processing
    setTimeout(() => {
      // Number of elements to be processed.
      const length = fetchQueue.length()
      callback(null, { task, length })
    }, 1000)
  }, concurrency)

  fetchQueue.unshift(links[1], err => {
    console.log('finished task one')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links[0], err => {
    console.log('finished task two')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links[2], err => {
    console.log('finished task three')
    if (err) {
      throw err
    }
  })

  fetchQueue.push(links.slice(0, 3), err => {
    console.log('finishing batch tasks')
    if (err) {
      throw err
    }
  })

  fetchQueue.drain(() => {
    console.log('all items have been processed')
    console.log('-------------------------------')
  })
}

/* example waterfall request
  push an array of functions
  each functions results are passed to the next function
  once array of functions are exectued,
  the final result is sent to the callback
*/

const asyncWaterfall = async () => {
  console.log('Waterfall Requests')
  async.waterfall(waterfallArr, function (err, result) {
    console.log('Waterfall List:', result)
    if (err) {
      console.log(err)
    }
  })
}

/* example series request
  push an array of functions

  each function runs in order, but are independant of each other
  each functions results are passed to the callback

  the final result is each functions results in an []
*/

const asyncSeries = async () => {
  console.log('Series Requests')
  async.series(seriesArr, function (err, results) {
    if (err) throw err
    console.log('Series List:', results)
  })
}

/* example retry request with exponential back off
  attempt to reach a flakey endpoint
  specify the number of times to retry and the interval in which to retry

  the retry will attempt to get a successful task until the limit or a success is reached
*/

const asyncRetry = async () => {
  console.log(
    'Trying flakey endpoint: http://localhost:5500/requests/retry-endpoint'
  )
  async.retry(
    {
      times: 6,
      interval: function (retryCount) {
        return 50 * Math.pow(2, retryCount)
      }
    },
    callback => {
      fetch('http://localhost:5500/requests/retry-endpoint').then(data => {
        if (data.status == 429) {
          console.log('error could not reach, trying again')
        }
        callback(data.status)
      })
    },
    function (status) {
      if (status !== 200) {
        console.log(`giving up err: ${status}`)
        return status
      }
      console.log(`made connection: ${status}`)
    }
  )
}

module.exports = {
  synchronousExample,
  asyncParallel,
  asyncQueue,
  asyncQueueFast,
  asyncWaterfall,
  asyncSeries,
  asyncRetry
}
