// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container");

function Header(dateParam, h1, tempParam) {
    headerDiv = document.createElement("div"),
    date = document.createElement("span");
    H1 = document.createElement("h1"),
    temp = document.createElement("span");

    //set content attributes 
    date.textContent = (dateParam);
    H1.textContent = (h1);
    temp.textContent = (tempParam);

    headerDiv.classList.add("header");
    date.classList.add("date");
    temp.classList.add("date");

    headerContainer.appendChild(headerDiv);
    headerDiv.appendChild(date);
    headerDiv.appendChild(H1);
    headerDiv.appendChild(temp);

    return headerDiv
}

Header("SEPTEMBER 6, 2019", "Lambda Times", "78°");