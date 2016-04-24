/*
 * Fetch the items for the given page
 * @param {number} page
 * @return data
*/
export function getAllItems (target, url) {
  target.$http({url: url + '.json', method: 'GET'}).then(function (response) {
    this.items = response.data.items
  }, function (response) {
    console.log('error')
  })
}
