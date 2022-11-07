window.onload = function() {
    var searchbtn = document.getElementById("search-btn");
    var searchbar = document.getElementById("search-bar");
    var result = document.getElementById("result");
    
    var url = "superheroes.php?q=";

    searchbtn.onclick = function() {        
        var request = new XMLHttpRequest();
        var searchval = sanitiseString(searchbar.value);

        searchbar.value = "";

        request.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                // alert(request.responseText);
                // console.log(request.responseText);
                
                result.innerHTML = request.responseText;

            }
        }; 
        
        request.open("GET", url + searchval, true);
        request.send();       
    }            
};

// front-end sanitising
function sanitiseString(str) {
    if(str.length == 0) {
        return str;
    }

    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    return str.trim();
}
