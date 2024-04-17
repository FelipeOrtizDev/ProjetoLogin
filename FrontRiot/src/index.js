import "./style.css";
import "@riotjs/hot-reload";
import { mount } from "riot";
import registerGlobalComponents from "./register-global-components.js";
import { register } from 'riot';
import App from './components/App.riot';
import Login from './components/Login.riot';
import Cadastro from './components/Cadastro.riot';
import Sidebar from './components/Sidebar.riot'


// register
register('app', App);
register('login', Login);
register('cadastro', Cadastro);
register('sidebar', Sidebar)


registerGlobalComponents(App);

// mount all the global components found in this page
mount("[data-riot-component]");
