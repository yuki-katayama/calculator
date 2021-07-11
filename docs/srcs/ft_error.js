function ft_error(error_code)
{
	if (error_code == 1)
		dentaku.add_oneline("<<<< Error: Maximum-Size >>>>")
	else if (error_code == 2)
		dentaku.add_oneline("<<<< Error: INF >>>>")
}