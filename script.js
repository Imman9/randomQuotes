(function generate(){
    var quotes = {
      "- Albert Camus": '"I would rather live my life as if there is a God and die to find out there isnt, than live as if there isnt and to die to find out that there is."',
      "- Winston Churchill": '"If youre going through hell, keep going."',
      "- Norman Vincent Peale": '"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy."'
    }; 
    
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
  
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
  })();
  
    
    
  