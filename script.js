  //Wait for page to finish loading
  window.addEventListener("load", function () {
    //Run function when you submit form
    document.getElementById("form").addEventListener("submit", function (e) {
        //Stop the form from submitting:
        e.preventDefault();

      
      
        //save Inputs
        let postTextColor = document.getElementById("post-text-color").value;
      
        //insert code below for saving the input element. follow the post-color template provided        

      
      
      
      
      
        //view Results 
        let viewPostTextColor = document.getElementById("viewPostTextColor");
        viewPostTextColor.innerHTML = ".post { <br> color:" + postTextColor + ";<br> }";
      
        //insert code below for viewing the input element. follow the post-color template provided   

    });
});

//clear Screen 
function clearScreen() {
    viewPostTextColor.innerHTML = ""; 
  
  //insert code below for clearing the input element. follow the post-color template provided   
  
  
  
  
  
  
}
