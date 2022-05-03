  //Wait for page to finish loading
  window.addEventListener("load", function () {
    //Run function when you submit form
    document.getElementById("form").addEventListener("submit", function (e) {
        //Stop the form from submitting:
        e.preventDefault();

      
      
        //save Inputs
        let postColor = document.getElementById("post-color").value;
      
        //insert code below for saving the input element. follow the post-color template provided        

      
      
      
      
      
        //view Results 
        let viewPostColor = document.getElementById("viewPostColor");
        viewPostColor.innerHTML = ".post {" + "<br>" + "color:" + postColor + "<br>" + "}";
      
        //insert code below for viewing the input element. follow the post-color template provided   

    });
});

//clear Screen 
function clearScreen() {
    viewPostColor.innerHTML = ""; 
  
  //insert code below for clearing the input element. follow the post-color template provided   
  
  
  
  
  
  
}
