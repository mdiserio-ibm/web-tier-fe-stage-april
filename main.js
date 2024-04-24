

function getPosts(){
    //HTTP request per ricavare gli articoli
    let url= "https://jsonplaceholder.typicode.com/posts";
    console.log(url);
    fetch(url)
    .then(response =>response.json())
    .then(data => {

        console.log(data);
        console.log(data[0].title);
        console.log(data[0].body);

        //parto dalla riga del container
        const cardsContainer = document.querySelector('.row')
        console.log(cardsContainer)

        //per ogni elemento nel json della risposta, aggiungi alla card gli elementi
        data.forEach(function(article,index){
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'mb-4');

            // Crea un elemento card
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${data[index].title}</h5>
                <p class="card-text">${data[index].body}</p>
                <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Espandi</a>
            </div>
            `;

            //event listener sul bottone della carta
            card.addEventListener("click",function(e){
                //cambia il nome dell'header in post detail
                const headerElement = document.querySelector('.header');
                headerElement.textContent= "Post detail";


                window.location.href = `postdetail.html?id=${index+1}`;
                console.log(e);

                //commento la soluzione precedente: avevo fatto tutto in una pagina, in cui veniva cambiato il titolo
                //dell'header in post details e veniva mostrato articleDetails (predefinito a display none)
                
                // const detailsTitle = document.getElementById('detailsTitle');
                // const detailsBody = document.getElementById('detailsBody');
                
              
                // const articleDetails = document.getElementById('article-details');
                // articleDetails.style.display = 'block';
                // newIndex=index+1;
                // url = "https://jsonplaceholder.typicode.com/posts/"+newIndex;
                // fetch(url)
                // .then(response =>response.json())
                // .then(data =>{

                //     console.log(data);
                //     console.log(data.title);
                //     console.log(data.body);
                //     detailsTitle.textContent = data.title;
                //     detailsBody.textContent = data.body;
                    
                // });
            });
            col.appendChild(card);
         // Aggiungi la card al contenitore delle cards
        cardsContainer.appendChild(card);
        });

    
    });

}

// function closeDetails() {
//         document.querySelector("#closeButton").addEventListener("click",function(e){
//             console.log(e);
//             const articleDetails = document.getElementById('article-details');
//             articleDetails.style.display = 'none';
//             const headerElement = document.querySelector('.header');
//             headerElement.textContent= "Posts";
//          });
//       }


getPosts();
//closeDetails();