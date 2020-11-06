resultSumm = 0;
function checkSumm() {
	if (resultSumm>=100) {
		resultSumm=100;
	}
	if (resultSumm<=0) {
		resultSumm=0;
	}
	$('.j-bar').width(resultSumm+'%');
	$('.j-text').text(resultSumm+'%');
}


$('.j-btn1').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm+1;
	checkSumm();

});

$('.j-btn3').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm+3;
	checkSumm();
});

$('.j-btn7').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm+7;
	checkSumm();
});

$('.j-btn-1').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm-1;
	checkSumm();

});

$('.j-btn-3').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm-3;
	checkSumm();
});

$('.j-btn-7').click(function() {
	console.log('Привет1');
	resultSumm=resultSumm-7;
	checkSumm();
});

