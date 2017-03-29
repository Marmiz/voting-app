import React, { Component } from 'react'


// export default class Root extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.children}
//       </div>
//     )
//   }
// }

class Root extends Component {
  render() {
    return this.props.children;
  }
}

export default Root;
