export const replaceWithPlaceholder = (str, placeholders) => {
  for(const prop in placeholders){
    var pattern = '{{' + prop + '}}';
    var regex = new RegExp(pattern,"g");
    if(str.indexOf(pattern) > -1){
      str = str.replace(regex, placeholders[prop]);
    }
  }

  return str
}