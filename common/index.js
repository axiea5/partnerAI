export default {
	toPage(url, data) {
		console.log(url)
		data ? url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) : url
		uni.navigateTo({
			url
		})
	},
	turnoff() {
		uni.navigateBack({
			delta: 1
		});
	}
}

function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
