import _ from 'lodash';
import './style.css';
import Icon from './icon.jpeg';
import printMe from './print.js';
import {cube} from './math.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	//Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], '');
	element.classList.add('hello');
	var myIcon = new Image();
	myIcon.src = Icon;
	btn.innerHTML = 'Click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);
	element.appendChild(myIcon);
	return element;
}

function getComponent() {
	var element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	return element;
}
let element = component();
document.body.appendChild(element);
document.body.appendChild(getComponent());

if(module.hot){
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module');
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	})
}
