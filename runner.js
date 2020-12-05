function run() {
	let idoc = frame.contentWindow.document
	idoc.open()

	let content = `
	${y[0].innerText}
	<style>
	${y[1].innerText}
	</style>
	<script>
	${y[2].innerText}
	</script>
	`

	idoc.write(content)
	idoc.close()
}
run()