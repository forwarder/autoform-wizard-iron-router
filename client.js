// Reference: https://stackoverflow.com/a/1714899
var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

Wizard.registerRouter('iron:router', {
  go: function(name, stepId) {
    var p = {};
    var queryString = serialize(this.getParams(stepId).query);
    if( !!this.getParams(stepId).query && queryString != "" ) p.query = queryString;
    if( !!this.getParams(stepId).hash ) p.hash = this.getParams(stepId).hash;
    Router.go(name, this.getParams(stepId), p);
  },
  getParams: function(stepId) {
    return Tracker.nonreactive(function() {
      var route = Router.current()
        , params = route.params || {};
    
      return _.extend(params, {step: stepId});
    });
  },
  getStep: function() {
    var current = Router.current();
    return current && current.params.step;
  },
  path: function(name, stepId) {
    return Router.path(name, this.getParams(stepId));
  }
});