

$( document ).ready(function() {
	$('#datetimepicker1').datetimepicker();
	JsBarcode("#barcode", "98760218018426061121990");
	let today = new Date();
	
	_time = setZero(today.getHours()) + ":" + setZero(today.getMinutes()) + ":" + setZero(today.getSeconds())
	$("#time").text(_time)
	_date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
	$("#date").text(_date)
	$("#staticDigits").val("987602180"); //demo purpose
	
	
	$("#generate").submit(function(event) {
		// alert( "Handler for .submit() called." );
		let amount = $("#amount").val()		
		let description = $("#description").val();
		if(description && description.length > 0)
			$(".description").text(description);
		// if(amount && amount > 0){
		//     $("#amountLogo").text("a2")
		// }
		 let couponDate = new Date($("#datetimepicker1").val());



		const staticNumbers =  $("#staticDigits").val(); ;



		today = new Date();

		let date = couponDate.getHours() + "" + couponDate.getMinutes() + "" + couponDate.getSeconds() + "" + couponDate.getFullYear() + "" + (couponDate.getMonth() + 1) + "" + couponDate.getDate();

		_time = setZero(today.getHours()) + ":" + setZero(today.getMinutes()) + ":" + setZero(today.getSeconds())


		$("#time").text(_time)
		_date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()

		$("#date").text(_date)
		JsBarcode("#barcode", staticNumbers + date + amount);




		event.preventDefault();
		// $("#generate").trigger('reset');
	})
	
	function setZero(n) {
		return n < 10 ? "0" + n : n;
	}
});

