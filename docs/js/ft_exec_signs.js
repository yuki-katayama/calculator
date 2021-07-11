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
	else if (v == 'PI')
		digit = 3.14159
	return (digit)
}


function ft_exec_signs(html_v, v) {
	if (dentaku.last_word_is_digit === false)
		return;
	let digit = 0
	let last_len = String(dentaku.last_v).length
	html_v = html_v.slice(0, -(last_len))
	try {
		digit = culc(v, dentaku.last_v)
	} catch (e) {
		if (e instanceof RangeError) {
			ft_error(1)
			ft_exec_clear("", "AC")
		}
	}
	document.querySelector("input").value = html_v + String(digit)
	dentaku.last_v = digit
	ft_update_flg(document.querySelector("input").value)
}