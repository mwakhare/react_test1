var Greet = React.createClass ({
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
  <Greet name="Milind"/>,
  document.getElementById('app')
);
