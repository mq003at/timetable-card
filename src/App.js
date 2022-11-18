import logo from './logo.svg';
import './App.css';
import SliderS from './SliderS';

function App() {
  return (
    <div className="App">
      <div className="stretched nine wide column shadow p-3 mb-5 bg-white rounded">
        <div className="ui raised segment">
          <h3 className='ui header profileHeader' style={{padding: "20px"}}>
            MY AVAILABILITY FOR THE NEXT 7 DAYS
          </h3>
          <SliderS day={"Mon"} />
          <SliderS day={"Tue"} />
          <SliderS day={"Wed"} />
          <SliderS day={"Thu"} />

        </div>
      </div>
    </div>
  );
}

export default App;
