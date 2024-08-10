
let product =[
{img:'product-01.jpg',category:"women",price:25.00,productname:" Shirt"},
{img:'product-02.jpg',category:"women",price:35.45,productname:"Herschel "},
{img:'product-03.jpg',category:"men",price:45.89,productname:"shirt"},
{img:'product-04.jpg',category:"women",price:27.90,productname:"Coat"},
{img:'product-05.jpg',category:"women",price:90.00,productname:"Jumper"},
{img:'product-06.jpg',category:"watch",price:78.90,productname:"Vintage"},
{img:'product-07.jpg',category:"women",price:55.00,productname:"Shirt"},
{img:'product-08.jpg',category:"women",price:89.30,productname:"Printed"},
{img:'product-09.jpg',category:"shoes",price:60.70,productname:"Plimsolls"},
{img:'product-10.jpg',category:"women",price:23.00,productname:"T-Shirt "},
{img:'product-11.jpg',category:"men",price:17.00,productname:"Herschel"},
{img:'product-12.jpg',category:"bag",price:29.00,productname:"Herschel"},
{img:'product-13.jpg',category:"women",price:12.29,productname:"T-Shirt"},
{img:'product-14.jpg',category:"women",price:29.90,productname:"Pretty "},
{img:'product-15.jpg',category:"watch",price:46.90,productname:"Watch"},
{img:'product-16.jpg',category:"women",price:45.29,productname:"Neck"},
];


