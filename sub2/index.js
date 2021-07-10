function rotate(degree, x, y)
{
	let radian =  degree * (Math.PI / 180)
	let res_x = x * Math.cos(radian) - y * Math.sin(radian)
	let res_y = x * Math.sin(radian) + y * Math.cos(radian)
	console.log(res_x, res_y)
}
let degree = 90
console.log(rotate(degree, -30, -39))