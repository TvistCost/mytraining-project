const cityId = {
	2643743: 'London',
	625144: 'Minsk',
	706483: 'Kharkiv',
	703448: 'Kyiv',
}

let a = document.createElement('select');
a.classList.add('cityChoice');
for (let key in cityId) {
	a.innerHTML += `<option value="${key}">${cityId[key]}</option>`;
}
document.querySelector('.city').appendChild(a);

const param = {
	'url': 'https://api.openweathermap.org/data/2.5/',
	'appid': '0febc99270fe85f58cd99358d3dd9a20'
}

function getWeather() {
	const cityChoice = document.querySelector('.cityChoice').value;
	fetch(`${param.url}weather?id=${cityChoice}&units=metric&APPID=${param.appid}`)
		.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
	// здесь вы выводите на страницу
	document.querySelector('.package-name').textContent = data.name;
	document.querySelector('.degrees').innerHTML = Math.round(data.main.temp) + '&deg';
	document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
	document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('.cityChoice').onchange = getWeather;