export function loadContacts() {
    return function (dispatch) {
      dispatch({
        type: "CONTACTS_BEING_LOADED"
      });
      fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
    };
   }

   export function contactsLoaded(contacts) {
    return {
      type: "CONTACTS_LOADED",
      value: contacts
    };
   }

   export function loadVehicles() {
    return function (dispatch) {
      dispatch({
        type: "VEHICLES_BEING_LOADED"
      });
      fetch("/vehicles")
      .then( (response) => {
        return response.json();
      }).then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
    };
   }

   export function vehiclesLoaded(vehicles) {
    return {
      type: "VEHICLES_LOADED",
      value: vehicles
    };
   }

  export function loadComments(comments){
   return function (dispatch) {
    dispatch({
      type: "COMMENTS_BEING_LOADED"
    });
    fetch("/comments")
    .then( (response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsLoaded(comments));
    });
  };
 }

 export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
 }
   

 export function loadProducts(products){
  return function (dispatch) {
   dispatch({
     type: "PRODUCTS_BEING_LOADED"
   });
   fetch("/products")
   .then( (response) => {
     return response.json();
   }).then((products) => {
     dispatch(productsLoaded(products));
   });
 };
}

export function productsLoaded(products) {
 return {
   type: "PRODUCTS_LOADED",
   value: products
 };
}

 export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}

export function createComment(comment) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(comment)
    }).then(() => dispatch(loadComments()));
  };
}

export function createContact(contact) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(contact)
    }).then(() => dispatch(loadContacts()));
  };
}

export function createVehicle(vehicle) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicle)
    }).then(() => dispatch(loadVehicles()));
  };
}

  //  * return a thunk function
  //  * make a fetch call to /products as a POST
  //  * include the product in the body 
  //  * in the first then, dispatch to loadProducts
