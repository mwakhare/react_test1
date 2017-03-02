var Greet = React.createClass ({
  getDefaultProps: function () {
    return (
      {
        name: 'React'
      }
    )
  },
  render: function (){
    var name = this.props.name;

    return (
      <div>
        <h1>Hello from {name}</h1>
        <p>This is simple para</p>
      </div>
    );
  }
});

ReactDOM.render (
  <Greet />,
  document.getElementById('app')
);
