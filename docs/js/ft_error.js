function ft_error(error_code)
{
	if (error_code === 1)
		ft_append_oneline("<<<< Error: Maximum-Size >>>>")
	else if (error_code === 2)
		ft_append_oneline("<<<< Error: INF >>>>")
}