// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");
//console.log(topics);

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response.data.topics);
    // console.log(response);
    let topicsArray = response.data.topics;
    //console.log(topicsArray);
    topicsArray.forEach(item =>{
        //console.log(item);
        createTab(item);
        //return topicsArray
    })
    //return something???
  })
  .catch(error => {
    console.log("The TABS data was not returned", error);
  });


function createTab(item) {
    tab = document.createElement("div");
    tab.textContent = (item);
    tab.classList.add("tab");
    topics.appendChild(tab);

    return tab
}
