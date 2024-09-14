function getQuote() {

    let config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    axios.get("https://johndturn-quotableapiproxy.web.val.run/").then((res) => {

        //console.log(res);

        let quoteData = res.data[0]; // Since data is an array with one item
        let quote = document.getElementById("quote");
        let author = document.getElementById("author");

        quote.innerHTML = quoteData.content; 
        author.innerHTML = quoteData.author; 
        
    }).catch((err) => {
        console.error(err);
        document.getElementById("quote").innerHTML = "An error occurred while fetching the quote.";
    });
}

window.onload = getQuote;


function tweet(){
   window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML , "Tweet Window", "width=600, height=600");
}