require('isomorphic-fetch')

export function getGithubRepos() {
    // https://api.github.com/orgs/websage-team/repos
    return fetch('//api.github.com/orgs/websage-team/repos')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
        .then(function(repos) {
            console.log(repos)
            return repos
        })
        .catch((err) => {
            console.error(err)
            return []
        })
}