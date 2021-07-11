function filter(v) {
	if ((dentaku.last_word_is_digit === false && (!(Number(v) >= -1 || v === '00'))) ||
		(String(v)[0] === '0' && dentaku.last_v === 0) ||
		(v === '.' && dentaku.float_cnt > 0))
		return (1)
	return (0)
}

function check1(num) {
	if (num == 0)
		throw "check1"
}

function check2(num) {
	if (num == 1)
		throw "check2"
}

function check3(num) {
	if (num == 2)
		throw "check3"
}

function filter(v) {
	if ((dentaku.last_word_is_digit === false && (!(Number(v) >= -1 || v === '00'))) ||
		(String(v)[0] === '0' && dentaku.last_v === 0) ||
		(v === '.' && dentaku.float_cnt > 0))
		return (1)
	return (0)
}

function filter(v) {
	try {
		check1(v)
		check2(v)
		check3(v)
		return 0
	} catch (error) {
		console.log(error)
		return 1
	}
}