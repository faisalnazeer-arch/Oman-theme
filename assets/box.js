updatebox();

// Function to get cookie value
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  
  // Function to set a cookie value
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
     console.log(value + "added to coockie");
  }
   
  
  // Function to display custom cart products
  function updatebox() {
  var cartItems = document.querySelectorAll('.box-cart-item');
  console.log(cartItems.length);
  if (cartItems.length > 0) {
    updateHeaderItemCount();
  // If elements exist, iterate over each element and remove it
  cartItems.forEach(function (cartItem) {
    cartItem.remove();
  });
  } else {
    
  console.log("No elements with class 'box-cart-item' found.");
  }
    var totalElement = document.getElementById('box-total-price');
    var container = document.getElementById('customCartContainer');
    var getcookiesdata = JSON.parse(getCookie('customCart') || '[]');
    var cartItemsContainer = document.createElement('div');
    var totalPrice = 0;
    var emptyBox = document.getElementById('box-drawer-mid');
    var boxbottom = document.getElementById('box-bottom');

    if (getcookiesdata.length == 0) {
      
    
      emptyBox.style.display = 'block';
      boxbottom.style.display = 'none';
      return; 
    }
    else{
      
       updateHeaderItemCount();
       emptyBox.style.display = 'none';
       boxbottom.style.display = 'block';
    }
    
  
    getcookiesdata.forEach(function(item) {   

      var cartItemElement = document.createElement('div');
      cartItemElement.className = 'box-cart-item';
      cartItemElement.innerHTML = `
      <div>
        <img class="box_p_image" src="${item.image}" alt="${item.name}" width="100" height="100" />
        </div>
        <div class="product-details">
      <div class="product-name">${item.name}  
</div>
${item.variant !== 'Default Title' ? `<div class="variant-name">${item.variant}</div>` : ''}
      <div class="product-quantity">
      <div class="product-quantity1">
  <button class="update-quantity-btn" data-id="${item.id}" data-variant="${item.variant}" data-type="decrease">-</button>
  <span>${item.quantity}</span>
  <button class="update-quantity-btn" data-id="${item.id}" data-variant="${item.variant}" data-type="increase">+</button>
</div>

      <button class="remove-product-btn" data-id="${item.id}" data-variant="${item.variant}">Remove</button>
    </div>
      </div>
      <div class="product-price"> ${(item.price * item.quantity).toFixed(3)} OMR</div>
        `; 
        
      container.appendChild(cartItemElement);
       totalPrice += item.price * item.quantity;
    });
    
  // Display the total price at the end of the custom cart
    
    totalElement.innerHTML = `Total:  ${totalPrice.toFixed(3)} OMR`; // Display total price up to 3 decimals
    resetButtonToInitialState();
  }
  

  // open cart drawer
  document.addEventListener('DOMContentLoaded', function () {
    var customCartLink = document.getElementById('customCartLink');
    var customCartContainer = document.getElementById('box-drawer');
  
    if (customCartLink && customCartContainer) {
      customCartLink.addEventListener('click', function(event) {
        opendrawer();
      });
  
     function opendrawer(){
       event.preventDefault();
        customCartContainer.classList.toggle('active');
       var boxoverlay = document.getElementById ('box-drawer-bg');
        boxoverlay.style.display='block';
       document.body.classList.add('overlay-active');
     }
    }
  });
  
  



  // Add event listener for the close button
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('cart-drawer-close-button')) {
  closedrawer();
  }
    else{
   var closeoverlay = document.getElementById ('box-drawer-bg');
     if (event.target === closeoverlay) {
    closedrawer();
    
  }
  }
  
});

  
 function closedrawer() {
   var boxDrawerContainer = document.getElementById('box-drawer');
    var boxoverlay = document.getElementById ('box-drawer-bg');
    boxoverlay.style.display='none';
      boxDrawerContainer.classList.remove('active');
   document.body.classList.remove('overlay-active');
 }



  var buttons = document.querySelectorAll('.add-to-custom-cart-btn'); 
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var variantID = this.getAttribute('data-product-variantId');
     var variantName = this.getAttribute('data-product-variant');
      var productId = parseInt(this.getAttribute('data-product-id'));
      var productName = this.getAttribute('data-product-name');
      var productPrice = parseFloat(this.getAttribute('data-product-price'));
      var productImage = this.getAttribute('data-product-imageUrl');
      var quantityInput = document.querySelector('.product-quantity-input[data-product-id="' + productId + '"]');
    var quantity = parseInt(quantityInput.value);
    
      var customCartData = JSON.parse(getCookie('customCart') || '[]');
      var productExists = false;
      
      
       customCartData.forEach(function(item) {
         console.log(item,"ckeck it same entered again");
         if (item.id === productId && item.variant === variantName ) {
           item.quantity += quantity;
           productExists = true;
         }
       });

      if (!productExists) {
        customCartData.push({
          id: productId,
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: quantity,
          variant: variantName,
          variantId: variantID
        });
        resetButtonToInitialState();
      }
      
 

   var customCartContainer = document.getElementById('box-drawer');
    if (customCartContainer) {
      customCartContainer.classList.add('active');
       var boxoverlay = document.getElementById ('box-drawer-bg');
        boxoverlay.style.display='block';
      document.body.classList.add('overlay-active');
    }
      setCookie('customCart', JSON.stringify(customCartData), 30);

      // Display the updated custom cart immediately after adding a product
      updatebox();

    });
  });



