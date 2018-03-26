import React, { Component } from 'react';
import './App.css';

import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
