const url = "https://jsonplaceholder.typicode.com/posts"

function getCards() {
    fetch(url).then(response => response.json())
        .then(data => {
            let container = document.getElementById("container-cards");
            let postsList = [];

            data.forEach(element => {
                let card = document.createElement("div");
                card.classList.add("card");

                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                let cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.classList.add("post-title");
                cardTitle.textContent = element.title;

                let cardText = document.createElement("p");
                cardText.classList.add("card-text");
                cardText.classList.add("post-p");
                cardText.textContent = element.body;

                let cardButton = document.createElement("button");
                cardButton.classList.add("btn");
                cardButton.classList.add("btn-primary");
                cardButton.textContent ="Espandi";

                cardButton.addEventListener("click", () => {
                    localStorage.setItem("postId", element.id);
                    window.open("postdetail.html", "_top");
                    
                });

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardButton);
                card.appendChild(cardBody);

                postsList.push(card);
                
                // container.appendChild(card);
            });

            postsList.sort((a,b) => {
                console.log(a.firstChild.firstChild);
                if(a.firstChild.firstChild.textContent < b.firstChild.firstChild.textContent) {
                    return -1;
                } else {
                    return 1;
                }
            });
            postsList.forEach(element => container.appendChild(element));
        });
}

function openDetails(id) {
    let endpoint = url + "/" + id;

    console.log("hello")
    fetch(endpoint).then(response => response.json())
        .then(data => {
            let container = document.getElementById("post-detail-page");

            let card = document.createElement("div");
            card.classList.add("card");

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = data.title;

            let cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = data.body;

            let cardButton = document.createElement("button");
            cardButton.classList.add("btn");
            cardButton.classList.add("btn-primary");
            cardButton.textContent ="Torna indietro";

            cardButton.addEventListener("click", () => {
                window.history.back();
            });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardButton);
            card.appendChild(cardBody);
            
            container.appendChild(card);
        })
}

// <a href="#" class="btn btn-primary">Go somewhere</a>
getCards();