/*
 * Fetch the items for the given page
 * @param {number} page
 * @return data
*/
export default {
  getAllItems: function (target, url) {
    target.$http({url: url, method: 'GET'}).then(function (response) {
      this.items = response.data.items
    }, function (response) {
      console.log('error')
    })
  },
  getItem: function (target, url) {
    target.$http({url: url, method: 'GET'}).then(function (response) {
      this.item = response.data
    }, function (response) {
      console.log('error')
    })
  }
}
