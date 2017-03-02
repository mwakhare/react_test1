var Greet = React.createClass ({
  getDefaultProps: function () {
    return (
      {
        name: 'React',
        message: 'Test Message'
      }
    )
  },
  render: function (){
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello from {name}</h1>
        <p>{message} </p>
      </div>
    );
  }
});


//var firstName = "Tushar";
//var msg = "This is sample message from outside";
// ReactDOM.render (
//   <Greet name={firstName} message={msg}/>,
//   document.getElementById ('app')
// );


ReactDOM.render (
  <Greet/>,
  document.getElementById ('app')
);
