import React from "react";
import ReactDOM from "react-dom";
// import firebase from "firebase";
 import Header from "./component/header";
import Context from "./context";
import Content from "./component/content";
import Add from "./component/add";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      selectedOption: [],
      firstName: "",
      lastName: "",
      items: []
      // isAdd: false,
      // isList: true
    };
  }

  render() {
   
    return (
      
      <Context.Provider
        value={{
          
          state: this.state,
          actions: {
            onChangeName: value => {
              this.setState({
                name: value
              });
            },
            onChangeAge: value => {
              this.setState({
                age: value
              });
            },
            toggle: () => {
              if (this.state.isAdd == false) {
                this.setState({
                  isAdd: !this.state.isAdd
                });
              } else {
                this.setState({
                  isAdd: !this.state.isAdd
                });
              }
            },
             handleChange: selectedOption => {
              this.setState({ selectedOption });
             }
             
          }
        }}

      >
      
        <Header />
        <Content/>
        <Add/>
        {/* <Pre_list/> */}
      </Context.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

