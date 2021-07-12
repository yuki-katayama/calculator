function ft_exec_clear(html_v, v) {
	document.querySelector("input").value = html_v
	dentaku.last_v = dentaku.float_cnt = 0
	if (html_v.length === 0)
		dentaku.last_word_is_digit = true
	if (v === "AC") {
		dentaku.last_word_is_digit = true
		ft_append_oneline("↑==↑==↑==↑ AC ↑==↑==↑==↑")
	}
}