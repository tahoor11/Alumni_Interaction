$(document).ready(function() {
    $('#button').click(function() {
        $('#loginModal').modal('show');
    });
});

const text = document.getElementById('blog-text');
const submit = document.getElementById('blog-submit');
const blogs = document.getElementById('blogs');
const title = document.getElementById('title');
const author = document.getElementById('author');

submit.addEventListener('click',(event) => {
    event.preventDefault();
    if(text.value !== "") {
        createPost();
    }
    
})

function createPost() {
    let newArticle = document.createElement('article');
    let newTitle = document.createElement('h4');
    let newAuthor = document.createElement('h6');
    let newPara = document.createElement('p');
    let date = new Date();
    timeStamp =  date.toLocaleDateString();

    newTitle.textContent = title.value;
    newAuthor.textContent = author.value + ' -' + timeStamp;
    newPara.textContent = text.value ;


    newTitle.classList.add('card-header','bg-info');
    newPara.classList.add('card-text');
    newAuthor.classList.add('card-subtitle');

    newArticle.appendChild(newTitle);
    newArticle.appendChild(newPara);
    newArticle.appendChild(newAuthor);
    newArticle.classList.add('card','col-5','mb-2','mt-3','ml-2');
    blogs.appendChild(newArticle);
    text.value="";
    title.value="";
    author.value="";
}

const btn = document.getElementById('signupBtn');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

btn.addEventListener('click',(event) =>{
    event.preventDefault();
    if(!name.value && !email.value && !password.value) {
        document.getElementById('error').textContent = 'Please Fill All Details!!!';
    }
    else{
        document.getElementById('error').textContent = ' ';  
        $('#loginModal').modal('hide');    
        alert('Your Account has been added successfully!! \n Your account will be activated shortly');
        document.getElementById('button').classList.add('d-none');
    }
})

const user = document.getElementById('username');
const userPass = document.getElementById('userpassword');
document.getElementById('loginBtn').addEventListener('click',(event) =>{
    event.preventDefault();
    if(!user.value && !userPass.value) {
        document.getElementById('error1').textContent = 'Please Fill All Details!!!';
    }
    else{
        document.getElementById('error1').textContent = ' ';  
        $('#loginModal').modal('hide');    
        document.getElementById('button').classList.add('d-none');
        document.getElementById('loginName').textContent = user.value;
        document.getElementById('loginMsg').classList.remove('d-none');
        user.value="";
        userPass.value="";
    }
})

document.getElementById('signOut').addEventListener('click',() => {
    document.getElementById('loginMsg').classList.add('d-none');
    document.getElementById('button').classList.remove('d-none');
})
