let navbar =(Name,img,email,country,contaier)=> {
    let div = document.createElement("div")
    let image = document.createElement("img")
    let h3 = document.createElement("h2")
    let h2 = document.createElement("h3")
    let p1 = document.createElement("p")
    
    image.src = img;
    h3.innerText=Name;
    h2.innerText = email;
    p1.innerText= country;

    div.append(image,h3,h2,p1)
    contaier.append(div)
}

export {navbar}