// Allows searching of all posts by weighting each post by matching word as well as extra weight for exact title match
export function searchPosts(posts, query) {
  const queryExp = new RegExp(query.replace(/ /g, '|'), 'gi')
  const queryTitleExp = new RegExp(query, 'i')

  // eslint-disable-next-line array-callback-return
  posts.map((post) => {
    const queryContent = `${post.title} ${post.filterKeys} ${post.excerpt}`
    const queryMatch = queryContent.match(queryExp)
    const queryTitleMatch = queryTitleExp.test(post.title)
    if (!queryMatch) {
      post.queryMatch = 0
    }
    if (queryMatch) {
      post.queryMatch = queryMatch.length
    }
    if (queryTitleMatch) {
      post.queryMatch += 10
    }
  })

  return posts.sort((postA, postB) => postB.queryMatch - postA.queryMatch)
}

// Returns posts sorted by date from most recent
export function sortPostsByDate(posts) {
  posts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  )
  return JSON.parse(JSON.stringify(posts))
}

// Returns posts that have the same filterKeys as the filter
export function filterPosts(filter, postFilterKeys) {
  const filterExp = new RegExp(filter, 'i')
  return filterExp.test(postFilterKeys)
}

// Returns series posts sorted from most recent
export function sortSeriesPostsByLatest(posts) {
  posts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  )
  return JSON.parse(JSON.stringify(posts))
}

// Returns series posts sorted by number in series
export function sortSeriesPostsByNumberOrder(posts) {
  posts.sort((postA, postB) => postA.numberInSeries - postB.numberInSeries)
  return JSON.parse(JSON.stringify(posts))
}
