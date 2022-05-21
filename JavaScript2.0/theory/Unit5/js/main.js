// document.querySelector('button').onclick = () => {
//   console.log(document.querySelector('#one').value);
//   document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }
// document.querySelector('#one').oninput = () => {
//   console.log(document.querySelector('#one').value);
//   document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => { 
  console.log(document.querySelector('#i2').value);
  let myCheckBox = document.querySelector('#i2');
  console.log(myCheckBox.checked);
  if (myCheckBox.checked) {
    console.log('нажат');
  } else {
    console.log('не нажат');
  }
}

// document.querySelector('#btn-2').onclick = () => {
//   let text = document.querySelector('#two');
//   console.log(text.value);
//   text.value = 'one';
// };

// наша форма
document.querySelector('#btn-3').onclick = (event) => {
  event.preventDefault();
  // let text = document.querySelector('#three');
  // console.log(text.value);
  // text.value = 'Oh';
  let form = document.querySelector('form'); 
  console.log(form);
  console.log(form.elements.three.value);
  console.log(form.elements.four.value);
}