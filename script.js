  //Wait for page to finish loading
  window.addEventListener("load", function () {
    //Run function when you submit form
    document.getElementById("form").addEventListener("submit", function (e) {
        //Stop the form from submitting:
        e.preventDefault();

        //Get your input value (and save to js variable)
        let postColor = document.getElementById("post-color").value;

        //view Results 
        let viewPostColor = document.getElementById("viewPostColor");
        viewPostColor.innerHTML = ".post {" + "<br>" + "color:" + postColor + "<br>" + "}"; 

    });
});


function clearScreen() {
    viewPostColor.innerHTML = ""; 
}
