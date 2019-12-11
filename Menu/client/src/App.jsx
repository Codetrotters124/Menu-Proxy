import React from 'react';
import Data from './exampleData.js';
import MenuButton from './MenuButton.jsx';
import Menu from './Menu.jsx';
import styled from 'styled-components';

const ShowMenuButton = styled.button`
  position: fixed;
  bottom: 32px;
  box-shadow: rgba(51,51,51,.2) 0 2px 4px;
  background-color: #fff
  font-size: 40px;
  font-weight: bold;
  width: 18rem;
  border: 1px solid #d8d9db;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  float: center;
  margin: 0px 35% 16px;
  height: 50px;
  &:hover {
    border: 2px solid red;
  }
`;

const Gradient = styled.section`
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 200px;
    width: 100%;
    content: " ";
    background: linear-gradient(to top, rgba(255,255,255, 1) ,rgba(255,255,255, 0));
    pointer-events: none;
  }
`;

const CollapsedMenu = styled.section`
  height: 400px;
  overflow: hidden;
  position: relative;
`;
// .menus-container-collapsed__wHgxK8Fc {
//   height: 400px;
//   overflow: hidden;
//   position: relative;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      render: null,
      collapse: true,
      button: 'View full menu'
    };
    this.setMenu = this.setMenu.bind(this);
    this.onClick = this.onClick.bind(this);
    this.scrollToRef = this.scrollToRef.bind(this);
    this.myRef = React.createRef();
  }

  componentDidMount () {
  }

  onClick (event) {
    event.preventDefault();
    if (this.state.collapse) {
      this.setState({
        collapse: !this.state.collapse,
        button: "Collapse menu"
      });
    } else {
      this.setState({
        collapse: !this.state.collapse,
        button: "View full menu"
      });
    }
    this.scrollToRef();
  }
  setMenu(event) {
    this.setState({render: Data[event.target.name]});
  }

  scrollToRef() {
    let element = this.myRef.current.offsetTop;

    //NOTE: Smooth scrolling works but since menu is small, looks choppy
    window.scrollTo({
      top: this.myRef.current,
      left: 0,
      behavior: "smooth",
    });
  }


  render () {
    let buttons = Object.keys(this.state.data);
    buttons.splice(buttons.indexOf('_id'), 1);
    buttons.splice(buttons.indexOf('__v'), 1);
    if (this.state.collapse) {
      return (
        <div>
          <div className="menu" >Menu</div>
          <MenuButton ref={this.myRef} setMenu={this.setMenu} buttons={buttons}/>
          <Gradient>
            <CollapsedMenu>
              <Menu collapse={this.state.collapse} menu={this.state.render ? this.state.render : this.state.data[`${buttons[0]}`]}/>
            </CollapsedMenu>
          </Gradient>
          <div><br/><br/><br/><br/></div>
          <ShowMenuButton onClick={this.onClick} dangerouslySetInnerHTML={{__html: this.state.button}}/>
        </div>
      );
    } else {
      return (
        <div>
          <div className="menu" >Menu</div>
          <MenuButton ref={this.myRef} setMenu={this.setMenu} buttons={buttons}/>
          <Menu collapse={this.state.collapse} menu={this.state.render ? this.state.render : this.state.data[`${buttons[0]}`]}/>
          <div><br/><br/><br/><br/></div>

          <ShowMenuButton onClick={this.onClick} dangerouslySetInnerHTML={{__html: this.state.button}}/>
        </div>
      )
    }
  }
}

export default App;