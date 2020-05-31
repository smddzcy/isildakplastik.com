const hash = window.location.hash.replace("#", "");
showProduct(hash);

function setProduct(hash) {
  showProduct(hash);
}

function showProduct(h) {
  const products = $('.product');
  if (h !== "") {
    for (i = 0; i < products.length; i++) {
      if (products[i].id === h) {
        $(products[i]).removeClass("hidden");
      } else {
        $(products[i]).addClass("hidden");
      }
    }
  } else {
    $(products[0]).removeClass("hidden");
  }
}