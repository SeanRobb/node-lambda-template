// For development/testing purposes
exports.handler = function(event, context, callback) {
  console.log('Running index.handler');
  console.log('==================================');
  console.log('event', event);
  console.log('==================================');
  console.log('Stopping index.handler');
  callback( null, event ); // Echo back the event
  // or
  // callback( 'some error type' );
};
