$(document).ready(()=>{
    $('#btn1').click(()=>{
        $('#tabOne').css("display","block");
        $('#tabTwo').css("display","none");
        $('#tabThree').css("display","none");
        $('#tabFour').css("display","none");
        $('#btn1').css("background-color","#159882");
        $('#btn2').css("background-color", "rgb(192, 192, 192);");
        $('#btn3').css("background-color", "rgb(192, 192, 192);");
        $('#btn4').css("background-color", "rgb(192, 192, 192);");
    });
    $('#btn2').click(()=>{
        $('#tabOne').css("display","none");
        $('#tabTwo').css("display","block");
        $('#tabThree').css("display","none");
        $('#tabFour').css("display","none");
        $('#btn2').css("background-color","#159841");
        $('#btn1').css("background-color", "rgb(192, 192, 192);");
        $('#btn3').css("background-color", "rgb(192, 192, 192);");
        $('#btn4').css("background-color", "rgb(192, 192, 192);");
    });
    $('#btn3').click(()=>{
        $('#tabOne').css("display","none");
        $('#tabTwo').css("display","none");
        $('#tabThree').css("display","block");
        $('#tabFour').css("display","none");
        $('#btn3').css("background-color","#459815");
        $('#btn1').css("background-color", "rgb(192, 192, 192);");
        $('#btn2').css("background-color", "rgb(192, 192, 192);");
        $('#btn4').css("background-color", "rgb(192, 192, 192);");
    });
    $('#btn4').click(()=>{
        $('#tabOne').css("display","none");
        $('#tabTwo').css("display","none");
        $('#tabThree').css("display","none");
        $('#tabFour').css("display","block");
        $('#btn4').css("background-color","#659888");
        $('#btn1').css("background-color", "rgb(192, 192, 192);");
        $('#btn2').css("background-color", "rgb(192, 192, 192);");
        $('#btn3').css("background-color", "rgb(192, 192, 192);");
    });
});