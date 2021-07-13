function ft_error(error_code) {
	let message = ""
	if (error_code === 1)
		message = "エラー: 計算結果が大きく、その操作ができません！"
	else if (error_code === 2)
		message = "エラー: 値が大きすぎます!"
	else if (error_code === 3)
		message = "エラー: 符号に使用できません!"
	else if (error_code === 4)
		message = "エラー: 小数点が連続しています!"
	else if (error_code === 5)
		message = "エラー: 符号と小数点が連続しています!"
	else if (error_code === 6)
		message = "エラー: 符号が連続しています!"
	else if (error_code === 7)
		message = "エラー: 0スタートは小数点を押してください!"
	else if (error_code === 8)
		message = "エラー: 符号でスタートすることはできません!"
	else if (error_code === 9)
		message = "エラー: πは数字に使用できません!"
	else if (error_code === 10)
		message = "エラー: 既に少数です!"
	else if (error_code === 11)
		message = "エラー: 引き算に\"-\"符号は使用できません!"
	else if (error_code === 12)
		message = "エラー: 整数値に0を2個以上追加することはできません!"
	else if (error_code === 100)
		message = "エラー: 無効なパラメータで計算されました!"
	ft_append_oneline(message)
	window.alert(message)
	return 1
}