import React from 'react';
const {ajax} = require('jquery');
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';
const port = 3003;
const host = `http://localhost:${port}`; 

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      gallery:[], 
      id:'',
      index: undefined,
      url: '',
      modal: {
        opacity: '0', 
        visibility: 'hidden',
        scale: '1.1',
        linear: '0.25s'
      }
    };

    this.photoGallery = this.photoGallery.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.updateGallery = this.updateGallery.bind(this);
  }

  componentDidMount(){
    this.getGallery((data) => {
      this.setState({
        gallery: data.gallery,
        _id: data._id
      });
    });
  }

  getGallery(cb){
    var promise = new Promise((res, rej) => {
      ajax({
          method: 'GET',
          url: `${host}/${this.props.restName}/images/10`,
          error: (err) => console.log(`ERROR: method:GET url: /${this.props.restName}/images - ${err}`),
          success: ({_id, images}) => {
            res({_id: _id, gallery: images})
          }
        });
    })

    promise.then((obj) => {
      cb(obj);
    });

  }

  photoGallery(id){
    let index = undefined;
    let _url = undefined

    this.state.gallery.map(({_id, url}, key) => {
      if(id === _id){
        _url = url;
        index = key;
        return;
      }
    });

    ajax({
      method: 'GET',
      url: `${host}/${this.props.restName}/${id}/images`,
      error: (err) => console.log(`ERROR: method:GET url: /${url} - ${err}`),
      success: (data) => {
        this.setState({
          index: index,
          url: _url,
          gallery: data.images,
          modal: {
            opacity: '1', 
            visibility: 'visible',
            scale: '1.0',
            linear: '0s'
          }
        });
      }
    });
  }

  updateGallery(val){
    let length = this.state.gallery.length;
    let index = this.state.index + Number(val);
    
    if(index > length - 1){
      index = 0;
    } else if(index < 0){
      index = length - 1;
    }

    this.setState({
      index: index,
      url: this.state.gallery[index].url
    });
  }

  toggleClose(){
    this.getGallery((data) => {
      this.setState({
        gallery: data.gallery,
        _id: data._id,
        modal: {
          opacity: '0', 
          visibility: 'hidden',
          scale: '1.1',
          linear: '0.25s'
          }
      });
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <Gallery gallery={this.state.gallery} event={this.photoGallery}/>
        <Modal eventClose={this.toggleClose} event={this.updateGallery} modal={this.state.modal} url={this.state.url}/>
      </div>);
  }
}

export default App;