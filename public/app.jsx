var GreetMsg = React.createClass ({
    render: function (){
      var name=this.props.name;
      var message=this.props.message;

      return (
        <div>
          <h1>Some heading {name}</h1>
          <p>{message +'!!!!'}</p>
        </div>
      );
    }
});

var GreetForm = React.createClass ({
  onFormSubmit: function (e){
    e.preventDefault ();

    var nameRef = this.refs.inputName;
    var name = nameRef.value;

    if (typeof name == 'string' && name.length > 0){
      this.refs.inputName.value = "";
      this.props.onNewName (name);
    }
  },
  render: function (){
      return (
          <form onSubmit={this.onFormSubmit}>
            <input type='text' ref='inputName'/>
            <button>Set Name</button>
          </form>
      );
  }
});

var Greet = React.createClass ({
  getDefaultProps: function () {
    return ({
        name: 'React',
        message: 'Test Message'
      });
  },
  getInitialState: function() {
    return {
          name:  this.props.name
      };
  },
  handleNewName:function(name){
    this.setState ({
      name : name
    });
},
  onButtonClick:function(e){
    e.preventDefault ();
    var name = this.refs.inputName.value;

    this.setState ({
      name : name
    });

    alert(name);
  },
  render: function (){
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello from {name}</h1>
        <p>{message} </p>
        <GreetMsg name={name} message={'This message is from Greet to GreetMsg'}/>
        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='inputName'/>
          <button>Set Name</button>
        </form>
        <GreetForm onNewName={this.handleNewName}/>
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
