import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadVehicles, loadComments, loadProducts } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadContacts:function() {
      let contactsAction = loadContacts();
      dispatch(contactsAction);
    },
    loadVehicles:function() {
      let vehiclesAction = loadVehicles();
      dispatch(vehiclesAction);
    },
    loadComments:function() {
      let commentsAction = loadComments();
      dispatch(commentsAction); 
  },
    loadProducts:function() {
      let productsAction = loadProducts();
      dispatch(productsAction);
    }
}
}

export default connect(null,mapDispatchToProps)(App);

