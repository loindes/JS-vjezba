/****************************
*FUNKCIJA PROMIJENI POZDRAV*
****************************/ 

//varijabla za uvjet da se ne resetiraju unosi klikanjem buttona
var clicked = false;

function promijeniPozdrav() {
    if (!clicked) {
    //DOHVAĆA IME 
    let x = document.querySelector(".ime").value;    

    //DOHVAĆA PREZIME + DATIV  
    let y = document.querySelector(".prezime").value;
    y = y + "a";
    
    // PAR-NEPAR PROVJERA
    let q = document.querySelector(".broj").value;
    if (q%2 == 0) {
        var i= "PARAN broj";
    } else {
        var i = "NEPARAN broj";
      }  

    //ISPIS PRVE REČENICE 
    var ispis = document.querySelector(".ispis");
    
    ispis.innerHTML = `Gospodine ${x}, ponosu ${y} gornjih, našeg slavnog kraja! <br>\
                             Unijeli ste ${i}, a od JS-a ljude boli glava"`
    
    //KREIRA I UBACUJE div CONTAINER u p.ispis ZA 2 "HAIKUA"
    var container = document.createElement("DIV");

    container.id = "continerIspisa";
    ispis.appendChild(container);
   
    //KREIRA PRVI HAIKU p 
    var haiku = document.createElement("P");   
   
    haiku.id = "haiku";           
    haiku.innerHTML = 'Roses are red, <br>\
                      Violets are blue, <br> \
                   Unexpected "\{" at line 32!';    

    //KREIRA DRUGI HAIKU p I UBACUJE IH OBA U div CONTAINER
    var haiku2 = document.createElement("P");   

    haiku2.id = "haiku2";           
    haiku2.innerHTML = "Another error. <br>\
                   Hours of coding go by. <br> \
                     Compile and repeat.";    

    container.append(haiku, haiku2);

    //DISPLAY:NONE > DISPLAY:BLOCK ZA p.ispis
    document.querySelector(".ispis").style.display = "block";

     //STIL ZA CURSOR NA BUTTONU 
    document.querySelector(".submitForm").style.cursor = "default";  

    clicked = true;
    }
}


/*********************************
*FUNKCIJA ISPIŠI ČLANOVE IZ FORME*
**********************************/

//varijabla za uvjet da se ne resetiraju unosi klikanjem buttona
var clicked2 = false;

function unosClanova (sviClanovi) {     
    if (!clicked2) {
       //KUPLJENJE ITEMA IZ FORME U HTMLcollection I KREIRANJE ul>li*i ITEMA U for PETLJI
       var colection = document.getElementsByClassName("clan");
       var ul = document.createElement('UL');
       console.log(colection);

       ul.innerText ="Unijeli ste:";
       var div = document.querySelector(".ispisDiv")
       div.appendChild(ul);

       /*PETLJA DA SE SVAKOM ITEMU IZ HTMLcollectiona UZME .value VRIJEDNOST 
       I UBACI U NOVOKREIRANI li ITEM*/
        for (let i = 0; i < colection.length; i++) {
            let sviCLanovi = colection[i].value;
            console.log(sviCLanovi);
            
            //KREIRANJE li ITEMA
            let li = document.createElement('LI');
            ul.appendChild(li);

            //DODIJELJIVANJE .value VRIJEDNOSTI U li ITEM
            li.innerText = i + 1 + ". " + sviCLanovi;
        }

      //ISPIS REČENICE 1 i 1 nisu 2 već 11.
      var a = "1" + 1;
      document.querySelector(".jedanIjedan").innerHTML = `A jedan i jedan nisu 2 <br>\
                                                             već ${a}!!! ;))`;
       //STIL ZA CURSOR NA BUTTONU
      document.querySelector(".clanoviBtn").style.cssText = "cursor: default";
      
      clicked2 = true;
    }
}    
 


//polyfill for the append(haiku, haiku2) method in Internet Explorer 9 and higher
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