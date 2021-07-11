class Caliculator {
	constructor() {
		this.last_word_is_digit = false
		this.history_id = 0
		this.last_v = 0
		this.mem_m = 0
		this.mem_not_m = ""
		this.float_cnt = 0
	}
	append(v) {
		if ((this.last_word_is_digit === false
				&& (!(Number(v) >= -1 || v === '00')))
				|| (this.last_v === 0 && (String(v)[0] === '0')))
					return;
		let html_v = document.querySelector("input").value += String(v)
		if (Number(v) >= -1 || v === '00') {
			this.last_word_is_digit = true
			if (this.last_v === 0)
				this.last_v = v
			else if (v === '00')
				this.last_v = 100 * this.last_v
			else if (this.float_cnt >= 1)
			{
				console.log(this.float_cnt)
				if (this.float_cnt == 1)
					this.last_v = Number(String(this.last_v) + "." + String(v))
				else
					this.last_v = Number(String(this.last_v) + String(v))
				this.float_cnt += 1
			}
			else
				this.last_v = Number(html_v.split(/[\D]/).slice(-1))
		} else {
			this.last_word_is_digit = false
			if (v != '.')
				this.last_v = 0
			else
				this.float_cnt += 1
		}
	}
	add_oneline(html_v, v) {
		const newEle = document.createElement('p');
		newEle.classList.add('history' + this.history_id);
		const parent = document.getElementById('result');
		const reference = document.querySelector('.history');
		parent.insertBefore(newEle, reference);
		document.getElementsByClassName("history" + this.history_id)[0].textContent = html_v + "=" + v
		this.history_id += 1
	}
	result(html_v) {
		if (this.last_word_is_digit === false || html_v.length === 0)
			return;
		const f = new Function("return " + html_v)
		let v = f().toString()
		this.add_oneline(html_v, v);
		document.querySelector("input").value = v
		this.last_v = Number(v)
	}
	clear(html_v, v) {
		if (this.last_v === 0 && v !== "AC")
			return;
		document.querySelector("input").value = html_v
		this.last_v = this.float_cnt = 0
		if (v == "AC")
		{
			this.last_word_is_digit = true
			this.add_oneline("↑==↑==↑==↑==↑ AC ↑==↑==↑==↑=", "↑")
		}
	}
	update_flg(html_v) {
		this.last_word_is_digit = (Number(html_v.slice(-1)) > -1) ? true : false;
		this.float_cnt += (this.float_cnt > 0) ? -1 : 0;
	}
	culc_signs(v, html_v) {
		function factorial(n) {
			return (n != 1) ? n * factorial(n - 1) : 1;
		}
		function culc(v, last_v) {
			if (v === '%')
				digit = last_v / 100
			else if (v === '+/-')
				digit = -(last_v)
			else if (v === 'RADICAL')
				digit = Math.sqrt(last_v)
			else if (v === 'EXCL_TAX')
				digit = last_v / 1.08
			else if (v === 'INCL_TAX')
				digit = last_v * 1.08
			else if (v === 'SQU')
				digit = last_v * last_v
			else if (v === 'FACT')
				digit = factorial(last_v)
			else if (v === 'SIN')
				digit = Math.sin(last_v)
			else if (v === 'COS')
				digit = Math.cos(last_v)
			else if (v === 'TAN')
				digit = Math.tan(last_v)
			return (digit)
		}
		if (this.last_word_is_digit === false ||
			typeof (this.last_v) !== "number" ||
			this.last_v === 0)
			return;
		let digit = 0
		let last_len = String(this.last_v).length
		html_v = html_v.slice(0, -(last_len))
		digit = culc(v, this.last_v)
		document.querySelector("input").value = html_v + String(digit)
		this.last_v = digit
	}
}

dentaku = new Caliculator()

function exec_m(v, html_v) {
	if (v === 'M-')
		dentaku.mem_m -= dentaku.last_v;
	else if (v === 'M+')
		dentaku.mem_m += dentaku.last_v;
	else if (v === 'MC')
		dentaku.mem_m = 0;
	else if (v === 'MR') {
		dentaku.mem_not_m = html_v
		document.querySelector("input").value = dentaku.mem_m;
		dentaku.memflg = true
	}
}

function press_key(v) {
	if (!(Number.isInteger(dentaku.last_v)) && v === '.')
		return;
	if (dentaku.memflg === true && v[0] != "M") {
		document.querySelector("input").value = dentaku.mem_not_m
		dentaku.memflg = false
	}
	let html_v = document.querySelector("input").value
	if (v == 'AC')
		dentaku.clear("", "AC")
	else if (v == 'C')
		dentaku.clear(html_v.slice(0, -(String(dentaku.last_v).length)), "C")
	else if (v == '▶︎') {
		html_v = html_v.slice(0, html_v.length - 1)
		dentaku.update_flg(html_v)
		document.querySelector("input").value = html_v
		if (dentaku.last_v / 10 >= 1)
		{
			dentaku.last_v /= 10
			dentaku.last_v -= dentaku.last_v % 1 //おかしい
		}
		else if (html_v.split(/\D/)[0].length > 0 && Number(html_v.slice(-1)) > -1)
			dentaku.last_v = Number(html_v.split(/\D/).slice(-1))
		else
			dentaku.last_v = 0
	} else if (v == '=')
		dentaku.result(html_v)
	else if (v == 'M-' || v == 'M+' || v == 'MC' || v == 'MR')
		exec_m(v, html_v)
	else if (v == '%' || v == "+/-" ||
		v == 'RADICAL' || v == 'EXCL_TAX' ||
		v == 'INCL_TAX' || v == 'SQU' || v == 'FACT' ||
		v == 'SIN' || v == 'COS' || v == 'TAN')
		dentaku.culc_signs(v, html_v)
	else
		dentaku.append(v, html_v)
	console.log(dentaku.last_v)
}