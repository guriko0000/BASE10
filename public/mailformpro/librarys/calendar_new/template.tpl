<html>
	<head>
		<meta name="robots" content="noindex" />
		<title>Mailform Pro Calendar Data Manager</title>
		<style>
			* {
				box-sizing: border-box;
			}
			body {
				background-color: #EEE;
				padding: 0px;
				margin: 0px;
				text-align: center;
			}
			h1 {
				font-size: 24px;
				padding: 10px 0px;
				margin: 0;
				line-height: 1em;
				color: #FFF;
				background: #000;
			}
			table {
				margin: 0px auto;
				width: 100%;
			}
			table tr th,table tr td {
				padding: 5px 10px;
				font-size: 12px;
			}
			table tbody tr td {
				width: 14.28%;
			}
			div#wrapper {
				width: 100%;
				background-color: #FFF;
				margin: 10px auto;
				padding: 30px 10px;
				box-shadow: 0px 0px 10px #CCC;
				display: inline-block;
			}
			h2 {
				margin: 0px auto 10px auto;
				padding: 0px 0px 10px 0px;
				border-bottom: solid 1px #CCC;
				text-shadow: 0px 0px 5px #CCC;
			}
			input {
				text-align: center;
				border: solid 1px #999;
			}
			input.incomplate {
				background-color: #FCC;
			}
			input.complate {
				background-color: #EFE;
			}
			div#stat {
				color: #C00;
				font-size: 36px;
				font-weight: bolder;
				text-shadow: 0px 1px 3px #CCC;
			}
			table.calebdar {
				border-spacing: 0px;
				border-collapse: collapse;
			}
			table.calebdar tr td strong {
				display: block;
				text-align: center;
			}
			table.calebdar tr th,table.calebdar tr td {
				border: solid 1px #999;
				padding: 5px;
				/*width: 14%;*/
			}
			table.calebdar tr th {
				background-color: #EEE;
			}
			table.calebdar tr td span {
				font-size: 10px;
				text-align: left;
				display: block;
			}
			table.calebdar tr td div {
				text-align: left;
				margin: 3px;
				border: solid 1px #CCC;
				padding: 5px;
				overflow: hidden;
			}
			table.calebdar tr td div input.qty {
				width: 30px;
			}
			table.calebdar tr td div input.price {
				width: 50px;
				text-align: right;
			}
			table.calebdar tr td div {
				vertical-align: middle;
			}
			table.calebdar tr td div h3 {
				padding: 0px;
				margin: 0px;
				font-size: 12px;
				font-weight: normal;
			}
			table.calebdar tr td input {
				max-width: 100%;
			}
			table.calebdar tr td input.className {
				margin-top: 4px;
				width: 100%;
				display: block;
			}
			table.calebdar tr td div em {
				position: relative;
				display: inline-block;
			}
			table.calebdar tr td div em font {
				position: absolute;
				left: 5px;
				top: 3px;
				font-style: normal;
				line-height: 1em;
				z-index: 999;
			}
			td.prev {
				text-align: left;
			}
			td.next {
				text-align: right;
			}
			td.blank {
				background-color: #CCC;
			}
			button {
				display: block;
				width: 100%;
				background: none;
				border: none;
				padding: 1em 0;
				font-size: 16px;
				cursor: pointer;
			}
		</style>
		<script>
			window.onload = function(){
				if(document.getElementById('stat')){
					setTimeout(function(){
						document.getElementById('stat').style.display = 'none';
					},2000);
				}
			}
		</script>
	</head>
	<body>
		<h1>Mailform Pro Reserve Data Manager</h1>
		_%%content%%_
	</body>
</html>