function rotate(degree, x, y)
{
	let radian =  degree * (Math.PI / 180)
	let res_x = x * Math.cos(radian) - y * Math.sin(radian)
	let res_y = x * Math.sin(radian) + y * Math.cos(radian)
	return [res_x, res_y]
}
let degree = process.argv[2]
let x = process.argv[3]
let y = process.argv[4]
console.log(rotate(degree, x, y))