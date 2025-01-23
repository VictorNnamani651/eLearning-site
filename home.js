// functions to make the dropdown buttons to display the dropdown menu when hovered over and hide when the mouse leaves the dropdown button
{
  // function to make the dropdown buttons to display the dropdown menu when hovered over
  function displayDropdown(evt) {
    if (
      evt.parentElement
        .querySelector(".dropdown-menu")
        .classList.contains("show")
    ) {
      null;
    } else {
      evt.parentElement.querySelector(".dropdown-menu").classList.add("show");
    }
  }

  // function to make the dropdown buttons to hide the dropdown menu when the mouse leaves the dropdown button
  function hideDropdown(evt) {
    if (
      evt.parentElement
        .querySelector(".dropdown-menu")
        .classList.contains("show")
    ) {
      evt.parentElement
        .querySelector(".dropdown-menu")
        .classList.remove("show");
    } else {
      null;
    }
  }
}

// the function below is to make the dropdown buttons to display or hide the dropdown menu when clicked
function displayDropdownOnClick(evt) {
  if (
    evt.parentElement.querySelector(".dropdown-menu").classList.contains("show")
  ) {
    evt.parentElement.querySelector(".dropdown-menu").classList.remove("show");
  } else {
    evt.parentElement.querySelector(".dropdown-menu").classList.add("show");
  }
}

// functions to make the course card button color change when the course card is hovered over
{
  // function to change the course card button to a fully red button
  function make_Course_Btn_Fully_Red(evt) {
    evt
      .querySelector(".course-card-btn")
      .classList.remove("btn-outline-danger");
    evt.querySelector(".course-card-btn").classList.add("btn-danger");
  }

  // function to change the course card buttton to a simple red outlined button
  function make_Course_Btn_Have_Only_a_Red_Outline(evt) {
    evt.querySelector(".course-card-btn").classList.remove("btn-danger");
    evt.querySelector(".course-card-btn").classList.add("btn-outline-danger");
  }
}
