
//from jsperf

window.$ = function(selector) {
  var matches = {
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '*': 'querySelectorAll'
  };
  var regex = /[=#@.*]/.exec(selector)[0];
  return (document[matches[regex]](selector.split(regex)[1]));
};

window.$$ = function(s) {
  return document[{
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName'}[s[0]]
  || 'querySelectorAll'](s.slice(1))
};

window.$$$ = function(s) {
  try {return document[{
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '?': 'querySelectorAll'
  }[s[0]]](s.slice(1));}catch(e){}
};

