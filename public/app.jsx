var Greet = React.createClass ({
  render: function (){
    return (
      <div>
        <h1>This is from React.creatClass</h1>
        <p>This is simple para</p>
      </div>
    );
  }
});

ReactDOM.render (
  <Greet/>,
  document.getElementById('app')
);
