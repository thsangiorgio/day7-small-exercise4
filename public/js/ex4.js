var Note = React.createClass({
  render() {
    return <h1>{this.props.children}</h1>
  }
});

var List = React.createClass({
  getInitialState() {
    return { array: ['eat', 'sleep', 'code']};
  },
  add() {
    this.state.array.push('code', 'code');
    this.setState(this.state);
  },
  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        {this.state.array.map((action, index) => {
          return <Note key={index}>{action}</Note>
        })}
      </div>
    )
  }
});

ReactDOM.render(
  <List/>
  , document.getElementById('root')
);
