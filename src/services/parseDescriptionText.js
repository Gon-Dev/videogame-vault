function parseDescriptionText(html){
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}
export default parseDescriptionText;