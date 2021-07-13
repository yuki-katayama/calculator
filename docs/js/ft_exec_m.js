function ft_exec_m(v, html_v) {
	if (v === 'M-')
	{
		ft_append_oneline(`M-: ${dentaku.mem_m} - ${dentaku.last_v} = (MR)${dentaku.mem_m - dentaku.last_v}`)
		dentaku.mem_m -= dentaku.last_v;
	}
	else if (v === 'M+')
	{
		ft_append_oneline(`M+: ${dentaku.mem_m} + ${dentaku.last_v} = (MR)${dentaku.mem_m + dentaku.last_v}`)
		dentaku.mem_m += dentaku.last_v;
	}
	else if (v === 'MC')
	{
		ft_append_oneline(`MC: ${dentaku.mem_m}(MR) → 0`)
		dentaku.mem_m = 0;
	}
	else if (v === 'MR' && !(dentaku.memflg)) {
		dentaku.mem_not_m = html_v
		document.querySelector("input").value = dentaku.mem_m;
		dentaku.memflg = true
	} else if (v === 'MR')
		document.querySelector("input").value = dentaku.mem_m;
}