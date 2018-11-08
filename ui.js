class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class = "row">
                    <div class = col-md-3>
                        <img class= "img-fluid" src="${user.avatar_url}" alt="">
                        <a href="${user.html_url}" target="_blanck" class = "btn btn-primary btn-block mb-3 mt-3">View Profile</a>
                    </div>
                        <div class = col-md-9>
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Public Followers: ${user.followers}</span>
                            <span class="badge badge-info">Public Folowing: ${user.following}</span>
                            <ul class = "list-group mt-5">
                                <li class = "list-group-item">Company: ${user.company}</li>
                                <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                                <li class = "list-group-item">Location: ${user.location}</li>
                                <li class = "list-group-item">Member Since: ${user.created_at}</li>
                            </ul>    
                        </div>
                    <br><br> 
                </div>
            </div>
            <h3 class = page-heading mb-3>Latest Repos</h3>
            <div id = repos></div>
        `;
    }

    showRepos(repos){
        var output = ``;

        repos.forEach(repo =>{
            output += `
                <div class = "card card-body mb-2">
                    <div class = "row">
                        <div class = "col-md-6">
                            <a href =${repo.html_url} target = "_blank">${repo.name}</a>    
                        </div>
                        <div class = "col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, allertType){
        this.clearAlert();
        var alert = document.createElement('div');
        alert.appendChild(document.createTextNode(message));
        alert.className = `alert ${allertType}`;
        document.querySelector('.searchContainer').insertBefore(alert, document.querySelector('.searh'));
        setTimeout(() => this.clearAlert(), 3000);
    }
    clearAlert(){
        var alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
}