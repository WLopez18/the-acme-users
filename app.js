//https://www.acme-api.com/api/companies
let loadButton = document.querySelector('#loadButton');
let loadRandomButton = document.querySelector('#loadRandomButton');
let loadCompanyBtn = document.querySelector('#loadCompanyName');
let list = document.querySelector('#usersList');
let h1 = document.querySelector('#randomH1');
let companyList = document.querySelector('#companyNames');

loadButton.addEventListener('click', function () {
  loadUsers();
});

loadRandomButton.addEventListener('click', function () {
  loadRandomUser();
});

loadCompanyBtn.addEventListener('click', () => {
  loadCompany();
})

async function loadRandomUser() {
  let response = await fetch('https://www.acme-api.com/api/users/random');
  let user = await response.json();
  randomH1.innerText = user.fullName;
}

async function loadUsers() {
  let response = await fetch('https://www.acme-api.com/api/users');
  let data = await response.json();
  let users = data.users;
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let li = document.createElement('li');
    li.innerText = user.fullName;
    list.appendChild(li);
  }
}

async function loadCompany() {
  let response = await fetch('https://www.acme-api.com/api/companies');
  let data = await response.json();
  for (let key in data) {
    let companies = data[key].name;
    let li = document.createElement('li');
    li.innerText = companies;
    companyList.appendChild(li);
  }
}

