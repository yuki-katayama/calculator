function ft_update_flg(html_v) {
	this.last_word_is_digit = (Number(html_v.slice(-1)) > -1 && html_v !== "") ? true : false;
	if (String(this.last_v).indexOf(".") !== -1)
		this.float_cnt = (String(this.last_v).indexOf(".") != -1) ?
		String(this.last_v).length - String(this.last_v).indexOf(".") : 0;
	else if (this.float_cnt > 0)
		this.float_cnt = (html_v.slice(-1) === '.') ? 1 : 0;
}