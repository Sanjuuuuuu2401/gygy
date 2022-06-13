//   display(datas)







for(let i=0;i<userData.length;i++){

    var s=userData[i].country;
}
// console.log(s)



const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${s}`

// console.log(s)
let game=async()=>{
    let s=document.getElementById("country").value

    let res=await fetch(url)
let data=await res.json()


appendI(data.articles)
// console.log(data.articles)


}

game()


 let appendI=(data)=>{


    data.forEach(function(ele){

     var box=document.createElement("div");
    var image=document.createElement("img")
    image.setAttribute("src",ele.urlToImage)
    var title=document.createElement("p")
    title.innerText=ele.title;

    box.append(image,title)


    document.getElementById("news_result").append(box)

    










    })

 }










var container=document.getElementById("sidebar");

let display=(data)=>{
    container.innerHTML=null;

data.forEach(function(ele){

var box=document.createElement("div");



var image=document.createElement("img")
image.setAttribute("src",ele.image)
image.setAttribute("id","imagee")
var name=document.createElement("p")
name.innerText=ele.name;
var email=document.createElement("p")
email.innerText=ele.email;
var country=document.createElement("p")
country.innerText=ele.country

box.append(image,name,email,country)
// document.getElementById("sidebar").append(box)
container.append(box)






})

}
var userData=JSON.parse(localStorage.getItem("user"))
display(userData)