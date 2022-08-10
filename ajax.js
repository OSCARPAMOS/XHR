(() => {

const ajax1 = new XMLHttpRequest();
 $insertar = document.getElementById("insertar");
 $fragmento = document.createDocumentFragment();

ajax1.addEventListener("readystatechange", (e) => {
      
      if (ajax1.readyState !== 4) {return};
      
      let salidajson = JSON.parse (ajax1.responseText);

      salidajson.forEach( el => {
        const $li = document.createElement("li");
        $li.innerHTML = el.id;
        $fragmento.appendChild($li);


      })

      $insertar.appendChild($fragmento);

});

ajax1.open ("GET", "https://jsonplaceholder.typicode.com/posts");

ajax1.send();
});



(() => {

d

})


