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



console.log($);


$(document).ready(function(){

    // $('selector').action()

    // $("p").click(function(){
    //     // console.log("I clicked the p tag");
    //     $('p').hide()
    // })

// $('p').click(function(){
//     console.log("YOu have clicked", this);
//     $(this).toggle()
// })


/**
 * There are 3 main type of query Selector in jQuery
 * 1) Element selector
 * 2) Class Selector
 * 3) ID selector
 */

    $(".items").click(function() {
        const text = this.textContent;
        $(this).text = text + `<button>${text}</button>`
        console.log(this.textContent);
    })

})



