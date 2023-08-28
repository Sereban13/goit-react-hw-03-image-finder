// import { Component } from 'react';

const Searchbar = ({ submit }) => {
  // const inputValue = event.target.elements.query.value;
  // const formQuery = event.target.elements.query;
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={submit}>
//           <input type="text" name={query} />
//           <button type="submit">Search</button>
//         </form>
//       </div>
//     );
//   }
// }
