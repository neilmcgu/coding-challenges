// remove url

// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  // TODO: complete
  if (url.includes("#")) {
    let index = 0;
    index = url.indexOf("#");
    return url.slice(0, index);
  } else {
    return url;
  }
}
