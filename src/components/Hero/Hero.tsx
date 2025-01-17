import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
// import bekhzod from '../../assets/bekhzod.png';
import { NavHashLink } from 'react-router-hash-link';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import kakao from '../../assets/kakao.png';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg'

const images = [linkedin, githubIcon];
const links = ["https://www.linkedin.com/in/ahmad-mujahid-ramdhani-217597236/", 
			  "https://github.com/MujahidRamdhani?tab=repositories"]

export function Hero() {
	return (
		<Container id='home'>
			<div
				style={{
					flex: 1,
				}}
				className='hero-text'
			>
				<ScrollAnimation animateIn='fadeInUp'>
					<p>
						Hi, there <img src={Hello} alt='Hi, there' width='20px' /> I am
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
					<h1>Ahmad Mujahid Ramdhani</h1>
				</ScrollAnimation>
				
				
				<ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000} style={{ marginBottom: '10px' }}>
					<h3>Full Stack Web Developer</h3>
				</ScrollAnimation>
				
				<ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
					<p className='small-resume'>with 1+ years of experience in Fullstack and private blockchain development</p>
				</ScrollAnimation>
				<div className='mb-4'>
				<ScrollAnimation animateIn='fadeInUp' delay={0.8 * 1000} >
					<BrowserRouter>
						<NavHashLink smooth to='#contact' className='button'>
							Contact
						</NavHashLink>
					</BrowserRouter>
				</ScrollAnimation>
				</div>
				
				<ScrollAnimation animateIn='fadeInUp' delay={1 * 1000}>
					
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '10px',
							marginTop: '30px',
						}}
					>
						{images.map((item, index) => (
							<ScrollAnimation
								key={index}
								animateIn='fadeInLeft'
								delay={index * 0.1 * 1000}
							>
								<div
									style={{
										height: '100px',
										width: '100px',
										borderRadius: '12px',
										padding: '10px',
										background: '#c5c5c5',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
									className='hability'
								>
									<a href={links[index]} target="_blank" rel="noopener noreferrer">
										<img
											style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain',
											}}
											src={item}
											alt={item}
										/>
										</a>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</ScrollAnimation>
			</div>
			<div
				style={{
					flex: '1',
					display: 'flex',
					justifyContent: 'center',
				}}
				className='hero-image'
			>
				<ScrollAnimation animateIn='fadeInRight' delay={0.2 * 1000}>
					{/* <img
						style={{
							borderRadius: '15px',
						}}
						src={image}
						alt='profile_pic'
					/> */}
				</ScrollAnimation>
			</div>
		</Container>
	);
}
