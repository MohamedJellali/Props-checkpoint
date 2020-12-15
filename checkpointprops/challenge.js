//task1

var tab =[-2,1,4];
console.log(tab);

sum = x => x+2;
console.log(sum(5));
function summ (x){ return x+2 ;}
console.log(summ(2));

var y= sum(tab[0]);
var z= sum(tab[2]);
console.log(y);
console.log(z);

//task2

function jourDeLaSemaine(m){ 
    const jour=["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    if(m>-1 && m<7){
       return jour[m];
    }
    else {
      return "jour introuvable";
    }
  }
  console.log(jourDeLaSemaine(5));
  console.log(jourDeLaSemaine(50));

  //task3

  
function drinkWater (h){
    return Math.floor(h/2);
    }

    drink = h => Math.floor(h/2);

    console.log(drinkWater(9));


    //task4

    Greeting = name => name=="Johnny" ? "hello , my love" : "hello "+name;

console.log(Greeting("Johnny"));


// task 5

function inverse (Num){
    var arr= Num.toString().split('').reverse();
    var arr2=[];
    for(let i=0; i<arr.length ; i++){
      arr2[i]=parseInt(arr[i])
    }
    return arr2 ;
  }
  
  console.log(inverse(56521));

  //task 6

  function sheep (n)
{var str="";
for (let i=1; i<n+1;i++){
str += i + " sheep..."
}
return str;
}
 console.log(sheep(5));


 const tCase = (str) => {
    return str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
  };
  
  console.log(tCase("hello dhd"));


