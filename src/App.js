import React from 'react';
import './App.css';
import ListItems from './ListItems'
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
      const data = [...itemData, newItem];
      this.setState({
        items: data,
        currentItem: {
          text: '',
          key: ''
        }
      })
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
        <ListItems items={this.state.items}
          deleteItem={this.deleteItem.bind(this)}
          setUpdate={this.setUpdate.bind(this)}
        />
      </div>
    );
  }

}

export default App;