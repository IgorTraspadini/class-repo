// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
console.log($);
let ElemRoot = $('#root');

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
let ElemP = $('<p>');

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
ElemP.text("~ Carol Dweck");

// TODO: Add the class `plain` to the author element

//ElemP.attr("class","plain");
ElemP.addClass('plain');

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
let ElemH1 = $('<h1>');

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
ElemH1.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");

// TODO: Apply the class `fancy` to the quote element
//ElemH1.attr("class","fancy");
ElemH1.addClass('fancy');

// TODO: Append the author element to the quote element
ElemH1.append(ElemP);

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
ElemRoot.append(ElemH1)
