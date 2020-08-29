import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Button
        label={'Project 1'}
        handleClick={() => console.log('Clicked button One') }
        />
      <Button
        label={'Project 2'}
        handleClick={() => console.log('Clicked button Two') }
        />
      <Button
        label={'Project 3'}
        handleClick={() => console.log('Clicked button Three') }/>
    </div>
  );
};

const Button = ({ label, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
    {label}
    </button>
  );
};

//   const handleClick = () => console.log('Clicked!');
//
//   return (
//     <button type='button' onClick={handleClick}>
//     click here for Project 1
//     </button>
//   )
// }
//

//
// class App extends React.Component {
//   render() {
//
//     const handleClick = () => console.log('Clicked!');
//
//     return (
//       <div>
//         <button type="button" onClick={handleClick}>
//         click here for Project 1
//         </button>
//       </div>
//     );
//   };
// }
//
export default App;
