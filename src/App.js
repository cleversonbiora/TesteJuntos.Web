import React, {Component} from 'react';
import Topo from './components/Topo';
import InputContainer from './components/InputContainer';
import LinkContainer from './components/LinkContainer';
import ButtonContainer from './components/ButtonContainer';
import {Login} from './services/LoginService'
import btnIcon from './assets/arrow-right.png';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  onChangeInput(id, value){
    this.setState({[id]: value});
  };
  onSubmit(){
    if(!this.state.username){
      ToastsStore.error("Preencha o Username");
      return;
    }
    if(!this.state.password){
      ToastsStore.error("Preencha a senha");
      return;
    }
    Login(this.state.username, this.state.password).then(json => {
      if(json.success){
        ToastsStore.success(`Token: ${json.data.token}`);
      }else{
        ToastsStore.error(json.errors.map(erro => erro));
      }
    }).catch(error => ToastsStore.error("Falha no Login"));
  }
  render() {
    return (
      <div className="App">
          <Topo />
          <div id="loginContainer">
              <InputContainer label="Username" id="username" onChange={this.onChangeInput.bind(this)}/>
              <InputContainer label="Senha" id="password" type="password" onChange={this.onChangeInput.bind(this)}/>
          </div>
          <LinkContainer label="Esqueceu sua senha?" href="#"/>
          <ButtonContainer label="Entrar" icon={btnIcon} onClick={this.onSubmit.bind(this)}/>
          <ToastsContainer store={ToastsStore}/>
          <LinkContainer label="Sou novo aqui" href="#"/>
      </div>
    );
  }
}

export default App;