document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('remove-product-btn')) {
    const productIdToRemove = parseInt(event.target.getAttribute('data-id'));
    const variantToRemove = event.target.getAttribute('data-variant');
    removeProduct(productIdToRemove, variantToRemove);
  }
  // Handle other specific buttons as before
});



















// // Event listner to remove whole product
//  document.addEventListener('click', function(event) {
//         if (event.target && event.target.classList.contains('remove-product-btn')) {
//           var productIdToRemove = parseInt(event.target.getAttribute('data-id'));
//           removeProduct(productIdToRemove);
//         }
//    if (event.target.classList.contains('box-continue-button')) {
   
//     closedrawer();
//   }
//    if (event.target.classList.contains('popup-overlay')) {
   
//     event.target.style.display = 'none';
//      document.body.classList.remove('overlay-active');
//   }
  
//       });

// Function to remove product from custom cart
function removeProduct(productIdToRemove, variantToRemove) {
  console.log(`Removing product: ${productIdToRemove}, variant: ${variantToRemove}`); // Debug log
  let customCartData = JSON.parse(getCookie('customCart') || '[]');
  const filteredCart = customCartData.filter(item => !(item.id === productIdToRemove && item.variant === variantToRemove));

  console.log(filteredCart); // Check the filtered cart data

  setCookie('customCart', JSON.stringify(filteredCart), 7);
  updatebox(); // Ensure this function correctly updates the UI
}



















// Function to remove a product from the custom cart
  // function removeProduct(productId) {
  //   console.log(productId);
  //   var customCartData = JSON.parse(getCookie('customCart') || '[]');
  
  //   var index = customCartData.findIndex(item => item.id === productId);
    
  //   if (index > -1) {
  //     customCartData.splice(index, 1);
  //   }
    
  //   setCookie('customCart', JSON.stringify(customCartData), 30);
  //   updatebox();
  // }











    





    
// buttons om  product on byob page
// Event listener for quantity change buttons (+ and -)
      var quantityButtons = document.querySelectorAll('.quantity-btn');
      quantityButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          var productId = this.getAttribute('data-product-id');
          var quantityInput = document.querySelector('.product-quantity-input[data-product-id="' + productId + '"]');
          var currentQuantity = parseInt(quantityInput.value);
    
          if (this.classList.contains('increase')) {
            quantityInput.value = currentQuantity + 1;
          } else if (this.classList.contains('decrease')) {
            if (currentQuantity > 1) {
              quantityInput.value = currentQuantity - 1;
            }
          }
         
        });
      });





// // Update quantity event listener using event delegation
// var container = document.getElementById('customCartContainer');
// container.addEventListener('click', function(event) {
//   var target = event.target;

//   // Check if the clicked element has the class 'update-quantity-btn'
//   if (target.classList.contains('update-quantity-btn')) {
//     var productId = parseInt(target.getAttribute('data-id'));
//     var variantName = target.getAttribute('data-variant'); // Get the data-variant attribute
//     var actionType = target.getAttribute('data-type');

//     var customCartData = JSON.parse(getCookie('customCart') || '[]');

//     customCartData.forEach(function(item) {
//       // Check if both productId and variantName match
//       if (item.id === productId && item.variant === variantName) {
//         if (actionType === 'increase') {
//           item.quantity += 1;
//         } else if (actionType === 'decrease' && item.quantity > 1) {
//           item.quantity -= 1;
//         }
//       }
//     });

//     // Update the cookie with the updated customCartData
//     setCookie('customCart', JSON.stringify(customCartData), 30);

//     // Refresh the displayed custom cart
//     updatebox();
//   }
// });









// // Assuming you have a click event handler for the buttons
// $('.update-quantity-btn').click(function() {
//   // Get the data attributes from the clicked button
//   const itemId = $(this).data('id');
//   const itemVariant = $(this).data('variant');
//   const itemType = $(this).data('type'); // 'increase' or 'decrease'

//   // Find the specific item in the cart based on itemId and itemVariant
//   const cartItem = customCartData.find(item => item.id === itemId && item.variant === itemVariant);

//   if (cartItem) {
//     // Update the quantity based on the button type
//     if (itemType === 'increase') {
//       cartItem.quantity += 1;
//     } else if (itemType === 'decrease' && cartItem.quantity > 0) {
//       cartItem.quantity -= 1;
//     }

//     // Update the cookie with the updated customCartData
//     setCookie('customCart', JSON.stringify(customCartData), 30);

//     // Refresh the displayed custom cart
//     updatebox();.
//   }

//   // Refresh the cart display or do any necessary updates
//   // ...
// });







    

