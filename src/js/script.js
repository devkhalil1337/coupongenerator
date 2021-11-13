

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
		// 	let texmaxia = amount/0.03
		//     $("#temaxia").text(texmaxia)
		// }
		 let couponDate = new Date($("#datetimepicker1").val());



		const staticNumbers =  $("#staticDigits").val(); ;

		
		
		today = new Date();
		_time = setZero(today.getHours()) + ":" + setZero(today.getMinutes()) + ":" + setZero(today.getSeconds())
		$("#time").text(_time)
		_date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
		$("#date").text(_date)
		
		
		
		//Date format Hours | Minutes | Seconds | Year | Month | Day
		let date = couponDate.getHours() + "" + couponDate.getMinutes() + "" + couponDate.getSeconds() + "" + couponDate.getFullYear() + "" + (couponDate.getMonth() + 1) + "" + couponDate.getDate();
		JsBarcode("#barcode", staticNumbers + date + amount);
		event.preventDefault();
		// $("#generate").trigger('reset');
	});

	$("#Download").click(function(){
		let container = document.getElementById("htmltoimage"); // full page 
		html2canvas(container,{allowTaint : true}).then(function(canvas) {
		
			let link = document.createElement("a");
			document.body.appendChild(link);
			link.download = "coupon.png";
			link.href = canvas.toDataURL("image/png");
			link.target = '_blank';
			link.click();
		});
	})
	
	function setZero(n) {
		return n < 10 ? "0" + n : n;
	}

});

