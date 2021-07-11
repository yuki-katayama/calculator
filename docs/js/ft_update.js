function ft_update_flg(html_v) {
	dentaku.last_word_is_digit = (Number(html_v.slice(-1)) > -1 && html_v !== "") ? true : false;
	console.log(dentaku.last_word_is_digit)
	if (String(dentaku.last_v).indexOf(".") !== -1)
		dentaku.float_cnt = (String(dentaku.last_v).indexOf(".") != -1) ?
		String(dentaku.last_v).length - String(dentaku.last_v).indexOf(".") : 0;
	else if (dentaku.float_cnt > 0)
		dentaku.float_cnt = (html_v.slice(-1) === '.') ? 1 : 0;
}