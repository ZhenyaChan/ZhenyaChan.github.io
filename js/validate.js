function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
  var form = document.querySelector('form');
  var result = true;
  var latitude  = parseFloat(form.latitude.value);
  var longtitude = parseFloat(form.longtitude.value);
  var labelLat  = form.querySelector('#validate1 > span');
  var labelLong = form.querySelector('#validate2 > span');
  
  if (latitude < -90 || latitude > 90 || isNaN(latitude)) {
    labelLat.innerText = '* must be a valid Latitude (-90 to 90)';
    result = false;
  }
  else
    labelLat.innerText = '*';

  if (longtitude < -180 || longtitude > 180 || isNaN(longtitude)) {
    labelLong.innerText = '* must be a valid Longitude (-180 to 180)';
    result = false;
  } 
  else
    labelLong.innerText = '*';

  return result;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
