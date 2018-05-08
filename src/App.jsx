import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import { themes, ContextProvider } from './ContextProvider';

function Content() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
    this.state = {
      theme: themes.light,
      toggle: this.toggleTheme
    };
  }

  render() {
    return (
      <div>
        <ContextProvider.Provider value={this.state}>
          <Content />
        </ContextProvider.Provider>
      </div>
    );
  }
}
