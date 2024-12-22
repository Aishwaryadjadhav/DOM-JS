// console.log(window);
// console.log(typeof window);


// let a = window.prompt("enter your name");
// window.alert("my name is" + a);


console.log(window.document);
console.log(typeof document);

document.write("<h1> hello</h1>")

document.write("hello world")
document.write("hello world")
document.write("hello world")

console.log(document.URL);
console.log(document.doctyp);
console.log(document.head);
console.log(document.baseURI);
console.log(document.body);
console.log(document.title);
document.title="flipkart"

console.log(document.links);




let a = (document.links);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

for(let i=0; i<a.length; i++)
{
    console.log(a[i]);
    a[i].className="demo"
    a[i].style.border = "5px solid red"
    a[i].setAttribute("href","https://www.youtube.com")
    a[i].setAttribute("target","blank")
}

console.log(document.images);

let img = document.images
console.log(img[0]);
console.log(img[1]);
console.log(img[2]);

for(let i=0; i<img.length; i++)
{console.log(img[i]);
    img[i].style.height="200px"
    img[i].style.width="200px"
   img[i].style.transition="all 0.5s ease-in-out";
    
}












