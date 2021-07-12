function ft_option_filter(html_v, mode) {
	if (dentaku.last_word_is_digit === false && mode == 'OP')
		return ft_error(3)
	else if (html_v.replace(/[0-9]/g, "").slice(-1) == '-' && mode == 'OP')
	{
		console.log(html_v.replace(/[0-9]/g, ""))
		return ft_error(11)
	}
	else if ((dentaku.last_word_is_digit === true || html_v.slice(-1) === '.') && mode == 'PI')
		return ft_error(9)
	return 0
}

function ft_append_filter(html_v, v) {
	let errno = 0
	if (errno = ft_check_continue_sign(v, html_v)) {
		if (errno === 1)
			return ft_error(4)
		if (errno === 2)
			return ft_error(5)
		else if (errno === 3)
			return ft_error(6)
	} else if (ft_check_zero_start(v, html_v))
		return ft_error(7)
	else if (ft_check_signs_start(v, html_v) && v !== '.')
		return ft_error(8)
	return 0
}