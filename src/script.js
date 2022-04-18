/** Add any JavaScript you need to this file. */

let bag = document.getElementById('nbag');
bag.onclick = function openBag() {
  document.getElementById('cClutch').style.display = 'none';
  document.getElementById('cWallet').style.display = 'none';
  document.getElementById('cAcc').style.display = 'none';
  document.getElementById('cBag').style.display = 'block';
};

let clutch = document.getElementById('nclutch');
clutch.onclick = function openClutch() {
  document.getElementById('cBag').style.display = 'none';
  document.getElementById('cWallet').style.display = 'none';
  document.getElementById('cAcc').style.display = 'none';
  document.getElementById('cClutch').style.display = 'block';
};

let wallet = document.getElementById('nwallet');
wallet.onclick = function openWallet() {
  document.getElementById('cBag').style.display = 'none';
  document.getElementById('cClutch').style.display = 'none';
  document.getElementById('cAcc').style.display = 'none';
  document.getElementById('cWallet').style.display = 'block';
};

let acc = document.getElementById('nacc');
acc.onclick = function openAcc() {
  document.getElementById('cWallet').style.display = 'none';
  document.getElementById('cClutch').style.display = 'none';
  document.getElementById('cBag').style.display = 'none';
  document.getElementById('cAcc').style.display = 'block';
};

let all = document.getElementById('nall');
all.onclick = function openAll() {
  if (
    document.getElementById('cWallet').style.display === 'none' ||
    document.getElementById('cWallet').style.display === 'none' ||
    document.getElementById('cAcc').style.display === 'none'
  ) {
    document.getElementById('cWallet').style.display = 'block';
    document.getElementById('cClutch').style.display = 'block';
    document.getElementById('cAcc').style.display = 'block';
    document.getElementById('cBag').style.display = 'block';
  } else {
    document.getElementsByClassName('category').style.display = 'block';
  }
};

let openB = document.getElementById('openB');
openB.onclick = function openForm() {
  document.getElementById('myForm').style.display = 'block';
};

let closeB = document.getElementById('btnC');
closeB.onclick = function closeForm() {
  document.getElementById('myForm').style.display = 'none';
};

function openProblem(value, id) {
  if (value === 'problem') {
    document.getElementById(id).style.display = 'inline-block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}
