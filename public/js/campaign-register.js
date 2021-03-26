// inputs start

        // facebook starts

const facebook_price = document.getElementById('facebook_price')
let fb_price = document.querySelector('.fb-price')
let facebook_total = document.getElementById('facebook_total')
let total = ''

facebook_price.addEventListener('keyup', () => {
  
  if(facebook_price.value < 400) {

      
    return fb_price.innerHTML = "Facebook marketing charges are 400 rs a day atleast"
    
  }
    fb_price.innerHTML = ""
    facebook_price.value
    console.log(facebook_price.value)
})


let facebook_marketing_days = document.getElementById('facebook-marketing-days')


function fbtotal() {
  total = parseInt(facebook_price.value) * parseInt(facebook_marketing_days.value)
  facebook_total.value = parseInt(total) 
}
// function fbtotals() {
//   let total = parseInt(facebook_price.value) * parseInt(facebook_marketing_days.value)
//   facebook_total.value = parseInt(total) 
// }


         // Instagram starts


  const instagram_price = document.getElementById('instagram_price')
  let insta_price = document.querySelector('.insta-price')
  let instagram_total = document.getElementById('instagram_total')
  
  instagram_price.addEventListener('keyup', () => {
    if(instagram_price.value < 500) {
      insta_price.innerHTML = "instagram marketing charges are 500 rs a day atleast"
      return
    }
      insta_price.innerHTML = ""
      instagram_price.value
      // console.log(instagram_price.value)
  })
  
  
  let instagram_marketing_days = document.getElementById('instagram-marketing-days')
  
  function instatotal() {
    let total = parseInt(instagram_price.value) * parseInt(instagram_marketing_days.value)
    instagram_total.value = total
  }
  

               // Instagram ends




               // Linkedin Starts

               const linkedin_price = document.getElementById('linkedin_price')
               let link_price = document.querySelector('.link-price')
               let linkedin_total = document.getElementById('linkedin_total')
               
               linkedin_price.addEventListener('keyup', () => {
                 if(linkedin_price.value < 500) {
                  return link_price.innerHTML = "linkedin marketing charges are 500 rs a day atleast"
                   
                 }

                 else{
                  link_price.innerHTML = ""
                  return linkedin_price.value
                  console.log(linkedin_price.value)

                 }
                                 })
               
               
               let linkedin_marketing_days = document.getElementById('linkedin-marketing-days')
               
               function linktotal() {
                 let total = parseInt(linkedin_price.value) * parseInt(linkedin_marketing_days.value)
                 linkedin_total.value = total
               }


               // Linkedin Ends




               // pinterest starts



               const pinterest_price = document.getElementById('pinterest_price')
               let pin_price = document.querySelector('.pin-price')
               let pinterest_total = document.getElementById('pinterest_total')
               
               pinterest_price.addEventListener('keyup', () => {
                 if(pinterest_price.value < 500) {
                   pin_price.innerHTML = "pinterest marketing charges are 500 rs a day atleast"
                   return
                 }
                   pin_price.innerHTML = ""
                   pinterest_price.value
                   console.log(pinterest_price.value)
               })
               
               
               let pinterest_marketing_days = document.getElementById('pinterest-marketing-days')
               
               function pintotal() {
                 let total = parseInt(pinterest_price.value) * parseInt(pinterest_marketing_days.value)
                 pinterest_total.value = total
               }
               
               

                              // pinterest ends
                              
                              



                              // email starts



                              const email_price = document.getElementById('email_price')
                              let em_price = document.querySelector('.em-price')
                              let email_total = document.getElementById('email_total')
                              
                              email_price.addEventListener('keyup', () => {
                                if(email_price.value < 500) {
                                  em_price.innerHTML = "email marketing charges are 500 rs a day atleast"
                                  return
                                }
                                  em_price.innerHTML = ""
                                  email_price.value
                                  console.log(email_price.value)
                              })
                              
                              
                              let email_marketing_days = document.getElementById('email-marketing-days')
                              
                              function emtotal() {
                                let total = parseInt(email_price.value) * parseInt(email_marketing_days.value)
                                email_total.value = total
                              }                          



                              // email ends




                              // /seo starts



                              const seo_price = document.getElementById('seo_price')
                              let se_price = document.querySelector('.se-price')
                              let seo_total = document.getElementById('seo_total')
                              
                              seo_price.addEventListener('keyup', () => {
                                if(seo_price.value < 500) {
                                  se_price.innerHTML = "seo marketing charges are 500 rs a day atleast"
                                  return
                                }
                                  se_price.innerHTML = ""
                                  seo_price.value
                                  console.log(seo_price.value)
                              })
                              
                              
                              let seo_marketing_days = document.getElementById('seo-marketing-days')
                              
                              function setotal() {
                                let total = parseInt(seo_price.value) * parseInt(seo_marketing_days.value)
                                seo_total.value = total
                              }
                              
                              
                             // seo ends
                             
                             

                              

                             // smo starts


                             const smo_price = document.getElementById('smo_price')
                             let sm_price = document.querySelector('.sm-price')
                             let smo_total = document.getElementById('smo_total')
                             
                             smo_price.addEventListener('keyup', () => {
                               if(smo_price.value < 500) {
                                 sm_price.innerHTML = "smo marketing charges are 500 rs a day atleast"
                                 return
                               }
                                 sm_price.innerHTML = ""
                                 return smo_price.value
                                 console.log(smo_price.value)
                             })
                             
                             
                             let smo_marketing_days = document.getElementById('smo-marketing-days')
                             
                             function smtotal() {
                               let total = parseInt(smo_price.value) * parseInt(smo_marketing_days.value)
                               smo_total.value = total
                             }


                             // smo ends



// inputs end

// var x, i, j, l, ll, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /*for each element, create a new DIV that will act as the selected item:*/
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /*for each element, create a new DIV that will contain the option list:*/
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /*for each option in the original select element,
//     create a new DIV that will act as an option item:*/
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /*when an item is clicked, update the original select box,
//         and the selected item:*/
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//       /*when the select box is clicked, close any other select boxes,
//       and open/close the current select box:*/
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
// }
// function closeAllSelect(elmnt) {
//   /*a function that will close all select boxes in the document,
//   except the current select box:*/
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);

// select form starts here

const country = document.getElementById('country-select')
const zone = document.querySelector('.zone-select')
const stateEast = document.querySelector('.east-state-select')
const stateWest = document.querySelector('.west-state-select')
const stateNorth = document.querySelector('.north-state-select')
const stateSouth = document.querySelector('.south-state-select')



function func() {
	if(zone.value === 'East'){
	stateEast.classList.remove('invisible')
	stateWest.classList.add('invisible')
	stateNorth.classList.add('invisible')
	stateSouth.classList.add('invisible')
}

else if(zone.value === 'West'){
	stateEast.classList.add('invisible')
	stateWest.classList.remove('invisible')
	stateNorth.classList.add('invisible')
	stateSouth.classList.add('invisible')
}
else if(zone.value === 'North'){
	stateEast.classList.add('invisible')
	stateWest.classList.add('invisible')
	stateNorth.classList.remove('invisible')
	stateSouth.classList.add('invisible')
}
else{
	stateEast.classList.add('invisible')
	stateWest.classList.add('invisible')
	stateNorth.classList.add('invisible')
	stateSouth.classList.remove('invisible')
}
}

if(country.value === 'India'){
	zone.classList.remove('invisible')
}



// inputs

