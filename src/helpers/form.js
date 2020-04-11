/**
 * Enccode the given params to x-www-form-urlencoded
 */
const urlencoded = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default { urlencoded };
