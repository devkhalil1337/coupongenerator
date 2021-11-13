
 JsBarcode("#barcode", "98760218018426061121990");
 let today = new Date();
 _time = setZero(today.getHours()) + ":" + setZero(today.getMinutes())+ ":" + setZero(today.getSeconds())
 $("#time").text(_time)
 _date =   today.getDate() + "/" + (today.getMonth()+1) +"/"+today.getFullYear()
 $("#date").text(_date)


$("#generate").submit(function(event){
    // alert( "Handler for .submit() called." );
    let amount = $("#amount").val()
    // if(amount && amount > 0){
    //     $("#amountLogo").text("a2")
    // }
    const staticNumbers = "987602180";
    today = new Date();
    let date =  today.getHours() +""+ today.getMinutes() +""+  today.getSeconds() +""+  today.getFullYear()+""+ (today.getMonth()+1)+""+ today.getDate();

    _time = setZero(today.getHours()) + ":" + setZero(today.getMinutes())+ ":" + setZero(today.getSeconds())
    $("#time").text(_time)
    _date =   today.getDate() + "/" + (today.getMonth()+1) +"/"+today.getFullYear()
    $("#date").text(_date)
    JsBarcode("#barcode", staticNumbers + date + amount);
    event.preventDefault();
    $("#generate").trigger('reset');
    
})


function setZero(n){
    return n < 10 ? "0"+n: n;
}