class Caliculator {
	constructor()
	{
		this.last_word_is_digit = true
		this.last_value = 0
		this.mem = 0
		this.memflg = false
	}
	append(v)
	{
		if ((this.last_word_is_digit == false && !(Number.isInteger(v)))
			|| (this.last_value == 0 && (v == '0')))
			return
		document.querySelector("input").value += v
		if(Number.isInteger(v))
		{
			this.last_word_is_digit = true
			if (this.last_value == 0)
				this.last_value = v
			else
				this.last_value = 10 * this.last_value + v
		}
		else
		{
			this.last_word_is_digit = false
			if (v != '.')
				this.last_value = 0
		}
	}
	calc(html_v)
	{
		if (this.last_word_is_digit == false)
			return
		const f = new Function("return " + html_v)
		this.clear( f().toString() )
	}
	clear(v)
	{
		document.querySelector("input").value = v
		this.last_value = 0
	}
	allclear()
	{
		document.querySelector("input").value = ""
		this.last_value = 0
		this.last_word_is_digit = true
	}
	swap(flg)
	{
		let tmp = document.querySelector("input").value
		document.querySelector("input").value = this.mem
		this.mem = tmp;
		this.memflg = flg
	}
	exec_inst(value)
	{
		let html_v = document.querySelector("input").value
		if (this.memflg == true)
			this.swap(false)
		if (value == 'AC')
			this.allclear()
		else if (value == 'C')
		{
			if (this.last_value == 0)
				return
			this.clear(html_v.slice(0, -(String(this.last_value).length)))
		}
		else if (value == '▶︎')
			document.querySelector("input").value = html_v.slice(0, html_v.length - 1)
		else if (value == '=')
			this.calc(html_v)
		else if (value == 'M-')
			this.mem -= this.last_value;
		else if (value == 'M+')
			this.mem += this.last_value;
		else if (value == 'MC')
			this.mem = 0;
		else if (value == 'MR')
			this.swap(true)
		else if (value == '%' || value == "+/-" ||  value == 'RADICAL')
		{
			if (this.last_word_is_digit == false || typeof(this.last_value) != "number"
			|| this.last_value == 0)
			return
			let digit = 0
			let last_len = String(this.last_value).length
			html_v = html_v.slice(0, -(last_len))
			if (value == '%')
			{
				digit = this.last_value / 100
				document.querySelector("input").value = html_v + String(digit)
			}
			else if (value == '+/-')
			{
				digit = -(this.last_value)
				document.querySelector("input").value = html_v + digit
			}
			else if (value == 'RADICAL')
			{
				digit = Math.sqrt(this.last_value)
				document.querySelector("input").value = html_v + digit
			}
			this.last_value = Number(digit)
		}
		else
			this.append(value)
	}
}

dentaku = new Caliculator()

function exec_inst(value)
{
	try
	{
		dentaku.exec_inst(value)
	}
	catch(e)
	{
		console.log(e)
	}
}