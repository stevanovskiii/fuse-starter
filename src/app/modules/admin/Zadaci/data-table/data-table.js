var elementPosition = $('#button').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#button').css('position','fixed').css('top','0');
        } else {
            $('#button').css('position','static');
        }    
});/**Proba na kopcinata so js no zasega nema funkcija */

controller('EventController', ['$scope', function($scope) {
    $scope.clickMe = function(clickEvent) {
      $scope.clickEvent = simpleKeys(clickEvent);
      console.log('Rabotam');
    };
    function simpleKeys(original) {
      return Object.keys(original).reduce(function(obj, key) {
        obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
        return obj;
      }, {});
    }
  }]);