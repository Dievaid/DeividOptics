import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Despre from './despre';
import Galerie from './galerie';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render()
  {
    return (
    <div>
      <Navigation />
      <Header data={this.state.resumeData.Header} />
      <Despre data={this.state.resumeData.Despre} />
      <Galerie />
      <Contact data={this.state.resumeData.Contact} />
    </div>
    )
  }
}
export default App;
