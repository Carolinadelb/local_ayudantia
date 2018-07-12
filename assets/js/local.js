//recuperar datos
//guardar datos
//imprimir datos

window.onload = () => {
  saveData();
  recoverData();
  clearData();
}
function saveData() {
  const btnSave = document.getElementById('save');
  btnSave.addEventListener('click', () =>{
    localStorage.nombre = document.getElementById('first_name').value;
    localStorage.password = document.getElementById('password').value;
  });
}

function recoverData(){
  
  const btnRecover = document.getElementById('recover');
  btnRecover.addEventListener('click', ()=>{
    document.getElementById('datos').innerHTML = localStorage.nombre;
  })
}

function clearData(){
  const btnClear = document.getElementById('clear');
  btnClear.addEventListener('click', ()=>{
    document.getElementById('datos').innerHTML = '';
  })
}