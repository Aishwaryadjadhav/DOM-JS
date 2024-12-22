// ..............innerHTML method........

// let a = document.body.innerHTML="<h1> hello </h1>"
// console.log(a);

// document.body.innerHTML+="<p>hello world</p>"  //if we want to print element go with concatination

// document.body.innerHTML+="<p>hello world</p>"
// document.body.innerHTML+="       "


// let div = document.createElement("div")
// console.log(div);
// //document.body.append(div)

// div.innerHTML+=`<ol>
//                     <li>hello</li>
//                     <li>hello</li>
//                     <li>hello</li>
                    
//                     </ol>`

// document.body.append(div)
// div.style.border="2px solid"


// ..........creat Element........

// let h1= document.createElement("h1")
// console.log(h1);
// h1.textContent="hello"

// document.body.append(h1)
// h1.onclick=function(){
//     h1.style.border="2px solid blue"

// }



// let h2= document.createElement("h2")
// console.log(h2);
// h2.textContent="hello world"

// document.body.append(h2)
// h2.onclick=function(){
//     h2.style.backgroundColor="red"
// }


/////creat order list example.............................................

let ol=document.createElement("ol")
console.log(ol);
document.body.append(ol)

let li1 = document.createElement("li")
console.log(li1);
ol.append(li1)
li1.textContent="personal details"

let ul = document.createElement("ul")
console.log(ul);

li1.append(ul)

let li11 = document.createElement("li")
console.log(li11);
ul.append(li11)
li11.textContent="abhi"

let li = document.createElement("li")
console.log(li);
ul.append(li)
li.textContent="jadhav"









let li2 = document.createElement("li")
console.log(li2);
ol.append(li2)
li2.textContent="other details"

let ol1 = document.createElement("ol")
console.log(ol1);

li2.append(ol1)



let li23 = document.createElement("li")
console.log(li23);
ol1.append(li23)
li23.textContent="other details"

let aa=document.createElement("ul")
console.log(aa);
li23.append(aa)


let aaa=document.createElement("li")
console.log(aaa);
aa.append(aaa)
aaa.textContent="phno:123456789"

let aaa1=document.createElement("li")
console.log(aaa1);
aa.append(aaa1)
aaa1.textContent="eamil:@123"



let li24 = document.createElement("li")
console.log(li24);
ol1.append(li24)
li24.textContent="abhi(sign)"

let hr = document.createElement("hr")
console.log(hr);
document.body.append(hr)

let hr1 = document.createElement("hr")
console.log(hr1);
document.body.append(hr1)

//creat table...............................


let z=document.createElement("table")
console.log(z);
document.body.append(z)
z.style.border="2px solid"
z.setAttribute


let tr1=document.createElement("tr")
console.log(tr1);
z.append(tr1)


let td11=document.createElement("td")
console.log(td11);
tr1.append(td11)
td11.style.border="2px solid"
td11.textContent="1"

let td12=document.createElement("td")
console.log(td12);
tr1.append(td12)
td12.textContent="2"
td12.style.border="2px solid"


let td13=document.createElement("td")
console.log(td13);
tr1.append(td13)
td13.textContent="3"
td13.style.border="2px solid"

let td14=document.createElement("td")
console.log(td14);
tr1.append(td14)
td14.textContent="4"
td14.style.border="2px solid"


let tr2=document.createElement("tr")
console.log(tr2);
z.append(tr2)

let td21=document.createElement("td")
console.log(td21);
tr2.append(td21)
td21.style.border="2px solid"
td21.textContent="5"

let td22=document.createElement("td")
console.log(td22);
tr2.append(td22)
td22.style.border="2px solid"
td22.textContent="6"

let td23=document.createElement("td")
console.log(td23);
tr2.append(td23)
td23.style.border="2px solid"
td23.textContent="7"

let td24=document.createElement("td")
console.log(td24);
tr2.append(td24)
td24.style.border="2px solid"
td24.textContent="8"


let tr3=document.createElement("tr")
console.log(tr3);
z.append(tr3)


let td31=document.createElement("td")
console.log(td31);
tr3.append(td31)
td31.style.border="2px solid"
td31.textContent="9"

let td32=document.createElement("td")
console.log(td32);
tr3.append(td32)
td32.style.border="2px solid"
td32.textContent="10"

let td33=document.createElement("td")
console.log(td33);
tr3.append(td33)
td33.style.border="2px solid"
td33.textContent="11"

let td34=document.createElement("td")
console.log(td34);
tr3.append(td34)
td34.style.border="2px solid"
td34.textContent="12"

















