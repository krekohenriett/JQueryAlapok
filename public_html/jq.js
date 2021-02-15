//$(document).ready(function(){
//init();
//});
$(function () {
//egéresemények

    //init helyére akár egy egész funcitiont is be lehet írni
    // $("#kezd").click(init);

    $("#kezd").on("click", init);


});

function init() {
    //eltávolítások:
    $("#jatekter").empty();
    //ezek vannak:
//    $("div").eq(0).text("Ide írd.");
//        $("div").eq(0).html("Ide <br>írd.</br>");
//            $("div").eq(0).append("Ide írd.");
//                $("div").eq(0).val("Ide írd.");
//
//    alert($("div").eq(0).text());
//        alert($("div").eq(0).html());

    for (var i = 0; i < 5; i++) {
//        $("#jatekter").html("img src='led kitoltendo.jpg' alt='kep'>");

//        $("#jatekter").append("<img src='led kitoltendo.jpg' alt='kep'>");
        //            $("#jatekter").append("<img>");

        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");

        //       $("jatekter img").eq(i).attr("src","led kitoltendo.jpg");
        //      $("jatekter img").eq(i).attr("alt","kep");
        $("#jatekter img").eq(i).attr({"src": "led kitoltendo.jpg", "alt": "kep"});
    }
    //$("#jatekter div").css("background-color","blue");
    $("#jatekter div").css({"background-color": "blue", "padding": "2%"});

    //ha felé viszem az egeret..:
    $("#jatekter div").mouseenter(
            function(){
            $(this).css({"background-color":"red", "padding":"2%"});
            
            }
            );
            
    $("#jatekter div").mouseenter(
            function () {
                $(this).css({"background-color": "cyan", "padding": "2%"});
            }
    );
    
    $("#jatekter div").click(
            function(){
                $(this).hide(1000);
                $(this).show(1000);
            }
            );

}