$(document).ready(function () {
    console.log("You are in a new file now");
    //our jQuery code here
    //$('selector').action()

    //clicks on all the p elements
    console.log("We are using jQuery");
    //$("p").click();
    // $("p").click(function () {
    //     console.log("You Clicked on p", this);
    //     //$(this).hide();
    // });
    // $("p").dblclick(function () {
    //     console.log("You double Clicked on p", this);
    //     //$(this).hide();
    // });
    // $("p").hover(function () {
    //     console.log("You hovered on:", this);
    //     //$(this).hide();
    // });

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

    //Events in jQuery
    //Mouse events= click,dblclick,mouseenter,mouseleave
    //keyboard events = keypress,keydown,keyup
    //form events = submit,change,focus,blur
    //documenr/windows events = load, resize,scroll,unload

    $('p').on(
        {
            click:function(){
                console.log('Thanks for clicking',this)
            },
            mouseleave:function(){
                console.log('Mouseleave');
            }
        }
    )

    // $('#wiki').hide(1000,function(){
    //     console.log('Hidden done');
    // });
    // $('#wiki').show(1000,function(){
    //     console.log('show done');
    // });
    $('#but').click(function(){
    //   $('#wiki').fadeOut(1000);
      //fadeOut()
      //fadeToggle()
      //fadeTo()
      //toggle
      //Inslide method -callback method(a message) is optional
    //   $('#wiki').slideToggle(1000);
      //slideUp,slideDown,slideToggle
      //Animate function in jQuery
    });
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'
    // },2000)
   // $('#ta').val()
//    $('#wiki').empty()
//    $('#wiki').remove()
//$('#wiki').css('color','blue')

});