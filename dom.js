//SINGLE SELECTORES

//1. getElementById

/* using single selector document.getElementByID 
to select text*/






/* Syntax: document.getElementById("ID")

 //color of that element will be changed to red.*/

  
 //2. Select by query selector (querySelector)
 //Syntax
 /*
 Syntax:
- document.querySelector(".class")
- document.querySelector("#Id")
- document.querySelector("tag")
 */

 document.querySelector(".selectors").style.color="green";


 //multiple selector
/*
 let items = document.getElementsByClassName("class");
console.log(items)  // return the list of items
items[3].textContent= "hello world"; // text changed
items[3].style.color = "red"; // color changed to red*/


/*
let href = document.getElementById('home');
console.log(href);

let links = document.getElementsByClassName('link'); 
console.log(links);

let link = document.getElementsByTagName('a');
console.log(link);


let select = document.querySelector('a');  
//The above code will select the first anchor that the
// querySelector method encounters in the DOM.
 
//You could also use the querySelector to select the elements based on their class names.
let linkMa = document.querySelector('.link');  
//This will select the first anchor with class name as link from the DOM
 
//We can also select DOM elements based on their HTML attributes.
let linkSo = document.querySelector('a[href="./about.html"]');  
//This will select the anchor tag with a href attribute that 
//points to the about.html page


//For the above code, both the following methods will return all the anchor tag elements from the DOM enacapsulated inside a NodeList object.
let anchors = document.querySelectorAll('a');   
let linkSelect = document.querySelectorAll('.link'); 

*/


//EXERCISE


let doc = document.getElementsByTagName('h1');
console.log(doc);


//Using [0] as index, we can access the first element in the 
//heading which is <h1 class="heading">DOM Manipulation</h1>

let dom = document.getElementsByTagName('h1')[0];
console.log(dom);


//document.getElementById("item").style.color="red";

let list = document.getElementsByTagName('li');
console.log(list);

let listFirst = document.getElementsByTagName('li')[1];
console.log(listFirst);


//getElementsByClassName

let heading = document.getElementsByClassName('heading');
console.log(heading);

let headingFirst = document.getElementsByClassName('heading')[0]
console.log(headingFirst);

let selector = document.getElementsByClassName('selectors')
console.log(selector);


let selectorFirst = document.getElementsByClassName('selectors')[1]
console.log(selectorFirst);



//getElementById
//returns only the first matched element while ignoring the remaining.
let tagNameId = document.getElementsByTagName('li');
console.log(tagNameId);

let id = document.getElementById('item').style.color = 'red';
console.log(id);


// querySelector
//This one returns the first element that matches the 
//specified CSS selector in the document. 
//Remaining elements are ignored.

let query = document.querySelector('li');
console.log(query);

let querySec = document.querySelector('.heading')
console.log(querySec);

let item = document.querySelector('#item')
console.log(item);

/*
Note that you have to use CSS selectors and not normal 
HTML selectors as a parameter. document.querySelector('.className')
 is valid while document.querySelector('className') 
 is not valid. So you have to use the format used in 
 CSS selectors.

*/


//querySelectorAll

let queryAll = document.querySelectorAll('.heading')
console.log(queryAll);

let queryId = document.querySelectorAll('#item')
console.log(queryId);

let queryIdFirst = document.querySelectorAll('#item')[2];
console.log(queryIdFirst);

