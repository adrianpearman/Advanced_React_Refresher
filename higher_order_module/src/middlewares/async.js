export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on it's payload property
  // if it does, then wait for it to resolve,
  // if it doesnt, then send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the proimise to resolve (gets it's data!)
  // and create a new action with that data ands dispatch it
  action.payload.then(function(response) {
    const newAction = {
      ...action,
      payload: response
    };
    dispatch(newAction);
  });
};
