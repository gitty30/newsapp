import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
     
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={<News setProgress={this.setProgress}  key="general" size={this.size} country={'in'} category={"general"} />}
            ></Route>
            <Route
              exact path="/about"
              element={<News setProgress={this.setProgress}  key="general" size={this.size} country={'in'} category={"general"} />}
            ></Route>
            <Route
              exact path="/business"
              element={<News setProgress={this.setProgress}  key="business" size={this.size} country={'in'} category={"business"} />}
            ></Route>
            <Route
              exact path="/sports"
              element={<News setProgress={this.setProgress}  key="sports" size={this.size} country={'in'} category={"sports"} />}
            ></Route>

            <Route
              exact path="/science"
              element={<News setProgress={this.setProgress}  key="science" size={this.size} country={'in'} category={"science"} />}
            ></Route>
            <Route
              exact path="/technology"
              element={<News setProgress={this.setProgress}  key="technology" size={this.size} country={'in'} category={"technology"} />}
            ></Route>            
           <Route
              exact path="/general"
              element={<News setProgress={this.setProgress}  key="general" size={this.size} country={'in'} category={"general"} />}
            ></Route>     
           <Route
              exact path="/entertainment"
              element={<News setProgress={this.setProgress}  key="Entertainment" size={this.size} country={'in'} category={"entertainment"} />}
            ></Route>      
                <Route
              exact path="/health"
              element={<News setProgress={this.setProgress}  key="health" size={this.size} country={'in'} category={"health"} />}
            ></Route>                                   
          </Routes>

        </div>
      </div>
    );
  }
}

