const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const eyesCovered = document.getElementById('monkey');

grandparent.addEventListener('click', e => {
	console.log('Grandparent');
});

parent.addEventListener('click', e => {
	console.log('Parent');
});

child.addEventListener('click', e => {
	console.log('Child');
	//e.stopPropagation();
});

eyesCovered.addEventListener('click', () => {
	if (eyesCovered.innerText === '🙈') {
	alert("I don't see you");
	eyesCovered.innerText = '🙉';
	setTimeout(() => {
		alert("Now I do!")
	},2000);
	}
	else if (eyesCovered.innerText === '🙉') {
		eyesCovered.innerText = '🙈';
		setTimeout(() => {
			alert("I don't see you");
		},2000);
	};
});