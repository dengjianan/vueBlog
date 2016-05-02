/*
 * Fetch the items for the given page
 * @param {number} page
 * @return data
*/
export function getAllItems (target, url) {
  target.$http({url: url, method: 'GET'}).then(function (response) {
    this.items = response.data
  }, function (response) {
    console.log('error')
  })
}

export function getItem (target, url) {
  target.$http({url: url, method: 'GET'}).then(function (response) {
    this.item = response.data.item
  }, function () {
    console.log('error')
  })
}
