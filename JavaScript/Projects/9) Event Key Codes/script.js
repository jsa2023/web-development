const insert = document.getElementById("insert")

window.addEventListener('keydown', (event) => {
    console.log(event);
    insert.innerHTML = `
    <div class="key"> 
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key </small>

    </div>

    <div class="key"> 
    ${event.keyCode}
    <small>event.keyCode </small>

</div>

<div class="key"> 
${event.code}
<small>event.code </small>

</div>
    `
})

// ******************************************************

// console.log($);


// // $(document).ready(function () {

//     // $('selector').action()

//     // $("p").click(function(){
//     //     // console.log("I clicked the p tag");
//     //     $('p').hide()
//     // })

//     // $('p').click(function(){
//     //     console.log("YOu have clicked", this);
//     //     $(this).toggle()
//     // })


//     /**
//      * There are 3 main type of query Selector in jQuery
//      * 1) Element selector
//      * 2) Class Selector
//      * 3) ID selector
//      */

//     // $(".items").click(function () {
//     //     const text = this.textContent;
//     //     $(this).text = text + `<button>${text}</button>`
//     //     console.log(this.textContent);
//     // })

//     /**
//      * $("CSS Selector").action()
//      * 
//      * 
//      */




// // })



// console.log($);


// $(document).ready(function(){

//     // $('p').click(function(){
//     //     // console.log("You clicked the p tag");
//     //     // $('p').hide()
//     //     // $('p').toggle()

//     //     $(this).hide()
//     //     console.log(this, "element");
//     // })


    
// //     /**
// //      * There are 3 main type of query Selector in jQuery
// //      * 1) Element selector
// //      * 2) Class Selector
// //      * 3) ID selector
// //      */


// // Events in Jquery

// /**
//  * mouse events = click, dblclick, mouseenter, mouseleave, hover
//  * keyboard events = keypress, keydown, keyup, MediaKeyStatusMap
//  * form events = submit, change, focus, blur
//  * document/window events = load, resize, scroll, unload
//  */

// // $('p').dblclick(function(){
// //     // console.log("I double clicked");
// //     $(this).addClass("newOne")

// // })
// // $('p').click(function(){
// //     // console.log("I double clicked");
// //     $(this).removeClass("newOne")
// // })

// $('.circle').mouseenter(function() {
//     console.log("Mouse entered");
//  $('.circle').addClass('bigCircle')
// })

// $('.circle').mouseleave(function() {
//  $('.circle').removeClass('bigCircle')
// })





// })