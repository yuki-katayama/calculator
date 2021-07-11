function ft_exec_m(v, html_v) {
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