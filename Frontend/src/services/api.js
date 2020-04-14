import axios from 'axios';

const App = axios.create({ baseURL: 'http://localhost:3333'});

export default App;