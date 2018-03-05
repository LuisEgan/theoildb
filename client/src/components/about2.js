document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});

document.querySelectorAll("input[name=question]").forEach(function(item, i) {
    item.addEventListener("change" , function(){
        document.querySelectorAll("p.response").forEach(function(element, j){
            element.classList.add("fixed-height");
        });
    item.nextElementSibling.nextElementSibling.classList.remove("fixed-height");
    var dheight = item.nextElementSibling.nextElementSibling.getAttribute('data-height');
    item.nextElementSibling.nextElementSibling.setAttribute("height", dheight);
    item.querySelector("#r1").setAttribute("clientHeight", dheight);
    });
});

document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});

////////////

$("input[name=question]").on("change", function(){
    $("p.response").removeAttr("style");
    var target = $(this).next().next();
    target.height(target.attr("data-height"));
});

document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});


////////////

document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});

document.querySelector("#q1").addEventListener("change" , function() {
    console.log('Pressed 1');
    document.querySelector("#r1").classList.remove("fixed-height");
    document.querySelector("#r2").classList.add("fixed-height");
    var dheight = document.querySelector("#r1").getAttribute('data-height');
    document.querySelector("#r1").setAttribute("height", dheight);
    document.querySelector("#r1").setAttribute("clientHeight", dheight);
});

document.querySelector("#q2").addEventListener("change" , function() {
    console.log('Pressed 2');
    document.querySelector("#r2").classList.remove("fixed-height");
    document.querySelector("#r1").classList.add("fixed-height");
    var dheight = document.querySelector("#r2").getAttribute('data-height');
    document.querySelector("#r1").setAttribute("height", dheight);
    document.querySelector("#r2").setAttribute("clientHeight", dheight);
});

document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});










document.querySelectorAll("input[name=question]").forEach(function(item, i) {
    item.addEventListener("change" , function(){
      document.querySelectorAll("p.response").forEach(function(element, j){
        element.removeAttribute("style");
      });
      var target = this.nextElementSibling.nextElementSibling;
      var dheight = this.getAttribute('data-height');
      target.setAttribute("height", dheight);
    });
});

document.querySelectorAll('.response').forEach(function(item, i){
    item.classList.remove("fixed-height");
    var height = item.clientHeight;
    item.setAttribute("data-height", height);
    item.classList.add("fixed-height");
});