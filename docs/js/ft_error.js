function ft_error(error_code) {
	let message = ""
	if (error_code === 1)
	{
		message = "<<<< Error: Maximum-Size >>>>"
		ft_append_oneline(message)
	}
	else if (error_code === 2)
	{
		message = "<<<< Error: INF >>>>"
		ft_append_oneline(message)
	}
	window.alert(message)
}