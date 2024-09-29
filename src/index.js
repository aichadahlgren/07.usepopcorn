import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; */
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />
    {/*  //component */}

    <Test />
  </React.StrictMode>
);
