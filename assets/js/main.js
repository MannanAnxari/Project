// // User Name 

// // var key = 'name';
// // var user = localStorage.getItem(key);
// // if (user === null || user === '' || user === 'null') {
// //   swal("Type Username Here:", {
// //     content: "input",
// //   })
// //     .then((value) => {
// //       let userName = value;
// //       localStorage.setItem(key, userName);
// //       window.location.href = '/'
// //     });

// // }
// // else { 
// //   document.getElementById('username').innerHTML = user;

// //   $('#content').load('home.html');

// //   $('#home_button').click(() => {
// //     $('#content').load('home.html');
// //   })

// //   $('#about_button').click(() => {
// //     $('#content').load('about.html');
// //   })
// //   $('#product_button').click(() => {
// //     $('#content').load('product.html');
// //   })
// //   $('#contact_button').click(() => {
// //     $('#content').load('contact.html');
// //   });
  
// // }

// // const goToProduct = () => {
// //   $('#content').load('product.html');
// // }


// // function removeItem() {
// //   localStorage.removeItem("name");
// //   window.location.href = '/'

// // }

// // User Name 



// // Cursor 

// function updateProperties(elem, state) {
//   elem.style.setProperty('--x', `${state.x}px`)
//   elem.style.setProperty('--y', `${state.y}px`)
//   elem.style.setProperty('--width', `${state.width}px`)
//   elem.style.setProperty('--height', `${state.height}px`)
//   elem.style.setProperty('--radius', state.radius)
//   elem.style.setProperty('--scale', state.scale)

// }

// document.querySelectorAll('.cursor').forEach(cursor => {
//   let onElement

//   const createState = e => {
//     const defaultState = {
//       x: e.clientX,
//       y: e.clientY,
//       width: 40,
//       height: 40,
//       radius: '50%'
//     }

//     const computedState = {}

//     if (onElement != null) {
//       const { top, left, width, height } = onElement.getBoundingClientRect()
//       const radius = window.getComputedStyle(onElement).borderTopLeftRadius

//       computedState.x = left + width / 2
//       computedState.y = top + height / 2
//       computedState.width = width
//       computedState.height = height
//       computedState.radius = radius
//     }

//     return {
//       ...defaultState,
//       ...computedState
//     }
//   }

//   document.addEventListener('mousemove', e => {
//     const state = createState(e)
//     updateProperties(cursor, state)
//   })

//   document.querySelectorAll('.mouseactive').forEach(elem => {
//     elem.addEventListener('mouseenter', () => (onElement = elem))
//     elem.addEventListener('mouseleave', () => (onElement = undefined))
//   })
// })

// // Cursor 



// var changeClass = function (name) {
//   $('#search').removeAttr('class').addClass(name);
// }


// $(document).ready(function () {
//   $.ajaxSetup({ cache: false });
//   $('#searchdata').keyup(function () {
//     console.log();
//     if (this.value.length > 0) {
//       $(this).css("transform", "translateY(-40vh)");
//       $('#result').html('');
//       $('#state').val('');
//       var searchField = $('#searchdata').val();
//       var expression = new RegExp(searchField, "i");
//       $.getJSON('./assets/JSON/searchData.json', function (data) {
//         $.each(data, function (key, value) {
//           if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
//             $('#result').append('<li class="list-group-item link-class transition search_item flex items-center h-20" onclick="goToProduct()"><img src="' + value.image_url + '" class="img-thumbnail mx-4" /> ' + value.name + ' | <span class="text-muted">' + value.after_price + '</span></li>');
//           }
//         });
//       });
//     }
//     else {
//       $('#result').html('');
//       $(this).css("transform", "translateY(0vh)");
//     }
//   });

//   $('#result').on('click', 'li', function () {
//     var click_text = $(this).text().split('|');
//     $('#searchdata').val($.trim(click_text[0]));
//     $("#result").html('');
//   });
// });


// var cartOpen = false;
// var numberOfProducts = 0;

// $('body').on('click', '.js-toggle-cart', toggleCart);

// function toggleCart(e) {
//   e.preventDefault();
//   if (cartOpen) {
//     closeCart();
//     return;
//   }
//   openCart();
// }

// function openCart() {
//   cartOpen = true;
//   $('body').addClass('open');
// }

// function closeCart() {
//   cartOpen = false;
//   $('body').removeClass('open');
// }







