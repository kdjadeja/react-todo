import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { animateScroll } from "react-scroll";
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      currentItem: {
        text: null,
        key: null
      }
    }
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    animateScroll.scrollToTop({
      containerId: "todo_list"
    });
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const itemData = this.state.items ? this.state.items : []
      // const data = [...itemData, newItem];
      itemData.unshift(newItem);
      this.setState({
        items: itemData,
        currentItem: {
          text: '',
          key: ''
        }
      },
        this.scrollToTop
      )
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <form id="to-do-form" onSubmit={this.addItem.bind(this)}>
          <h1 className="heading">ToDo</h1>
          <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput.bind(this)} />
          <button type="submit">Add</button>
        </form>
        <div id="todo_list" className="scrollbar">
          <ListItems items={this.state.items}
            deleteItem={this.deleteItem.bind(this)}
            setUpdate={this.setUpdate.bind(this)}
          />
        </div>
      </div>
    );
  }

}

export default App;