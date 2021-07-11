function ft_back_one(html_v) {
	html_v = html_v.slice(0, html_v.length - 1)
	document.querySelector("input").value = html_v
	if (Number(html_v.slice(-1)) > -1 || html_v.slice(-1) === '.')
		dentaku.last_v = Number(html_v.split(/[-+/* ]/).slice(-1))
	else if (Number(html_v.slice(-2)) > -1) {
		console.log("a")
		dentaku.last_v = Number(html_v.split(/[-+/* ]/).slice(-2))
	} else
		dentaku.last_v = 0
	ft_update_flg(html_v)
}