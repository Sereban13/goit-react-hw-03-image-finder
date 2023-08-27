// import { render } from "@testing-library/react";
// import { Component } from 'react';

// export class Searchbar extends Component {
//   state = {
//     searchQuery: '',
//   };
//   // handleChange = ({ target: { value } }) => {
//   //   this.setState({ searchQuery: value });
//   // };

//   // handleSubmit = event => {
//   //   event.preventDefault();
//   //   console.log(this.state.searchQuery);

//   render() {
//     return (
//       <div>
//         <header>
//           <form onSubmit={}>
//             <input
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search images and photos"
//               // onChange={this.handleChange}
//               // value={this.state.searchQuery}
//             />

//             <button type="submit">Search</button>
//           </form>
//         </header>
//       </div>
//     );
//   }
//   };

// export default Searchbar;

const Searchbar = ({ searchQuery }) => {
  const inputValue = searchQuery;
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
