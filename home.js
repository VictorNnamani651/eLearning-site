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

// function to make the dropdown buttons to display or hide the dropdown menu when clicked
function displayDropdownOnClick(evt) {
  if (
    evt.parentElement.querySelector(".dropdown-menu").classList.contains("show")
  ) {
    evt.parentElement.querySelector(".dropdown-menu").classList.remove("show");
  } else {
    evt.parentElement.querySelector(".dropdown-menu").classList.add("show");
  }
}
