$(document).ready(function(){
  var forms = ["form1", "form2", "form3"];
  var groceryArray = [];

//when we submit the form (by clicking the button)
  $("form").submit(function(event){

    //for each text field, push the capitalized value of that field into groceryArray
    forms.forEach(function(form){
      groceryArray.push($("#" + form).val().toUpperCase());
        // console.log(groceryArray);
    });
      // console.log(groceryArray);

      //sort groceryArray in alphabetical order
      groceryArray.sort();

      //for each now-sorted and capitalized element in groceryArray, stick that element between <p> tags and put it at the end of the displayList div
    groceryArray.forEach(function(grocery){
      $("#displayList").append("<p>" + grocery + "</p>");
    });

    //reset groceryArray to empty in preparation for adding more items
    groceryArray = [];


    event.preventDefault();
    $("#addToList").hide();
  });

});
