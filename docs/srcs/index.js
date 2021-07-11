class Caliculator {
	constructor() {
		this.last_word_is_digit = true
		this.history_id = 0
		this.last_v = 0
		this.mem_m = 0
		this.mem_not_m = ""
		this.float_cnt = 0
	}
}

dentaku = new Caliculator()

function press_key(v) {
	if (!(Number.isInteger(dentaku.last_v)) && v === '.')
		return;
	if (dentaku.memflg === true && v[0] != "M") {
		document.querySelector("input").value = dentaku.mem_not_m
		dentaku.memflg = false
	}
	let html_v = document.querySelector("input").value
	if (v === 'AC')
		ft_exec_clear("", "AC")
	else if (v === 'C')
		ft_exec_clear(html_v.slice(0, -(html_v.split(/[-+/* ]/).slice(-1)[0].length)), "C")
	else if (v === '▶︎') {
		ft_back_one(html_v)
	} else if (v === '=')
		ft_exec_equal(html_v)
	else if (v === 'M-' || v === 'M+' || v === 'MC' || v === 'MR')
		ft_exec_m(v, html_v)
	else if (v === '%' || v === "+/-" ||
		v === 'RADICAL' || v === 'EXCL_TAX' ||
		v === 'INCL_TAX' || v === 'SQU' || v === 'FACT' ||
		v === 'SIN' || v === 'COS' || v === 'TAN' || v == 'PI') {
			ft_exec_signs(html_v, v)
	} else {
		if (document.querySelector("input").value === "0") {
			document.querySelector("input").value = ""
			ft_update_flg("")
		}
			ft_append(v, html_v)
	}
	if (dentaku.last_v == Infinity) {
		ft_error(2)
		ft_exec_clear("", "AC")
	}
	console.log(dentaku.last_v, dentaku.float_cnt, dentaku.last_word_is_digit)
}