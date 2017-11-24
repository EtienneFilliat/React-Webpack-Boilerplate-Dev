import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (e.keyCode === 13) {
      const msg = this.refs.input.value.trim();
      if (msg) {
        this.setState((prev, props) => {
          const items = prev.items;
          items.push(msg);
          return { items }
        });
      }
    }
  }

  render() {
    return(
      <div className="container">
        <input type="text" ref="input" placeholder="Type something" onKeyDown={this.addItem} autoFocus />
        <List items={this.state.items} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
