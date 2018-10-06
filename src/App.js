import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
<section id="section-1">
        <div class="container-fluid">
            <div class="row">
                <div class="col" id="test">
                    <div class="carousel slide" data-ride="false">

                        <ol class="carousel-indicators">
                            <li data-target=".slide" data-slide-to="0" class="active"></li>
                            <li data-target=".slide" data-slide-to="1"></li>
                            <li data-target=".slide" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="carousel-item active" style={{backgroundImage: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg")`}}>
                            </div>

                            <div class="carousel-item" style={{backgroundImage: `url("https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg")`}}>
                            </div>

                            <div class="carousel-item" style={{backgroundImage: `url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg")`}}>
                            </div>

                            <div class="content_overlay">
                                <div class="the_content">
                                    
                                   <h1 className="header-text">REACT BOOTSTRAP APPLICATION</h1>
                                    <a href="#section-2"><button type="button" class="btn btn btn-success">LEARN MORE</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </header>
      </div>
    );
  }
}

export default App;
