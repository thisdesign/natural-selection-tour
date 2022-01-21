import fetch from 'node-fetch';
const response = await fetch('https://live.rawmotion.com/api/v1/event/4197b641-63ee-11eb-8590-0fa6623371ce/contests');
const data = await response.json();

console.log(data);
    