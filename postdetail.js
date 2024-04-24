const url = "https://jsonplaceholder.typicode.com/posts"

function openDetails(id) {
    let postId = localStorage.getItem("postId");

    console.log(postId);

    let endpoint = url + "/" + postId;

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

openDetails();