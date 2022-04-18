// Data for the "HTML Tables" Page

const users = [
  {
    first_name: 'Kaitlin',
    last_name: 'Burns',
    age: 23,
    email: 'kburns99753@usermail.com'
  },
  {
    first_name: 'Joshua',
    last_name: 'Feir',
    age: 31,
    email: 'josh319726@usermail.com'
  },
  {
    first_name: 'Stephen',
    last_name: 'Shaw',
    age: 28,
    email: 'steve.shaw47628@usermail.com'
  },
  {
    first_name: 'Timothy',
    last_name: 'McAlpine',
    age: 37,
    email: 'Timbo72469@usermail.com'
  },
  {
    first_name: 'Sarah',
    last_name: 'Connor',
    age: 19,
    email: 'SarahC6320@usermail.com'
  }
];

window.onload = function() {
  let title = ['First Name', 'Last Name', 'Age', 'Email'];
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');

  for (let i = 0; i < title.length; i++) {
    let th = document.createElement('th');
    th.style.border = '1.5px solid';
    th.innerText = title[i];
    tr.appendChild(th);
  }

  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');

  for (let j = 0; j < users.length; j++) {
    tr = document.createElement('tr');
    let td = document.createElement('td');
    td = document.createElement('td');
    td.style.border = '1px solid';
    td.innerText = users[j].first_name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.style.border = '1px solid';
    td.innerText = users[j].last_name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.style.border = '1px solid';
    td.innerText = users[j].age;
    tr.appendChild(td);

    td = document.createElement('td');
    td.style.border = '1px solid';
    let a = document.createElement('a');
    a.href = 'mailto:' + users[j].email;
    a.innerText = users[j].email;
    td.appendChild(a);
    tr.appendChild(td);

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  let userTable = document.querySelector('#table');
  userTable.appendChild(table);
};
