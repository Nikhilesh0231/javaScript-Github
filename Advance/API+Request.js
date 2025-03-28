
const xhr = new XMLHttpRequest();
const url = "https://api.github.com/users/Nikhilesh0231";
xhr.open("GET",url, true);  

// console.log(xhr.readyState);

let photoUrl = "";
let userName = "";
let github = "";
xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState ===4){
        console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.login);
        photoUrl = data.avatar_url;
        console.log(photoUrl);
        userName = data.name;
        console.log(userName);
        github = data.html_url;
        console.log(github);
    }
}
    

document.getElementById("avatar").innerHTML = `<img src="${photoUrl}" alt="Avatar" />`;
xhr.send();