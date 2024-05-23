import logohtml from '../assets/logo-html.webp'
import logocss from '../assets/logo-css.webp'
import logojs from '../assets/logo-js.webp'
import logobootstrap from '../assets/logo-bootstrap.webp'
import logoreact from '../assets/logo-react.webp'
import logogit from '../assets/git_original.webp'
import logocs from '../assets/logocs.webp'
import logosqlserver from '../assets/sqlServer.png'
import '../styles/tecnologias.css'

export const TecnologiasUsadas = () => {
  return (
    <div className='row'>
      <div className="col-12">
        <img className='me-4' src={logohtml} alt="logo HTML" id='logoHTML'/>
        <img className='me-4' src={logocss} alt="Logo CSS" id='logoCSS'/>
        <img className='me-4' src={logojs} alt="Logo JavaScript" id='logoJS'/>
        <img className='me-4' src={logobootstrap} alt="Logo Bootstrap" id='logoBootstrap'/>
        <img className='me-4' src={logoreact} alt="Logo React" id='logoReact'/>
        <img className='me-4' src={logogit} alt="Logo Git" style={{width: "100px"}} id='logoGit'/>
        <img className='me-4' src={logocs} alt="Logo C#" style={{width: "100px"}} id='logoCs'/>
        <img className='me-4' src={logosqlserver} alt="Logo SQL Server" style={{width: "100px"}} id='logoSQLServer'/>
      </div>
    </div>
  )
}
