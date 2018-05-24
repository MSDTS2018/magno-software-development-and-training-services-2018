$(function() {

	var docHeight = document.documentElement.clientHeight
	var docWidth = document.documentElement.clientWidth

	console.log(docHeight)
	console.log(docWidth)

	$("#primaryContainer").height(docHeight);

	$("#content").height( docHeight * 0.8 );
	$("#content").css({
		'margin-top' : docHeight / 10,
		'margin-left' : docWidth / 12,
	});

	$("#navigation ul li").width( $("#header").width() )
})