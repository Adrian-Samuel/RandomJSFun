/* Purpose of this task was to be able to scrape the list of prices onto 
the console and sum them. This automates the manual copy and pasting work one would have to do
Website scraped: https://www.mtlblog.com/lifestyle/cost-of-living-montreal
*/

// Target all the content on the page
    let it = document.querySelectorAll('#article-text *');
    // initialise a string
    let words = "";
    // cycle through each piece of content on the page
    it.forEach(function(price, i) {
    //store the HTML content in a variable
    let money = price.innerHTML;
    //concat the money HTML into an array called words
    words = words + money;
    // create a regular expression to match the dollar signs followed with a number i.e. the prices
    let patt = /\$\d+/igm;
    // store a variable matching the pattern of the regular expression created above
    let pricing = words.match(patt);
    // if the iteration of the array matches the node list length - 1
if (i == it.length -1) {
    // remove the dollar sign off the array
   let freedom = pricing.map(x => x.replace(/\$/igm, ""));
   // convert the array into numbers and store it into the variable conv
    let conv = freedom.map(Number);
    // log out the sum of the values onto the console
    console.log(conv.reduce((a,b) => a+b,0));
}
    });
