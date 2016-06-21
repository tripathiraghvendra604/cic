(function(){


  var input = document.querySelectorAll('form p input');

  var inputClassName = 'inputFocused',
      inputHasValue = 'inputHasValue';

  window.onload = function(e){
    [].slice.call(input).forEach(function(element){
      if (element.value.length > 0) {
        addClass(inputHasValue, element.parentNode);
      }
     });
  };

  [].slice.call(input).forEach(function(element){

    element.addEventListener('focus', function(e){
      addClass(inputClassName, element.parentNode);
    });

    element.addEventListener('blur', function(e){
      if (hasClass(inputClassName, element.parentNode)) {
        removeClass(inputClassName, element.parentNode);
      }
      if (e.target.value.length > 0) {
        addClass(inputHasValue, element.parentNode);
      }else{
        if (hasClass(inputHasValue, element.parentNode)) {
          removeClass(inputHasValue, element.parentNode);
        }
      }

    });

  });


  function hasClass(className, element){
    var classList = element.className.split(' '),
        index = classList.indexOf(className);

    return index !== -1 ? true : false;
  }

  function removeClass(className, element){
    var classList = element.className.split(' '),
        index = classList.indexOf(className);
    classList.splice(index, 1);
    element.className = classList.join(' ');
  }


  function addClass(className, element){
    var classList = element.className.split(' ');
    classList.push(className);
    element.className = classList.join(' ');
  }

})();