let add="";
for(let i=0;i<product.length;i++)
{

let image=product.map((p)=> p.img);

let name=product.map((p)=> p.productname);

let price=product.map((p)=> p.price);


add +=  `<div class="card"><div>
        <div class="zoom"><img src=${image[i]} style="width:270px; height:334px;"></div>
        <p>${name[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
        ${price[i]}</span></p>     <a  class="btn" id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;




document.getElementById("container3").innerHTML=add;
	




}










<!-- men -->

document.getElementById("men").addEventListener("click",add1);

function add1(){

let add1="";
let mens=product.filter((v)=>v.category=="men").map((v)=>v.img);
for(let i=0;i<mens.length;i++)
{
 mens=product.filter((v)=>v.category=="men").map((v)=>v.img);
let mens1=product.filter((v)=>v.category=="men").map((v)=>v.price);
let mens2=product.filter((v)=>v.category=="men").map((v)=>v.productname);


add1 +=  `<div class="card"><div>
        <div class="zoom"><img src=${mens[i]} style="width:270px; height:334px;"></div>
        <p>${mens2[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
        ${mens1[i]}</span></p>     <a  class="btn" id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add1;

}
}
<!-- men -->





<!--women -->

document.getElementById("women").addEventListener("click",add2);

function add2(){

let add2="";
let womens =product.filter((w)=>w.category=="women").map((w)=>w.img);
for(let i=0;i<womens.length;i++)
{
 womens=product.filter((w)=>w.category=="women").map((w)=>w.img);
let womens1=product.filter((w)=>w.category=="women").map((w)=>w.price);
let womens2=product.filter((w)=>w.category=="women").map((w)=>w.productname);


add2 +=  `<div class="card"><div>
        <div class="zoom"><img src=${womens[i]} style="width:270px; height:334px;"></div>
        <p>${womens2[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
        ${womens1[i]}</span></p>     <a  class="btn" id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add2;

}
}
<!--women -->





<!--shoes -->

document.getElementById("shoes").addEventListener("click",add3);

function add3(){

let add3="";
let shoes =product.filter((s)=>s.category=="shoes").map((s)=>s.img);
for(let i=0;i<shoes.length;i++)
{
 shoes=product.filter((s)=>s.category=="shoes").map((s)=>s.img);
let shoes1=product.filter((s)=>s.category=="shoes").map((s)=>s.price);
let shoes2=product.filter((s)=>s.category=="shoes").map((s)=>s.productname);


add3 +=  `<div class="card"><div>
        <div class="zoom"><img src=${shoes[i]} style="width:270px; height:334px;"></div>
        <p>${shoes2[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
       ${shoes1[i]} </span></p>     <a  class="btn" id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add3;

}
}


<!--shoes -->



<!--watch -->


document.getElementById("watches").addEventListener("click",add4);

function add4(){

let add4="";
let watch =product.filter((a)=>a.category=="watch").map((a)=>a.img);
for(let i=0;i<watch.length;i++)
{
watch =product.filter((a)=>a.category=="watch").map((a)=>a.img);

let watch1=product.filter((a)=>a.category=="watch").map((a)=>a.price);
let watch2=product.filter((a)=>a.category=="watch").map((a)=>a.productname);


add4 +=  `<div class="card"><div>
        <div class="zoom"><img src=${watch[i]} style="width:270px; height:334px;"></div>
        <p>${watch2[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
        ${watch1[i]}</span></p>     <a  class="btn"  id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add4;

}
}

<!--watch -->




<!--bag -->




document.getElementById("bag").addEventListener("click",add5);

function add5(){

let add5="";
let bag =product.filter((b)=>b.category=="bag").map((b)=>b.img);
for(let i=0;i<bag.length;i++)
{
bag =product.filter((b)=>b.category=="bag").map((b)=>b.img);
let bag1=product.filter((b)=>b.category=="bag").map((b)=>b.price);
let bag2=product.filter((b)=>b.category=="bag").map((b)=>b.productname);


add5 +=  `<div class="card"><div>
        <div class="zoom"> <img src=${bag[i]} style="width:270px; height:334px;"></div>
        <p>${bag2[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
       ${bag1[i]} </span></p>     <a  class="btn"id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add5;

}
}
<!--bag -->










<!-- allproducts -->


document.getElementById("all").addEventListener("click",add6);


function add6(){


let add5="";
for(let i=0;i<product.length;i++)
{

let image=product.map((p)=> p.img);

let name=product.map((p)=> p.productname);

let price=product.map((p)=> p.price);


add5 +=  `<div class="card"><div>
        <div  class="zoom"><img src=${image[i]} style="width:270px; height:334px;"></div>
        <p>${name[i]}  <i class="fa-regular fa-heart pad"></i></p><p style="margin-right:170px;">&dollar;<span> 
        ${price[i]}</span></p>     <a  class="btn" id="button" onclick="bb()">Add to cart</a>  
        </div>
        </div> `;



document.getElementById("container3").innerHTML=add5;
}



}

<!-- allproducts -->




// let count =0;

// function bb(){

// count +=1;

// document.getElementById("cart").innerHTML  = count
// }









const addtobtn  = document.getElementsByClassName('btn');

let items=[];
for(let i=0;i<addtobtn.length;i++)
{
addtobtn[i].addEventListener("click",function(e){
if(typeof(Storage) !== 'undefined'){                                                  //setItem

let item ={
              id:i+1,
              name:e.target.parentElement.children[1].textContent,
              price:e.target.parentElement.children[2].children[0].textContent,
               no:1


};

if(JSON.parse(localStorage.getItem('items'))=== null){

items.push(item);
localStorage.setItem('items',JSON.stringify(items));
window.location.reload();
}
else{
const localItems =JSON.parse(localStorage.getItem("items"));
localItems.map(data=>{
if(item.id==data.id){

item.no= data.no+1;

}else{
items.push(data);
}
});
items.push(item);
localStorage.setItem("items",JSON.stringify(items));
window.location.reload();

}


}

});




 const round=document.querySelector('.round'); 
 let no=0;                                                                               //count no
 JSON.parse(localStorage.getItem("items")).map(data=>{

 no=no+data.no; 

 });
 round.innerHTML = no; 

function con(){

let call=document.getElementById("select");
let call1=document.getElementById("sidebar");
let call2=document.getElementById("cart");

if(call2.checked==true)
{
call.style.display="block";
call1.style.display="block";
call.style.marginleft="60rem";
}
else{
	
	call.style.display="none";
call1.style.display="none";
}	



const cartitem=document.querySelector('.cartitem');
let total=0;
const cartitemtable=cartitem.querySelector('table');
let tabledata="";
tabledata+=`<tr><th> S.no </th> <th> Item no </th><th> Item price </th></tr>`;

if(JSON.parse(localStorage.getItem('items'))== null){
let number=[];
tabledata+=`<tr><td colspan="5">no items found</td></tr>`;
document.getElementById("total").innerHTML="$"+".00";                                            //getItem

}
else{


JSON.parse(localStorage.getItem('items')).map(data=>{
total=total+parseFloat(`${data.price}`);
number=[total];
let sum=number.reduce((a,b)=> a+b);
console.log(total);
document.getElementById("total").innerHTML="$"+sum;
tabledata+=`<tr><th>${data.id}</th><th>${data.name}</th><th>${data.price}</th><th><a href="#"onclick="Delete(this)";>Delete</a></th></tr>`;
});


}





cartitemtable.innerHTML=tabledata;


}
}


function Delete(e){
let items=[];
JSON.parse(localStorage.getItem('items')).map(data=>{
if(data.id!=e.parentElement.parentElement.children[0].textContent)
{
items.push(data);                                                                         //Delete item
}
});
localStorage.setItem('items',JSON.stringify(items));
window.location.reload();
}






//nav bar


function check1(){
	
const check=document.getElementById("check");

const checks=document.getElementById("check2");


if(check.checked==true){
	checks.style.left="0px";
}
else{
	
	checks.style.left="-100%";
}

	
	
	
}






