function ft_check_is_float()
{
	if (!(Number.isInteger(dentaku.last_v)) && v === '.')
		return 1
}

function ft_check_is_digit(v)
{
	if (Number(v) >= -1)
		return 1
	return 0
}

function ft_check_continue_sign(v, html_v) {
	if (html_v.slice(-1) == '.' && v === '.')
		return 1
	else if ((dentaku.last_word_is_digit === false && v === '.')
				|| (html_v.slice(-1) === '.' && !(ft_check_is_digit(v))))
		return 2
	else if (dentaku.last_word_is_digit === false && !(ft_check_is_digit(v)))
		return 3
	return 0
}

function ft_check(v, html_v) {
	if (String(v)[0] === '0' && dentaku.last_v === 0)
		return 1
	return 0
}

function check3(v) {
	if (v === '.' && dentaku.float_cnt > 0)
		return 1
	return 0
}