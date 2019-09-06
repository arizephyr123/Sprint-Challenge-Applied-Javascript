// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//for reference
// arr.forEach(item => {
//     let listItems = document.createElement("li");
//     listItems.textContent = item;
//     listWrap.appendChild(listItems);
//     return listWrap;
//   });

/*
const topics = document.querySelector(".topics");
console.log(topics);

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    //CreateCard(response);
  })
  .catch(error => {
    console.log("The TABS data was not returned", error);
  });
function createTab() {
    tab = document.createElement("div");
    tab.classList.add("tab");
    //tab.textContent = ("");

    return tab
}
*/