/****************
 * PRVI ZADATAK*
 ***************/

//PROMIJENI POZDRAV FUNKCIJA
function promijeniPozdrav() {
    let x = document.querySelector(".ime").value;    

    // DATIV ZA PREZIME
    let z = document.querySelector(".prezime").value;
    let y = z + "a";
    
    // PAR-NEPAR
    let q = document.querySelector(".broj").value;
    if (q%2 == 0) {
        var i= "PARNI ";
    } else {
        var i = "NEPARNI ";
    }
    
    //STIL ZA UBAČENI p I PROMJENA GRID VRIJEDNOSTI ZA div
    document.querySelector(".ispis").style.cssText = "text-align: center; display: block";
    document.querySelector("aside").style.cssText = "margin: 0 auto";


    //ISPIS REČENICE 
    var ispis = document.querySelector(".ispis");
    
    ispis.innerText ="Gospodine " + x + ", ponosu "
    + y + " gornjih, našeg slavnog kraja unijeli ste " + i + "broj.";


    //KREIRA HAIKU CONTAINER
    var container = document.createElement("DIV");
    container.id = "continerIspisa";

    //ubacuje container u .ispis i malo stila
    ispis.appendChild(container);
    document.getElementById("continerIspisa").style.cssText = "padding:0.5em;display:flex;flex-wrap:wrap;justify-content: space-between";
    

    //KREIRA PRVI HAIKU PARAGRAF I UBACUJE GA U .continerIspisa
    var haiku = document.createElement("P");   
    haiku.id = "haiku";     
          
    haiku.innerHTML = 'Roses are red, <br>\
                      Violets are blue, <br> \
                   Unexpected "\{" at line 32!';    
    document.getElementById("continerIspisa").appendChild(haiku);


    //KREIRA DRUGI HAIKU PARAGRAF I UBACUJE GA U .continerIspisa
    var haiku2 = document.createElement("P");   
    haiku2.id = "haiku2";           
    haiku2.innerHTML = "Another error. <br>\
                   Hours of coding go by. <br> \
                     Compile and repeat.";    
    document.getElementById("continerIspisa").appendChild(haiku2);

    //POVEĆANJE max-height ATRIBUTA NA .prviZadatak
    document.querySelector(".prviZadatak").style.cssText = "min-height: 50vh";
}



/****************
 * DRUGI ZADATAK*
 ***************/
var clicked = false;

//ISPIŠI ČLANOVE
function unosClanova (sviClanovi) { 
    if (!clicked) {
    var sviCLanovi = [];  //["", "", "", "", ""]
    var clan1 = document.querySelector(".clan1").value;
    var clan2 = document.querySelector(".clan2").value;
    var clan3 = document.querySelector(".clan3").value;
    var clan4 = document.querySelector(".clan4").value;
    var clan5 = document.querySelector(".clan5").value;
    
    sviCLanovi.push(clan1, clan2, clan3, clan4, clan5);

    //KREIRANJE LISTE ZA ISPIS ČLANOVA
    var ul = document.createElement('ul');
    var div = document.querySelector(".ispisDiv")

    div.appendChild(ul);

    //forEach ZA UNOS SVIH ČLANOVA NIZA U KREIRANI ul
    sviCLanovi.forEach(function (item, index) {       
    let li = document.createElement('li');
    
    ul.id = "listaClanova";
    ul.appendChild(li);

    li.innerHTML += index + 1 + ". " + item;
    });
   
    //UNOS TEKSTA U p.jedanIjedan 
    var a = "1";
    var b = 1;

    document.querySelector(".jedanIjedan").innerText = `Jedan i jedan nisu 2 već ${a}${b}!!!`;
    
    //zaustavljanje višestrukog klikanja
    clicked = true;

    console.log(sviCLanovi);
    }
}    
     

//polyfill for the append() method in Internet Explorer 9 and higher
// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('append')) {
        return;
      }
      Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
  
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
  
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);