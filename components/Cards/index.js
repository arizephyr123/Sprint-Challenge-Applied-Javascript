// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleSection = document.querySelector(".cards-container");
//console.log(articleSection);

//make topicsList
// let list = [];
// function getTopicList () {
//     return axios.get('https://lambda-times-backend.herokuapp.com/topics')
//         .then(response => {
//           list.push(response.data.topics);
//           //console.log(list);
//           return list;
//         })
//     }

// function topicFilter(objects, topic){
//   objects.filter(objects.data.articles.topic ==)
// }

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(response => {
//     response.data.topics.forEach(item => {
//         console.log(item);
//       axios
//         .get("https://lambda-times-backend.herokuapp.com/articles")
//         .then(response => {
//             console.log(response.data.articles.bootstrap);
//             console.log(response.data.articles.item);
//             console.log(response);
//let newVar =
//response.forEach(){

//}

//let list = response.filter(word => word.data.articles == item);
//console.log(list);
//console.log(response.data.articles +`.${item}`);
//let objPath = response.data.articles +`.${item}`
//objPath.forEach(CreateCard(`response.data.articles.${item}`));
//       });
//   });
//   return;
// });


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.bootstrap.forEach(item => {
      CreateCard(item);
    });
    response.data.articles.javascript.forEach(item => {
      CreateCard(item);
    });
    response.data.articles.jquery.forEach(item => {
      CreateCard(item);
    });
    response.data.articles.node.forEach(item => {
      CreateCard(item);
    });
    response.data.articles.technology.forEach(item => {
      CreateCard(item);
    });
  })
  .catch(error => {
    console.log("The ARTICLES data was not returned", error);
  });

function CreateCard(obj) {
  //create elements
  const wholeCard = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgCont = document.createElement("div"),
    img = document.createElement("img"),
    byAuthorSpan = document.createElement("span");

  //assign classes
  wholeCard.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  //set textContent/attributes
  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  byAuthorSpan.textContent = `By ${obj.authorName}`;

  //create structure
  articleSection.appendChild(wholeCard);
  wholeCard.appendChild(headline);
  wholeCard.appendChild(author);
  author.appendChild(imgCont);
  author.appendChild(byAuthorSpan);
  imgCont.appendChild(img);

  return wholeCard;
}
