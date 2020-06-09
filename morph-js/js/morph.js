function morphTo(id, morphShape) {
	if (morphShape=='circle') {
	document.getElementById(id).style.borderRadius="100%";
	}
	if (morphShape=='blob') {
	document.getElementById(id).style.borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%";
	}
	if (morphShape=='square') {
	document.getElementById(id).style.borderRadius="5%";
	}
}