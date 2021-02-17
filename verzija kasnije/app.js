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
    document.querySelector(".ispis").style.cssText = "text-align: center";
    //document.querySelector(".forma1").style.cssText = "margin: auto auto auto 2em";
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
    document.getElementById("continerIspisa").style.cssText = "padding:1em";

    //KREIRA PRVI HAIKU PARAGRAF
    var haiku = document.createElement("P");   
    haiku.id = "haiku";     
          
    haiku.innerHTML = 'Roses are red, <br>\
                      Violets are blue, <br> \
                   Unexpected "\{" at line 32!';    
    document.getElementById("continerIspisa").appendChild(haiku);
    document.getElementById("haiku").style.cssText = "color:brown; display:inline-block; margin-right:3em";


    //KREIRA DRUGI HAIKU PARAGRAF
    var haiku2 = document.createElement("P");   
    haiku2.id = "haiku2";           
    haiku2.innerHTML = "Another error. <br>\
                   Hours of coding go by. <br> \
                     Compile and repeat.";    
    document.getElementById("continerIspisa").appendChild(haiku2);
    document.getElementById("haiku2").style.cssText = "color:darkblue; display:inline-block; margin-left:3em";

}

//DRUGI ZADATAK
/**
 * function ispisClanova() {
    let clan1 = document.getElementById("clan1").value;
 */


    //let uneseniClan = document.getElementById("clan").value;
    
   


    function unosClanova (sviClanovi) {
        var sviCLanovi = [];  //"", "", "", "", ""
        
        var clan1 = document.querySelector(".clan1").value;
        var clan2 = document.querySelector(".clan2").value;
        var clan3 = document.querySelector(".clan3").value;
        var clan4 = document.querySelector(".clan4").value;
        var clan5 = document.querySelector(".clan5").value;
        
        sviCLanovi.push(clan1, clan2, clan3, clan4, clan5);

       /**
        *  document.querySelector(".li1").innerHTML = sviCLanovi[0];
        document.querySelector(".li2").innerHTML = sviCLanovi[1];
        document.querySelector(".li3").innerHTML = sviCLanovi[2];
        document.querySelector(".li4").innerHTML = sviCLanovi[3];
        document.querySelector(".li5").innerHTML = sviCLanovi[4];
        */

        document.querySelector("ol").style.visibility = "visible";

        
        /**
         * sviCLanovi.forEach(function(index) {
            console.log(index);
        });
         */

         
        sviCLanovi.forEach(myFunction1);
        function myFunction1(item, index) {
            document.getElementById("li").innerHTML += index + ":" + item + "<br>"; 

          }  
/*
          let profile = [];
          document.querySelectorAll("#drugaForma").forEach(f => {
            let obj = {};
            f.querySelectorAll(".clan").forEach(ele => obj[ele.name] = ele.value || "");
            profile.push(obj)
          })

        /**
         * let profile = [];
        document.querySelectorAll("form").forEach(f => {
            let obj = {};
            f.querySelectorAll("input").forEach(ele => obj[ele.name] = ele.value || "");
            profile.push(obj)
        })*/
            console.log(profile);
        
         
        
        /**
         * function myFunction1(index) {
            txt = txt + index;
        }

        console.log(txt);*/
         
        
        

        //UNOS TEKSTA U p.jedanIjedan 
        //var p = document.createElement("P");
        //p.id = "jedanJedan";

        var a = "1";
        var b = 1;

        document.querySelector(".jedanIjedan").innerText = `Jedan i jedan nisu 2 već ${a}${b}!!!`;

        //p.innerHTML = "Jedan i jedan nisu 2 već " + a + b;    



        //document.getElementById("ispisDiv2").appendChild(p);
        //document.getElementById("jedanJedan").style.cssText = "color:red; background-color:white"
        
      


        /**
         * for (i=0;1<5;i++) {
            var x = clan[i];
            var y = li[i];

            document.getElementById(y).innerHTML = sviCLanovi[i];
        }
         */


        


       /**
        *  sviCLanovi.forEach(function kreirajListu () {
            var listItem = document.createElement("LI").value;
            document.getElementById("ispisDiv").appendChild(listItem);
            });
        */


        //haiku.id = "haiku";

        
        
        //var vrijednost = document.getElementById("clan1").innerHTML.value; sviClanovi.push(vrijednost);

            
        /**
         * for (let i = 0; i < 5; i++) {
            var vrijednostClana = document.getElementById("clan").innerHTML.value;
            sviClanovi.push(vrijednostClana);
        }
         */
        
        //console.log(sviCLanovi);
    }

    


/**
 * 
    for (var i = 1; i <= 5; i++) {
        let x = document.getElementById("clan" + i).value;
        consolee.log(i + x);
      }
 */



    /**
     * //ISPIS ČLANOVU U LISTI ISPOD FORME
    var list = document.createElement("UL");
    var listItem = document.createElement("LI");

    forEach

    document.getElementById("ispisDiv").appendChild(list);

    list.id = "listContainr"


    document.getElementById("listContainr").appendChild(listItem);
}

     */



 



/*
let clanovi = [];

const upisClanova = (ev) => {
    ev.preventDefault();

}

document.getElementById("clanoviBtn").addEventListener("clanovi", upisClanova)

*/

/*
var x = [];
$('[name="clanoviForm"]').each(function(index, inputField) {
    x.push($(inputField).val());
});
console.log(x);
 */

    
/*

var sviClanovi = [];

    for (var i = 1; i < 5; i++) {
        document.getElementById(clan + i).innerHTML = i;
      }
    
    document.getElementById("clan");
     
*/
    /*
    var clanovi = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var i;
    for (i = 0; i < clanovi.length; i++) {
        text += clanovi[i] + "<br>";
      }
      document.getElementById("demo").innerHTML = text;
      */





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