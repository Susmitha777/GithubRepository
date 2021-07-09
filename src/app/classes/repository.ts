export class Repository {
    constructor(
        public id: Number,
        public node_id: string,
        public name: string,
        public full_name: owner, // refer to type Availability  below
        public owner:owner,
        public html_url: string,
        public fork: string,
        public url: string,
        public forks_url: string,
        public keys_url: string,
        public collaborators_url: string,
        public teams_url: string,
        public hooks_url: string,
        public issue_events_url: string,
        public events_url: string,
        public assignees_url: string,
        public branches_url: string,
        public tags_url: string,
        public blobs_url: string,
        public git_tags_url: string,
        public git_refs_url: string,
        public trees_url: string,
        public statuses_url: string,
        public languages_url: string,
        public stargazers_url: string,
        public contributors_url: string,
        public subscribers_url: string,
        public subscription_url: string,
        public commits_url: string,
        public git_commits_url: string,
        public comments_url: string,
        public issue_comment_url: string,
        public contents_url: string,
        public compare_url: string,
        public archive_url: string,
        public downloads_url: string,
        public issues_url: string,
        public pulls_url: string,
        public notifications_url: string,
        public releases_url: string,
        public deployments_url: string
        
    ){}
}

export class owner {
    constructor(
        public login: string,
        public id: Number,
        public node_id: string,
        public avatar_url: string,
        public gravatar_id: string,
        public url: string,
        public html_url: string,
        public followers_url: string,
        public following_url: string,
        public gists_url: string,
        public starred_url: string,
        public subscriptions_url: string,
        public organizations_url: string,
        public repos_url: string,
        public events_url: string,
        public received_events_url: string,
        public type: string,
        public site_admin: string
    ){}
}


