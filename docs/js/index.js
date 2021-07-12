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
	try {
		if (ft_check_is_float(v))
			return;
		if (dentaku.memflg === true && v[0] != "M") {
			document.querySelector("input").value = dentaku.mem_not_m
			dentaku.memflg = false
		}
		let html_v = document.querySelector("input").value
		switch (v) {
			case 'AC':
				ft_exec_clear("", "AC")
				break;
			case 'C':
				ft_exec_clear(html_v.slice(0,
					-(html_v.split(/[-+/* ]/).slice(-1)[0].length + ft_check_is_minus(dentaku.last_v))), "C")
				break;
			case '▶︎':
				ft_back_one(html_v)
				break;
			case '=':
				ft_exec_equal(html_v)
				break;
			case 'M-':
			case 'M+':
			case 'MC':
			case 'MR':
				ft_exec_m(v, html_v)
				break;
			case 'DELETE':
				if (window.confirm("履歴を削除しますか？")) {
					location.reload()
				}
				break;
			case '%':
			case '+/-':
			case 'RADICAL':
			case 'EXCL_TAX':
			case 'INCL_TAX':
			case 'SQU':
			case 'FACT':
			case 'SIN':
			case 'COS':
			case 'TAN':
				ft_exec_options(html_v, v)
				break;
			case 'PI':
				ft_exec_option_pi(html_v)
				break;
			default:
				if (document.querySelector("input").value === "0") {
					document.querySelector("input").value = ""
					ft_update_flg("")
				}
				ft_append(v, html_v)
		}
		if (ft_check_is_infinity(dentaku.last_v)) {
			ft_error(2)
			ft_exec_clear("", "AC")
		}
		console.log(dentaku.last_v, dentaku.float_cnt, dentaku.last_word_is_digit)
	} catch (e) {
		console.log(dentaku.last_v, dentaku.float_cnt, dentaku.last_word_is_digit)
		console.log(e)
		ft_error(100)
		ft_exec_clear("", "AC")
	}
}