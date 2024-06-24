var box = document.querySelector("input");
var btn = document.querySelector("button");
var h2list = document.querySelector("h2");
var h3list = document.querySelector("h3");
var h4list = document.querySelector("h4");
var list = document.querySelector("ul");
var msg = document.querySelector("h2");
var error = document.querySelector("h3");
var eror = document.querySelector("h4");

btn.addEventListener("click", function () {
    
    h2list.innerHTML = " ";
    h3list.innerHTML = " ";
    h4list.innerHTML = " ";

    if (box.value >= 0 && box.value <= 17) {
        error.innerHTML = "দুঃখিত! আপনি ভোট দিতে পারবেন না 😔";
      } else if (box.value >= 18 && box.value <= 100) {
        msg.innerHTML = "অভিনন্দন! আপনি ভোট দিতে পারবেন 😊";
      } else if (box.value > 100) {
        eror.innerHTML = "আপনি কি বেঁচে আছেন?🤔";
      } else {
        eror.innerHTML = "সঠিক নাম্বার দিন";
      }



    // if(box.value >= 18){
    //     msg.innerHTML = "অভিনন্দন! আপনি ভোট দিতে পারবেন 😊";
    // }
    //  else {
    //     error.innerHTML = "দুঃখিত! আপনি ভোট দিতে পারবেন না 😔";
    // }
    list.innerHTML = " ";
    for(i = 1; i <= 10; i++){
        list.innerHTML += `<li> ${box.value} x ${i} = ${ box.value * i} </li>`;
    }
});