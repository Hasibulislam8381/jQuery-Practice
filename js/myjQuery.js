$(document).ready(function () {
    //our jQuery code here
    //$('selector').action()

    //clicks on all the p elements
    console.log("We are using jQuery");
    $("p").click();
    $("p").click(function () {
        console.log("You Clicked on p", this);
        //$(this).hide();
    });
    // there are three main types of selector in jQuery
    // 1.Elements selector
    // 2.Id selector
    // 3.class selecror

    //1. Elements selector - this is an example of element selector which click on all p
    // $("p").click();
    //2. Id selector - this is an example of id selecto
    //$("#second").click();

    //3.CLass selector - this is an example of id selector
    //$(".odd").click();

    //others selector
    //$("*").click();
    //$("p.odd").click();
    //$("p:first").click();
});