// Update quantity event listener using event delegation
var container = document.getElementById('customCartContainer');
container.addEventListener('click', function(event) {
  var target = event.target;

  // Check if the clicked element has the class 'update-quantity-btn'
  if (target.classList.contains('update-quantity-btn')) {
    var productId = parseInt(target.getAttribute('data-id'));
    var actionType = target.getAttribute('data-type');
    var variantName = target.getAttribute('data-variant');
    var customCartData = JSON.parse(getCookie('customCart') || '[]');
console.log(variantName,"variant name on + -");
    customCartData.forEach(function(item) {
      if (item.id === productId && item.variant === variantName) {
        if (actionType === 'increase') {
          item.quantity += 1;
        } else if (actionType === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    });

    // Update the cookie with the updated customCartData
    setCookie('customCart', JSON.stringify(customCartData), 30);

    // Refresh the displayed custom cart
    updatebox();
  }
  
});







function updateHeaderItemCount() {
  
  var customCartData = JSON.parse(getCookie('customCart') || '[]');
  console.log('Custom Cart Data:', customCartData); // Check the retrieved data

  var itemCount = customCartData.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);

  console.log('Item Count:', itemCount); // Check the calculated item count

  var itemCountElement = document.getElementById('customCartItemCount');
  if (itemCountElement) {
    itemCountElement.textContent = itemCount >=0 ? itemCount : '';
  }
    var hidemessage= document.getElementById('box-block-texts');
    var hideblur= document.getElementById('block-boxes');
  if(itemCount>1)
  {
    hidemessage.style.display = 'none';
      hideblur.style.display = 'none';
  }
  else
  {
    hidemessage.style.display = 'block';
      hideblur.style.display = 'block';
  }
}


function openProductDescriptionPopup(productId) {
  document.getElementById('productDescriptionPopup-' + productId).style.display = 'block';
  document.body.classList.add('overlay-active');
}

function closeProductDescriptionPopup(productId) {
  document.getElementById('productDescriptionPopup-' + productId).style.display = 'none';
  document.body.classList.remove('overlay-active');
}






var selectElement = document.getElementById("boxplanDuration");
console.log(String(selectElement) + " here I'm");


var selectedValue;
selectElement.addEventListener("change", function() {
selectedValue = selectElement.value;
 const subscribeButton = document.getElementById('build-your-box');
if ( selectedValue != 'choose') {
     subscribeButton.style.display = 'block';
   } else {
     subscribeButton.style.display = 'none';
   }
const viewplan = document.getElementById('Test-your-plan');
viewplan.style.display = 'none';
  
// You can perform actions based on the selected value
});







function sendproductdata() {
 showloader();
 
var request = new XMLHttpRequest();
   request.open("POST", "https://hook.eu1.make.com/j3wvucfu52wiqnaqpelta0axjyq38fdn");
request.setRequestHeader('Content-type', 'application/json');



var mainObject = {
 products: [], // Create an empty array to store product details
  totalPrice:0
};



// Loop through items and populate the main object with product details and total quantity
   var getcookiesdata = JSON.parse(getCookie('customCart') || '[]');
   getcookiesdata.forEach(function(item) {
   var productTitle = item.name;
  var productPrice = item.price;
  var totalQuantity = item.quantity;
     var productVariant = item.variant;
     var variantid = item.variantId;

  // Extract the unit from the product title
  var unit = productTitle.match(/\d+(gm | kg )/);
     
  if (unit) {
   unit = unit[0];
  } else {
   unit = "gm";
  }
     

  var product = {
    name: productTitle,
    price: productPrice,
    totalQuantity: totalQuantity,
    unit: unit,
    variant: productVariant,
    variantId: variantid
  };
  
  mainObject.products.push(product);
  mainObject.totalPrice += item.price * item.quantity;
  console.log(mainObject);
   });
  
  mainObject.productCount = mainObject.products.length;
  mainObject.planduration = selectedValue;
  
  request.send(JSON.stringify(mainObject));
  
  
  request.onreadystatechange = function() {
    
   if (request.readyState == 4 && request.status == 200) {
     hideloader();
   document.getElementById("build-your-box").style.display = "none";
   document.getElementById("Test-your-plan").style.display = "block";
  
   (function (d, o, s, a, m) {
    a = d.createElement(o);
    m = d.getElementsByTagName(o)[0];
    a.async = 1;
    a.defer = 1;
    a.src = s;
    m.parentNode.insertBefore(a, m);
         })(document, "script", "https://embed.subsbase.com/sb.min.js");
  
   window.sb =
    window.sb ||
    function () {
    (sb.s = sb.s || []).push(arguments);
    };
  
   sb("siteId", "mls"); // Required
   sb("attachPlan", request.responseText, "Test-your-plan");

   }
    var myButton = document.getElementById("Test-your-plan");

// Add a click event listener to the button
myButton.addEventListener('click', function() {
  console.log('Button clicked!');
  closedrawer();
  // You can perform additional actions here if needed
});
  };
  }




var loader = document.getElementById("loader");
 
function showloader() {
    loader.style.display = 'block';
}
function hideloader() {
    loader.style.display = 'none';
}



   






