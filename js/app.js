// ondragover :funcion 1 previniendo el comportamiento de arrastar un elemento que  no es una  caracteristica comun
window.addEventListener('load', function() {
  var divContainer = document.getElementById('div1');
  var divContainer1 = document.querySelector('.div-1');
  var imgToDrag = document.getElementById('drag1');

  divContainer.addEventListener('drop', dropImg);
  divContainer1.addEventListener('dragover', allowDrop);
  imgToDrag.addEventListener('dragstart', drag);


  function allowDrop(ev) {
    ev.preventDefault();
  }

  // ondragstar:function 2 obteniendo o arrastrando el elemento
  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    // debugger;
  }

  // ondrop:fucntion 3 soltando el elemento

  function dropImg(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    // debugger;
    ev.target.appendChild(document.getElementById(data));
  }
});
