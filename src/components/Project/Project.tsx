import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import scholarIcon from "../../assets/google_scholar.svg"
import kaggleIcon from "../../assets/kaggle.svg"
import DownloadApp from '../../assets/play.svg'
import ScrollAnimation from "react-animate-on-scroll";
import foto from "../../assets/landingpage.png"
import furnicraft from "../../assets/furnicraft.png"
import palmMapping from "../../assets/palmmapping.png"
import programbantuan from "../../assets/programbantuan.png"
import survey from "../../assets/survey.png"
export function Project() {
  const data = [
    {
      id: 1,
      image: palmMapping,
      title: "SISTEM PEMETAAN “PALM MAPPING”",
      points: ["Hyperledger Fabric", "Build Api", "expressJs", "reactJs", "mysql", "docker", "leaftletjs", "mapbox", "tailwind", "deployment google cloud"],
    },
    {
      id: 2,
      image: programbantuan,
      title: "Program Kemensos bantuan masyarakat",
      points: ["build api", "express Js", "react Js", "mysql", "docker", "integration email notification breevo", "tailwind" , "deployment oracle cloud"],
    },
    {
      id: 4,
      image: survey,
      title: "Sistem survey kepuasan masyarakat terhadap pelayanan kantor kemenag kota bandung",
      points: ["php", "tailwind", "mysql", "chartjs"],
    },
    {
      id: 4,
      image: furnicraft,
      title: "Ecommerce FURNICRAFT",
      points: ["Laravel", "Bootstrap", "Integration payment gateway midtrans", "integration raja ongkir", "mysql",],
    },
  ];
  return (
    <Container id="project">
      <h2>Projects</h2>
      <div className="projects" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="grid-container" >
      {data.map((item) => (
        <div key={item.id} className="grid-item" >
          <img src={item.image} alt={item.title} style={{ width: '400px', height: '300px'  }} />
          <h3>{item.title}</h3>
          <div className="div-points" id="div-points">
          <ul className="ul-points">
            {item.points.map((point, index) => (
              <li key={index} className="li-point">{point}</li>
            ))}
          </ul>
          <a href="https://github.com/MujahidRamdhani"><img src={githubIcon} alt="Github" className="github-icon" style={{ width: '80px', height: '100px' }}/></a>
          </div>
        </div>
      ))}
    </div>
        


      </div>
    </Container>
  );
}