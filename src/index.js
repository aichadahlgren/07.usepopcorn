import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App-v1';

/* function Test() {
  const [movieRating, setMovieRating] = useState(0); */

/*   return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated aAicha {movieRating} stars</p>
    </div>
  );
} */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      onSetRating={() => { }}
        />
        <StarRating size={24} color="red" className="test" defaultRating={2} onSetRating={() => { 
          }} />
    <Test /> */}
  </React.StrictMode>
);
