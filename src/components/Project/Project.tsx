import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import furnicraft from "../../assets/furnicraft.png"
import palmMapping from "../../assets/palmmapping.png"
import programbantuan from "../../assets/programbantuan.png"
import survey from "../../assets/survey.png"
import erp from "../../assets/ERP.jpg"
import home from "../../assets/home.png"
export function Project() {
  const data = [
    {
      id: 1,
      image: home,
      title: "LEARNING MANAGEMENT SYSTEM SMP SALMAN ALFARISI",
      points: ["membuat rest api menggunakan express", "menerapkan rest api dengan nextjs", "typescript", "mui", "mysql", "redis", "import excel", "deployment", "QR Code"],
      github: "https://github.com/MujahidRamdhani",
    },
    {
      id: 2,
      image: erp,
      title: "LIBRARY MANAGEMENT SYSTEM",
      points: ["membuat rest api menggunakan nest js", "postgresql", "typescript", "redis", "deployment"],
      github: "https://github.com/MujahidRamdhani",
    },
    {
      id: 3,
      image: erp,
      title: "ERP MODULE QUALITY CONTROL",
      points: ["PHP", "AJAX JQUERY", "JAVASCRIT", "EASYUI", "MYSQL"],
      github: "https://github.com/MujahidRamdhani",
    },
    {
      id: 4,
      image: erp,
      title: "ERP MODULE QUALITY CONTROL",
      points: ["PHP", "AJAX JQUERY", "JAVASCRIT", "EASYUI", "MYSQL"],
      github: "https://github.com/MujahidRamdhani",
    },
    {
      id: 5,
      image: palmMapping,
      title: "SISTEM PEMETAAN “PALM MAPPING”",
      points: ["Hyperledger Fabric", "Build Api", "expressJs", "reactJs", "mysql", "docker", "leaftletjs", "mapbox", "tailwind", "deployment google cloud"],
      github: "https://github.com/MujahidRamdhani/frontend-palmmapping/tree/main",
    },
    {
      id: 6,
      image: survey,
      title: "Sistem survey kepuasan masyarakat terhadap pelayanan kantor kemenag kota bandung",
      points: ["php", "tailwind", "mysql", "chartjs"],
      github: "https://github.com/MujahidRamdhani",
    },
    {
      id: 7,
      image: furnicraft,
      title: "Ecommerce FURNICRAFT",
      points: ["Laravel", "Bootstrap", "Integration payment gateway midtrans", "integration raja ongkir", "mysql",],
      github: "https://github.com/MujahidRamdhani/laravel10-ecomerce",
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
          <a href={item.github}><img src={githubIcon} alt="Github" className="github-icon" style={{ width: '60px', height: '100px' }}/></a>
          </div>
        </div>
      ))}
    </div>
   </div>
    </Container>
  );
}