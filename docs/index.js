class Caliculator {
constructor()
	{
		this.last_word_is_digit = true
		this.history_id = 0
		this.last_v = 0
		this.mem_m = 0
		this.mem_not_m = ""
		this.memflg = false
		this.floatflg = false
	}
	append(v, html_v)
	{
		if ((this.last_word_is_digit == false
			&& (!(Number.isInteger(v) || v == '00')))
			|| (this.last_v == 0 && (String(v)[0] == '0'))
			|| (html_v.length == 0 && !(Number.isInteger(v))))
			return ;
		document.querySelector("input").value += String(v)
		if(Number.isInteger(v) || v == '00')
		{
			this.last_word_is_digit = true
			if (this.last_v == 0)
				this.last_v = v
			else if (v == '00')
				this.last_v = 100 * this.last_v
			else
				this.last_v = 10 * this.last_v + v
		}
		else
		{
			this.last_word_is_digit = false
			if (v != '.')
				this.last_v = 0
		}
	}
	result(html_v)
	{
		if (this.last_word_is_digit == false || html_v.length == 0)
			return ;
		const f = new Function("return " + html_v)
		let v = f().toString()
		var newEle = document.createElement('p');
		newEle.classList.add('history' + this.history_id);
		var parent = document.getElementById('result');
		var reference = document.querySelector('.history');
		parent.insertBefore(newEle, reference);
		document.getElementsByClassName("history" + this.history_id)[0].textContent = html_v + "=" + v
		this.history_id += 1
		console.log(this.history_id)
		document.querySelector("input").value = v
		this.last_v = Number(v)
	}
	clear(v, str)
	{
		if (this.last_v == 0 && str != "AC")
			return ;
		document.querySelector("input").value = v
		this.last_v = 0
		if(str == "AC")
			this.last_word_is_digit = true
	}
	culc_signs(v, html_v)
	{
		function culc(v, last_v)
			{
				if (v == '%')
					digit = last_v / 100
				else if (v == '+/-')
					digit = -(last_v)
				else if (v == 'RADICAL')
					digit = Math.sqrt(last_v)
				else if (v == 'EXCL_TAX')
					digit = last_v / 1.08
				else if (v == 'INCL_TAX')
					digit = last_v * 1.08
				return (digit)
			}
			if (this.last_word_is_digit == false
				|| typeof(this.last_v) != "number"
				|| this.last_v == 0)
				return ;
			let digit = 0
			let last_len = String(this.last_v).length
			console.log(last_len)
			html_v = html_v.slice(0, -(last_len))
			digit = culc(v, this.last_v)
			document.querySelector("input").value = html_v + String(digit)
			this.last_v = digit
	}
}

dentaku = new Caliculator()

function exec_m(v, html_v)
{
	if (v == 'M-')
		dentaku.mem_m -= dentaku.last_v;
	else if (v == 'M+')
		dentaku.mem_m += dentaku.last_v;
	else if (v == 'MC')
		dentaku.mem_m = 0;
	else if (v == 'MR')
	{
		dentaku.mem_not_m = html_v
		document.querySelector("input").value = dentaku.mem_m;
		dentaku.memflg = true
	}
}

function press_key(v)
{
	if (dentaku.memflg == true && v[0] != "M")
	{
		document.querySelector("input").value = dentaku.mem_not_m
		dentaku.memflg = false
	}
	let html_v = document.querySelector("input").value
	if (v == 'AC')
		dentaku.clear("", "AC")
	else if (v == 'C')
		dentaku.clear(html_v.slice(0, -(String(dentaku.last_v).length)), "C")
	else if (v == '▶︎')
		document.querySelector("input").value = html_v.slice(0, html_v.length - 1)
	else if (v == '=')
		dentaku.result(html_v)
	else if (v == 'M-' || v == 'M+' || v == 'MC' || v == 'MR')
		exec_m(v, html_v)
	else if (v == '%' || v == "+/-"
				|| v == 'RADICAL' || v == 'EXCL_TAX'
				|| v == 'INCL_TAX')
		dentaku.culc_signs(v, html_v)
	else
		dentaku.append(v, html_v)
}