function ft_exec_equal(html_v) {
	if (dentaku.last_word_is_digit === false || html_v.length === 0)
		return;
	const f = new Function("return " + html_v)
	let v = f().toString()
	ft_append_oneline(html_v + "=" + v);
	document.querySelector("input").value = v
	dentaku.last_v = Number(v)
	dentaku.last_word_is_digit = true
	ft_update_flg(String(dentaku.last_v))
}