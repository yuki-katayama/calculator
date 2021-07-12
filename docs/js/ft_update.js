function ft_update_flg(html_v) {
	dentaku.last_word_is_digit = (ft_check_is_digit(html_v.slice(-1)) && html_v !== "") ? true : false;
	if (String(dentaku.last_v).indexOf(".") !== -1)
		dentaku.float_cnt = (String(dentaku.last_v).indexOf(".") != -1) ?
							String(dentaku.last_v).length - String(dentaku.last_v).indexOf(".") : 0;
	else if (dentaku.float_cnt > 0)
		dentaku.float_cnt = (html_v.slice(-1) === '.') ? 1 : 0;
}

function ft_update_last_v(html_v)
{
	value = html_v.split(/[+/* ]/).slice(-1)[0]
	if ((ft_check_is_digit(value) || isNaN(Number(value))))
		dentaku.last_v = Number(value.split(/[-]/).slice(-1))
	else
		dentaku.last_v = Number(value)
}