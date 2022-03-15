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

export function sortPostsByDate(posts) {
  posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  return JSON.parse(JSON.stringify(posts))
}

export function filterPosts(filter, postFilterKeys) {
  const filterExp = new RegExp(filter, 'i')
  return filterExp.test(postFilterKeys)
}

export function sortSeriesPostsByLatest(posts) {
  posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  return JSON.parse(JSON.stringify(posts))
}

export function sortSeriesPostsByNumberOrder(posts) {
  return posts.sort(
    (postA, postB) => postA.numberInSeries - postB.numberInSeries
  )
}
