export default {
  methods: {
		isUrl: function (str) {
			let url
			try { url = new URL(str) } catch (e) { return false }
			return url.protocol === "http:" || url.protocol === "https:"
		},
    go2url: function (url, target) {
      if (target === null || target === undefined) return window.open(url, '_self')
      return window.open(url, target)
    }
  }
};