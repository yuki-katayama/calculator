function ft_error(error_code) {
	let message = ""
	if (error_code === 1)
		message = "<<<< 計算結果が大きすぎました。 >>>>"
	else if (error_code === 2)
		message = "<<<< 値が大きすぎます。 >>>>"
	else if (error_code === 3)
		message = "! 符号に適応できません。!"
	else if (error_code === 4)
		message = "! 小数点が連続しています。!"
	else if (error_code === 5)
		message = "! 符号と小数点が連続しています。!"
	else if (error_code === 6)
		message = "! 符号が連続しています。!"
	ft_append_oneline(message)
	window.alert(message)
	return 1
}