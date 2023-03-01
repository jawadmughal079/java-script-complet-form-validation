function formValidation() {
  // first check the name is filled or not

  let firstName = document.getElementById("firstName").value;
  if (firstName.length == 0) {
    document.getElementById("firstNameError").innerHTML =
      "Please fill the input before the submit the form";
    return false;
  } else {
    document.getElementById("firstNameError").innerHTML = "";
    // return false;
  }

  // second check the password is fill or not
  let password = document.getElementById("passowrd").value;
  if (password.length == 0) {
    document.getElementById("passwordError").innerHTML =
      "Please Insert the password ";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = " ";
  }

  var genderArr = document.getElementsByName("gender");
  var flag = false;
  // for loop user there because we want to check if any one is selected or not
  for (var i = 0; i < genderArr.length; i++) {
    if (genderArr[i].checked == true) {
      flag = true;
      break;
    }
  }

  if (flag == false) {
    document.getElementById("genderError").innerHTML =
      "please select the gender ";
    return false;
  }

  // third check student fill the address or not
  let address = document.getElementById("address").value;
  if (address.length == 0) {
    document.getElementById("addressError").innerHTML =
      "PLEASE FILL THE ADDRESS ";
    return false;
  }

  //   4 - city
  let city = document.getElementById("city").value;
  if (city.length == 0) {
    document.getElementById("cityError").innerHTML = "please FILL THE ID ";
    return false;
  }

  var state = document.getElementById("state").value;
  //   alert(ddlFruits);
  if (state == "") {
    document.getElementById("stateError").innerHTML =
      "PLEASE SELECT THE STATE ";
    return false;
  }

  //   FORM VALIDATION FOR THE NUMBER
  let phone = document.getElementById("number").value;
  if (phone.length == 0) {
    document.getElementById("numberError").innerHTML =
      "please insert only the number ";
    return false;
  }



  var hobby = document.getElementsByName("hobby[]");
  alert(hobby.length);
  var flag = false;
  // for loop user there because we want to check if any one is selected or not
  for (var i = 0; i < hobby.length; i++) {
    if (hobby[i].checked == true) {
      flag = true;
      break;
    }
  }

  if (flag == false) {
    document.getElementById("hobbyError").innerHTML =
      "please select the hobby ";
    return false;
  }

  //   file forn validation
  let file = document.getElementById("fileUpload").files[0];
  if (file) {
  } else {
    document.getElementById("fileError").innerHTML = "please select the file ";
    return false;
  }
}

//  my error
// value
// innerHTML = () NOT innerHTML()
// add the id into span
// return false;
