class GitHub{
    constructor(){
        this.clientID = 'c0978dd57ae052137e8b';
        this.clientSecret = '8619f243a0e14e1955fad318c276fa36924e7c6b';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }
    async getUser(user){
        const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        const profileData = await profileResponce.json();
        const reposResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        const repos = await reposResponce.json();
        return{
            profile: profileData,
            repos: repos
        }
    }
}