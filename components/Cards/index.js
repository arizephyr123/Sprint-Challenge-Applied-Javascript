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

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(item => {
      axios
        .get("https://lambda-times-backend.herokuapp.com/articles")
        .then(response => {
            console.log(response);
          //console.log(`response.data.articles.${item}`);
          response.item.forEach(CreateCard(`response.data.articles.${item}`));
        });
    });
    return;
  });

//   followersArray.forEach(item => {
//     let followerUrl = `https://api.github.com/users/${item}`;
//     //console.log(followerUrl);
//     axios
//       .get(followerUrl)
//       .then(response => {
//         //console.log(response.data);
//         CreateCard(response);
//       })
//       .catch(error => {
//         console.log("The GitHub data was not returned", error);
//       });
//   });

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     console.log(response.data.articles.javascript);
//     console.log(list)[0];
//     list.forEach(element => {
//       console.log(element);
//       console.log("working");
//     });
//     // CreateCard(response);
//   })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });

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
  //wholeCard;
  headline.textContent = obj.headline;
  author;
  imgCont;
  img;
  byAuthorSpan;

  //create structure
  articleSection.appendChild(wholeCard);
  wholeCard.appendChild(headline);
  wholeCard.appendChild(author);
  author.appendChild(imgCont);
  author.appendChild(byAuthorSpan);
  imgCont.appendChild(img);

  return wholeCard;
}
