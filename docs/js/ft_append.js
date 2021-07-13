function ft_append_oneline(str_output) {
	const newEle = document.createElement('p');
	newEle.classList.add("history" + dentaku.history_id);
	const parent = document.getElementById("result");
	const reference = document.querySelector(".history");
	parent.insertBefore(newEle, reference);
	document.getElementsByClassName("history" + dentaku.history_id)[0].textContent = str_output
	dentaku.history_id += 1
}

function ft_append(v) {
	html_v = document.querySelector("input").value
	if (ft_append_filter(v, html_v))
		return
	if (ft_check_continue_zero(v, html_v) === 2)
		html_v = document.querySelector("input").value = html_v.slice(0, -1) + String(v)
	else
		html_v = document.querySelector("input").value += String(v)
	if (Number(v) >= -1 || v === "00")
		ft_v_is_digit(v, html_v)
	else
		ft_v_isnot_digit(v, html_v)
	function ft_v_is_digit(v, html_v) {
		dentaku.last_word_is_digit = true
		if (dentaku.last_v === 0 && dentaku.float_cnt === 0 && html_v.length == 0)
			dentaku.last_v = v
		else if (v === "00") {
			if (html_v.split(/[+/*-]/).slice(-1)[0].indexOf('.') > -1)
				dentaku.float_cnt += 2
			dentaku.last_v = Number(String(dentaku.last_v) + "00")
		} else if (dentaku.float_cnt > 0) {
			if (dentaku.float_cnt === 1) {
				if (dentaku.last_v === 0)
					dentaku.last_v = Number(String(dentaku.last_v) + "0." + String(v))
				else
					dentaku.last_v = Number(String(dentaku.last_v) + '.' + String(v))
			} else
				ft_update_last_v(html_v)
			dentaku.float_cnt += 1
		} else
			dentaku.last_v = Number(html_v.split(/[\D]/).slice(-1))

	}

	function ft_v_isnot_digit(v, html_v) {
		dentaku.last_word_is_digit = false
		if (v != '.') {
			dentaku.float_cnt = 0
			dentaku.last_v = 0
		} else {
			if (dentaku.last_v === 0)
				document.querySelector("input").value = html_v.slice(0, -2) + "0."
			dentaku.float_cnt = 1
		}
	}
}