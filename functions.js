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

// example synchronous requests
const synchronousExample = () => {
  setTimeout(() => {
    fetch(links[0])
      .then(res => res.json())
      .then(json => console.log(json.name))
  }, 2000)

  setTimeout(() => {
    fetch(links[1])
      .then(res => res.json())
      .then(json => console.log(json.name))
  }, 3000)

  setTimeout(() => {
    fetch(links[2])
      .then(res => res.json())
      .then(json => console.log(json.name))
  }, 4000)

  setTimeout(() => {
    fetch(links[3])
      .then(res => res.json())
      .then(json => console.log(json.name))
  }, 10000)

  setTimeout(() => {
    fetch(links[4])
      .then(res => res.json())
      .then(json => console.log(json.name))
  }, 4000)
}

// example parallel requests
const asyncParallel = () => {
  async.parallel(fetchArr, (err, results) => {
    console.log(results)
    return results
  })
}

// example queuing with concurrency 1
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
  })
}

// example queing with concurrency 3
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
  })
}

// example waterfall requests
const asyncWaterfall = async () => {
  async.waterfall(waterfallArr, function (err, result) {
    console.log('Waterfall List:', result)
    if (err) {
      console.log(err)
    }
  })
}

// example series requests
const asyncSeries = async () => {
  async.series(seriesArr, function (err, results) {
    if (err) throw err
    console.log('Series List:', results)
  })
}

// example retry with exponential back off
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
