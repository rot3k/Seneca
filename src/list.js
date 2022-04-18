// Data for the "HTML Lists" Page

const fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

const directory = [
  { type: 'file', name: 'file1.txt' },
  { type: 'file', name: 'file2.txt' },
  {
    type: 'directory',
    name: 'HTML Files',
    files: [
      { type: 'file', name: 'file1.html' },
      { type: 'file', name: 'file2.html' }
    ]
  },
  { type: 'file', name: 'file3.txt' },
  {
    type: 'directory',
    name: 'JavaScript Files',
    files: [
      { type: 'file', name: 'file1.js' },
      { type: 'file', name: 'file2.js' },
      { type: 'file', name: 'file3.js' }
    ]
  }
];

window.onload = function() {
  // Fruits
  let ol = document.createElement('ol');
  fruits.forEach(function(item) {
    let li = document.createElement('li');
    li.innerText = item;
    ol.appendChild(li);
  });
  let myFruits = document.querySelector('#fruits');
  myFruits.appendChild(ol);

  // Directory
  let ul = document.createElement('ul');
  directory.forEach(function(item) {
    let li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
    if (item.type === 'directory') {
      let ul2 = document.createElement('ul');
      item.files.forEach(function(item2) {
        let li2 = document.createElement('li');
        li2.innerText = item2.name;
        ul2.appendChild(li2);
      });
      li.appendChild(ul2);
    }
  });
  let myDir = document.querySelector('#directories');
  myDir.appendChild(ul);
};
