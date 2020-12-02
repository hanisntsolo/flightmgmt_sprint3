import React, { Component } from 'react';
import { withRouter } from  'react-router';
class LogoutComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <>
          <h1>You are logged Out !!</h1>
          <div className="container">
            Thank You for using our booking application.
          </div>
        </>
    );
  }
}
// export default withRouter(LogoutComp);
export default LogoutComp;