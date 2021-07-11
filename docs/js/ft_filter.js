// function filter(v) {
// 	if ((dentaku.last_word_is_digit === false && (!(Number(v) >= -1 || v === '00'))) ||
// 		(String(v)[0] === '0' && dentaku.last_v === 0) ||
// 		(v === '.' && dentaku.float_cnt > 0))
// 		return (1)
// 	return (0)
// }



function ft_signs_filter() {
	if (dentaku.last_is_digit === false)
		return ft_error(3)
	return 0
}

function ft_append_filter(html_v, v) {
	let errno = 0
	if (errno = ft_check_continue_sign(v, html_v)) {
		if (errno == 1)
			return ft_error(4)
		if (errno == 2)
			return ft_error(5)
		else if (errno == 3)
			return ft_error(6)
	} else if (ft_check(v, html_v))
		return ft_error(7)
	else if (ft_check(v))
		return ft_error(8)
	return 0
}