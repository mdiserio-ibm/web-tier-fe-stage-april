function setPostId(){
    
    //mi ricavo l'id tramite l'url
    
    const currentUrl = window.location.href;
    const urlCurrent = new URL(currentUrl);
    const queryParams = new URLSearchParams(urlCurrent.search);
    const id = queryParams.get('id');
    console.log(id);
    url = "https://jsonplaceholder.typicode.com/posts/" + id;

    //fetcho e imposto i dati
    fetch(url)
                .then(response =>response.json())
                .then(data =>{

                    document.querySelector(".titlecontent").textContent = data.title;
                    console.log(data.title);
                    console.log(data.body);
                    document.querySelector(".bodycontent").textContent = data.body;
                    
                });
}

function closePage(){
    let btn = document.querySelector("#actionButton");
    btn.addEventListener("click",function(e){
        window.location.href = "index.html";
    });
}

setPostId();
closePage();