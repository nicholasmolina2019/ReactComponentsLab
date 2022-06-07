import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AvgRating from './components/AverageRating';
import SentimentAnalysis from './components/Sentiment';
import WebVisitors from './components/Visitor';

import './styles.css';
import './App.css';

function App() {
  return (
<div>
  <div class ="grid-container"/>
 <Sidebar/>
 <Reviews className="side2" reviewsOne="1281"/>
 <AvgRating className="side3" ratingAvg="4.6"/>
 <SentimentAnalysis className ="side4"/>
 <WebVisitors visitorsWeb="821"/>

</div>
    );
}

export default App;
