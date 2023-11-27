// import  Spinner  from 'react-bootstrap/Spinner'

// const Loader = () => {
//   return (
//     <Spinner
//     animation="border"
//     role="status"
//     style={{
//         width: '100px',
//         height: '100px',
//         margin: 'auto',
//         display: 'block',
//     }}
// />

//   )
// }
// export default Loader

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;