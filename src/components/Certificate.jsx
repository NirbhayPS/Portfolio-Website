import React from "react"
import CertificateItem from './CertificateItem'
import cloudImg from '../assets/cloudImg.png'
import cyberImg from '../assets/cyberImg.png'
import ethicalImg from '../assets/ethicalImg.png'
import codekazeImg from '../assets/codekazeImg.png'



const Certificate = () => {
  return (
    <div id="Certificate" className="max-w-auto m-auto md:pl-20 p-4 py-16 certificatemaincss">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center certificatemain">Certificates</h1>
        <br></br> <br></br>
            
        <div className="grid sm:grid-cols-2 gap-12 ">
          
            <CertificateItem img={cloudImg} title = 'Cloud Computing' link='https://drive.google.com/file/d/1U0V6yEvEM6ORu0SbATOEEFNf4kE7v4h-/view?usp=sharing'/>
            <CertificateItem img={cyberImg} title = 'Cyber Security' link='https://drive.google.com/file/d/1RJTSPCF6X1OcjxElpLR-yalKdjNY59Xm/view?usp=sharing'/>
            <CertificateItem img={ethicalImg} title = 'Ethical Hacking' link='https://drive.google.com/file/d/1hxv2QjThYhGQcf1cEJMUlhYZFNl-m4LI/view?usp=sharing'/>
            <CertificateItem img={codekazeImg} title = 'CodeKaze AIR 2405' link='https://drive.google.com/file/d/1K3upL4kcMLr-21e5pg56ONSnA6J66K-E/view?usp=sharing'/>
        </div>
      </div>

        
    </div>
  )
}
export default Certificate