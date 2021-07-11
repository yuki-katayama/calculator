function ft_exec_clear(html_v, v)
{
	if (dentaku.last_v === 0 && v !== "AC")
		return;
	document.querySelector("input").value = html_v
	dentaku.last_v = dentaku.float_cnt = 0
	if (v === "AC") {
		dentaku.last_word_is_digit = true
		ft_append_oneline("↑==↑==↑==↑ AC ↑==↑==↑==↑")
	}
}