window.onload = function() {
    var searchbtn = document.getElementById("search-btn");
    var url = "http://localhost/info2180-lab4/superheroes.php";

    searchbtn.onclick = function() {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                alert(request.responseText);
                // console.log(request.responseText);
            }
        }; 
        
        request.open("GET", url, true);
        request.send();       
    } 
}
    