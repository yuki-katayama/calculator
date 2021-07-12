function ft_back_one(html_v) {
	html_v = html_v.slice(0, html_v.length - 1)
	document.querySelector("input").value = html_v
	if (ft_check_is_digit(html_v.slice(-1)) || html_v.slice(-1) === '.')
		ft_update_last_v(html_v)
	else
		dentaku.last_v = 0
	ft_update_flg(html_v)
}