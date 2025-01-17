import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';
import './style.css'; 
import ParticlesComponent from './components/Particles/particles';


function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<ParticlesComponent id="particles" />
			<Main />
			<Footer />
		</>
	);
}

export default App;
