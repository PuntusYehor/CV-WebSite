
"use strict"

function testWebP(callback) {
	var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	
	}
	
	testWebP(function (support) {
	if (support == true) { document.querySelector('body').classList.add('webp'); }else{ document.querySelector('body').classList.add('no-webp'); }
	
	});

let $burgerButton = document.querySelector('.icon-menu');
let $menuBody = document.querySelector('.menu__body');

if($burgerButton) {
	$burgerButton.addEventListener('click', function(){
		document.body.classList.toggle('_lock');
		$burgerButton.classList.toggle('_active');
		$menuBody.classList.toggle('_active');
	});
}
















	