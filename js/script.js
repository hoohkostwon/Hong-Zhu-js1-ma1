const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Q1
//Create an object called cat.
//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
const cat = {
    complain: function () {
        console.log ("Meow!");
    }
};

cat.complain ();

//Q2
//Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
//Change its innerHTML value to "Updated heading".

const heading = document.querySelector ("h3");
heading.innerHTML= "Updated heading";

//Q3
//Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize= "2em";

//Q4
//Add a class to the heading variable called subheading.
const subheading= heading.classList.add ("subheading");

//Q5
//Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
const paragraphs= document.querySelectorAll ("p");

//Loop through the p elements and change the colour of each to "red".
for (let i=0; i< paragraphs.length; i++){
    paragraphs[i].style.color= "red";
}

//Q6
//Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.
const resultsContainer = document.querySelector (".results")
resultsContainer.innerHTML= "<p>New paragraph</p>";
resultsContainer.style.backgroundColor="yellow";