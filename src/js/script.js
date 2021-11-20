

$( document ).ready(function() {
	$('#datetimepicker1').datetimepicker({
        defaultDate: moment(),
        sideBySide: true
        });
		$('#coupon-logo').attr('src', 'img/1.bmp');
	JsBarcode("#barcode", "98760218018426061121990",{fontOptions:"bold"});
	let today = new Date();
	
	_time = setZero(today.getHours()) + ":" + setZero(today.getMinutes()) + ":" + setZero(today.getSeconds())
	$("#time").text(_time)
	_date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
	$("#date").text(_date)
	$("#staticDigits").val("987602180"); //demo purpose
	
	
	$("#generate").submit(function(event) {
		// alert( "Handler for .submit() called." );
		let amount = $("#amount").val()		
		// let description = $("#description").val();
		// if(description && description.length > 0)
		// 	$(".description").text(description);
		if(amount && amount > 0){
			let texmaxia = String(amount/0.03);
		    $("#temaxia").text(texmaxia.substr(0,3));
			let amountLogo = String(amount);
			let _firstDigits = amountLogo.substr(0,1);
			_firstDigits = setZero(_firstDigits);
			let _secondDigits = amountLogo.substr(1,4);
			_secondDigits = setZero(_secondDigits);
		    $("#amountLogo").text(`${_firstDigits}_${_secondDigits}`);
			amountLogo
		}
		 let couponDate = new Date($("#datetimepicker1").val());



		const staticNumbers =  $("#staticDigits").val(); ;

		
		
		today = new Date();
		_time = setZero(couponDate.getHours()) + ":" + setZero(couponDate.getMinutes()) + ":" + setZero(couponDate.getSeconds())
		$("#time").text(_time)
		_date = couponDate.getDate() + "/" + (couponDate.getMonth() + 1) + "/" + couponDate.getFullYear()
		$("#date").text(_date)
		
		
		
		//Date format Hours | Minutes | Seconds | Day | Month | Year
		let date = setZero(couponDate.getHours()) + "" + setZero(couponDate.getMinutes()) + "" + setZero(couponDate.getMilliseconds()) + "" + setZero(couponDate.getDate()) + "" + setZero((couponDate.getMonth() + 1)) + "" + couponDate.getFullYear();
		JsBarcode("#barcode", staticNumbers + date + amount);
		event.preventDefault();
		// $("#generate").trigger('reset');
	});

	$("#Download").click(function(){
		let container = document.getElementById("htmltoimage"); // full page 
		let scale = $('#scale').find(":selected").text();
		console.log(scale)
		html2canvas(container,{ allowTaint: true,scale:scale }).then(function(canvas) {
		
			let link = document.createElement("a");
			document.body.appendChild(link);
			link.download = "coupon.png";
			link.href = canvas.toDataURL("image/png");
			link.target = '_blank';
			link.click();
		});
	});


	$("#coupon-margin").on("change paste keyup", function() {
		console.log($(this).val()); 
		$(".static-image").css("margin-bottom",$(this).val() + "px")
	 });

	 $('#type').on('change', function() {
		$('#coupon-logo').attr('src', 'img/' + this.value + '.bmp');
	  });
	//  


	
	function setZero(n) {
		return n < 10 ? "0" + n : n;
	}

});

