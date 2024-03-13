import fetch from 'node-fetch';
const response = await fetch('https://live.rawmotion.com/api/v1/event/c6841761-dcde-11ee-a3c3-637f5a123fa5/contests');
const data = await response.json();

console.log(data);
