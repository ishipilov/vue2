export default {
  methods: {
    isBlank: function (e) {
      if (e === undefined || e === null || e === '') return true
      if (Array.isArray(e) && e.length === 0) return true
      if (typeof e === 'object') return this.isEmpty(e)
      return false
    },
    isEmpty: function (obj) {
      for (let prop in obj) { if (obj.hasOwnProperty(prop)) return false }
      return JSON.stringify(obj) === JSON.stringify({})
    },
		isFloat: function (n) { return Number(n) === n && n % 1 !== 0 },
    toFloat: function (v, x=4) { return parseFloat(Number(v).toFixed(x)) },
    capitalize: function (e) { return e.charAt(0).toUpperCase() + e.slice(1) },
    markText: function (str,substr) {
      let begin = str.toLowerCase().indexOf(substr.toLowerCase())
      if (begin > -1) {
        let endin = begin + substr.length
        let bfore = str.substring(0, begin)
        let markd = str.substring(begin, endin)
        let after = str.substring(endin, str.length)
        return bfore + '<mark class="px-0">' + markd + '</mark>' + after
      } else {
        return str
      }
    },
    copyToClipboard: function (text) {
      let textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      let result = document.execCommand('copy')
      document.body.removeChild(textarea)
      return result
    }
  }
};