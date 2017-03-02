var Greet = React.createClass ({
  getDefaultProps: function () {
    return ({
        name: 'React',
        message: 'Test Message'
      });
  },
  getInitialState: function() {
    return {
          name = this.props.name;
      };
  },
  onButtonClick:function(e){
    e.preventDefault ();
    var name = this.refs.inputName.value;

    this.setState ({
      name : name
    });

    alert (name);
  },
  render: function (){
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello from {name}</h1>
        <p>{message} </p>
        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='inputName'/>
          <button>Set Name</button>
        </form>
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
