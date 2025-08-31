window.onload = function () {
  //Get info for the modal
  var productImage,
    productCategory,
    productName,
    productPrice,
    productDescription;
  var infoDiv = document.getElementsByClassName("space-y-3");
  var infoDivArray = [];
  Array.from(infoDiv).forEach(function (div) {
    if (div.classList.contains("p-4") && div.classList.contains("space-y-3")) {
      infoDivArray.push(div);
    }
  });

  //Set id of the h3 to product-name
  infoDivArray.forEach(function (div) {
    let info = div.firstElementChild.children;
    info[0].classList.add("product-name");
    info[1].classList.add("product-price");
    div.children[1].classList.add("product-description");
  });

  //Handle button functionality to show modal
  var articleList = document.getElementsByTagName("article");
  var modalHolder = document.getElementById("modal-holder");

  Array.from(articleList).forEach(function (div) {
    let imageBtn = div.children[0].firstElementChild;
    imageBtn.parentElement.children[1].classList.add("product-category");
    imageBtn.firstElementChild.classList.add("product-image");

    //Display modal and its info
    imageBtn.addEventListener("click", function () {
      let modalImage, modalCategory, modalName, modalPrice, modalDescription;
      modalImage = document.getElementById("product-image");
      modalCategory = document.getElementById("product-category");
      modalName = document.getElementById("modal-title");
      modalPrice = document.getElementById("product-price");
      modalDescription = document.getElementById("modal-description");
      modalHolder.style.display = "block";

      //Fetch info
      productImage = imageBtn.firstElementChild.getAttribute("src");
      modalImage.setAttribute("src", productImage);

      productCategory = imageBtn.parentElement.children[1].textContent;
      modalCategory.textContent = productCategory;

      productName =
        imageBtn.parentElement.nextElementSibling.firstElementChild.children[0]
          .textContent;
      productPrice =
        imageBtn.parentElement.nextElementSibling.firstElementChild.children[1]
          .textContent;
      modalName.textContent = productName;
      modalPrice.textContent = productPrice;

      productDescription =
        imageBtn.parentElement.nextElementSibling.children[1].textContent;
      modalDescription.textContent = productDescription;
    });
  });

  //Functionality for the cancelling modal
  let cancelBtn = document.getElementById("cancel-btn");

  cancelBtn.addEventListener("click", function () {
    modalHolder.style.display = "none";
  });

  //Filtering functionality
  Array.from(articleList).forEach(function (article) {
    article.setAttribute(
      "data-category",
      article.children[0].children[1].textContent
    );
    //console.log(article.dataset.category);
  });

  var filterDiv = document.getElementById("filter");
  Array.from(filterDiv.children).forEach(function (filter) {
    filter.addEventListener("click", function () {
      if (filter.textContent.trim() == "All Products") {
        Array.from(articleList).forEach(function (a) {
          a.style.display = "block";
        });
      } else if (filter.textContent.trim() == "Hoodies") {
        Array.from(articleList).forEach(function (a) {
          if (!(a.dataset.category.trim() == "hoods")) {
            a.style.display = "none";
          } else {
            a.style.display = "block";
          }
        });
      } else if (filter.textContent.trim() == "Tops") {
        Array.from(articleList).forEach(function (a) {
          if (!(a.dataset.category.trim() == "tops")) {
            a.style.display = "none";
          } else {
            a.style.display = "block";
          }
        });
      } else if (filter.textContent.trim() == "Joggers") {
        Array.from(articleList).forEach(function (a) {
          if (!(a.dataset.category.trim() == "joggers")) {
            a.style.display = "none";
          } else {
            a.style.display = "block";
          }
        });
      } else if (filter.textContent.trim() == "Dresses") {
        Array.from(articleList).forEach(function (a) {
          if (!(a.dataset.category.trim() == "dresses")) {
            a.style.display = "none";
          } else {
            a.style.display = "block";
          }
        });
      } else if (filter.textContent.trim() == "Crochet Bags") {
        Array.from(articleList).forEach(function (a) {
          if (!(a.dataset.category.trim() == "crochet bags")) {
            a.style.display = "none";
          } else {
            a.style.display = "block";
          }
        });
      }
    });
  });
};
