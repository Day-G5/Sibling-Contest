let users;
let account;

async function loadData() {
    const response = await fetch('users.json');
    const data = await response.json();

    users = data;
}

const body = document.querySelector('body');

class Video {
    constructor(title, description, thumbnail, video) {
        this.container = document.createElement('div');
        this.container.id = 'video_container';
        this.container.classList.add('glass-effect');

        this.addButton = document.createElement('div');
        this.addButton.id = 'add_button';

        this.addButton.addEventListener('mouseover', () => {
            this.addButton.classList.add('glow-effect');
        });

        this.addButton.addEventListener('mouseleave', () => {
            this.addButton.classList.remove('glow-effect');
        });

        this.container.addEventListener('mousemove', (e) => {
            console.log(e.target)
        })

        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.video = video;
        
        this.container.appendChild(this.addButton);

        body.appendChild(this.container);
    }
}

function createLogin () {
    const form = document.createElement('form');
    form.id = 'login_form';

    const form_overlay = document.createElement('div');
    form_overlay.id = 'form_overlay';

    form.appendChild(form_overlay);

    const username = document.createElement('input');
    username.type = 'username';
    username.name = 'username';
    username.placeholder = 'Username';
    username.required = true;
    username.id = 'username';
    form.appendChild(username);

    const password = document.createElement('input');
    password.type = 'password';
    password.name = 'password';
    password.placeholder = 'Password';
    // password.required = true;
    password.id =  'password';
    form.appendChild(password);
    
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Login';
    form.appendChild(submit);
    body.appendChild(form);

    const login_overlay = document.createElement('div');
    login_overlay.id = 'login_overlay';
    login_overlay.classList.add('glass-effect');
    body.appendChild(login_overlay);

    const login_decor1 = document.createElement('div');
    login_decor1.id = 'login_decor1';
    login_decor1.classList.add('glow-effect')
    body.appendChild(login_decor1);

    const login_decor2 = document.createElement('div');
    login_decor2.id = 'login_decor2';
    login_decor2.classList.add('glow-effect')
    body.appendChild(login_decor2);

    const login_decor3 = document.createElement('div');
    login_decor3.id = 'login_decor3';
    login_decor3.classList.add('glow-effect');
    login_decor3.setAttribute('anchor', 'form_overlay');
    body.appendChild(login_decor3);

    const login_decor4 = document.createElement('div');
    login_decor4.id = 'login_decor4';
    login_decor4.classList.add('glow-effect')
    body.appendChild(login_decor4);

    const login_decor5 = document.createElement('div');
    login_decor5.id = 'login_decor5';
    login_decor5.classList.add('glow-effect')
    body.appendChild(login_decor5);

    const login_decor6 = document.createElement('div');
    login_decor6.id = 'login_decor6';
    login_decor6.classList.add('glow-effect')
    body.appendChild(login_decor6);

    function removeLogin() {
        form.style.top = 100 + '%';
        form.style.transform = 'translate(-50%, 0%)';

        setTimeout(() => {
            form.remove();
            login_overlay.remove();
            loadVideos();
        }, 500);
    }

    function loadVideos () {
        users.account = [];
        users.account.push(new Video('Video 1', 'This is the first video', 'https://picsum.photos/200', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
    }

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if(users.hasOwnProperty(username.value.toLowerCase())){
            if(users[username.value.toLowerCase()].password === password.value){
                account = username.value.toLowerCase();
                removeLogin();
            } else {
                alert('wrong password');
            }
        } else {
            alert('user not found');
        }

    })
}

loadData().then(createLogin).then(console.log('done'));

document.addEventListener("mousemove", (e) => {
    if(e.target.id === 'add_button') {
        console.log(e.target);
    }
})