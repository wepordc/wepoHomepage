import bg1 from "../assets/1.png"
import stick from "./../assets/stick.svg"
import ladyphone from './../assets/lady.png'
import phone1 from './../assets/phone1.png'
import phone2 from './../assets/phone2.png'
import phone3 from './../assets/phone3.png'
import phone4 from './../assets/phone4.png'
import sparker from './../assets/sparker.svg'
import {gsap} from 'gsap'
import { useRef, useEffect } from "react"


function Cta(props){
    
    return(
        <div>
            <button className={props.class}>Rejoignez la liste d’attente</button>
        </div>
    )
}

function Hero(){
    const boxRef = useRef()
    const heroRef = useRef()
    const heroBRef = useRef()
    const ttRef = useRef()

    useEffect(()=>{
        //gsap.from(boxRef.current, {opacity:0, duration:1,translateY:10})
        //gsap.to(boxRef.current, {opacity:1, duration:1.5, translateY:0})
        //gsap.from(heroRef.current, {opacity:0, duration:1, translateX:-40})
        //gsap.to(heroRef.current, {opacity:1, duration:2.5, translateX:0})
        //gsap.from(heroBRef.current, {opacity:0, duration:1, translateX:-40} )
        //gsap.to(heroBRef.current, {opacity:1, duration:1.5, translateX:0})
        let tl = gsap.timeline({paused:true, repeat:-1,  repeatDelay:1})

        var items = document.querySelectorAll("#copywrite"), length = items.length
        //tl.to(ttRef.current, {y:20, duration:1.5})
        let duration = 1
        for (let i =0; i<length; i++){
            tl.from(items[i], 1, {y:40, opacity:0})
            tl.to(items[i], 4, { y: 0, opacity: 1})
            tl.to(items[i], duration*0.7, { y: 0, opacity: 0, })
        }
        tl.play()
        
    },[])

    return(
      <>
      <div className = "heroContainer">
      <div ref={heroBRef} className="heroLeft">
        <div className="switch">

            <h1 ref={ttRef} id="copywrite" >Teka</h1>
            <h1 ref={ttRef} id="copywrite" >Compenser</h1>
            <h1 ref={ttRef} id="copywrite" >Luka</h1>
        </div>
        <h1 id="end">bor nayo cho!</h1>
        <p>Trouvez des produits selon votre budget, Evitez les malaria, comparez les prix des produits, le tout dans une seule application.</p>
        <p>Vous n’acheterez plus les produits d’occasion de la même manière.</p>
        <Cta class="CTA"/>
      </div>
      <div  ref={heroRef} className="heroRight">
        <img src={ladyphone}></img>
      </div>
    </div>
    <div className="divide">
      <h2>Une nouvelle façon de dealer...</h2>
    </div>
    <div className="benefit">
      <div className='xp'>
        <img className="stick left"src={stick}></img>
        <img className="phone"src={phone1}></img>
        <div className="solutionText">
          <h2>Trouvez des produits selon vos conditions.</h2>
          <p>Vous n’êtes plus obligé de parcourir la liste de tous les produits, vous pouvez maintenant découvrir des produits en fonction de votre budget, votre localisation et vos critères</p>
        </div>
      </div>
      <div className='xp'>
        <img className="stick right"src={stick}></img>
        <div className="solutionText">
          <h2>Trouvez des produits selon vos conditions.</h2>
          <p>Vous n’êtes plus obligé de parcourir la liste de tous les produits, vous pouvez maintenant découvrir des produits en fonction de votre budget, votre localisation et vos critères</p>
        </div>
        <img className="phone"src={phone2}></img>
      </div>
      <div className='xp'>
        <img className="stick left"src={stick}></img>
        <img className="phone"src={phone3}></img>
        <div className="solutionText">
          <h2>Trouvez des produits selon vos conditions.</h2>
          <p>Vous n’êtes plus obligé de parcourir la liste de tous les produits, vous pouvez maintenant découvrir des produits en fonction de votre budget, votre localisation et vos critères</p>
        </div>
      </div>
      <div className='xp'>
        <img className="stick right"src={stick}></img>
        <div className="solutionText">
          <h2>Trouvez des produits selon vos conditions.</h2>
          <p>Vous n’êtes plus obligé de parcourir la liste de tous les produits, vous pouvez maintenant découvrir des produits en fonction de votre budget, votre localisation et vos critères</p>
        </div>
        <img className="phone"src={phone4}></img>
      </div>
    </div>

    <div className="lastCTA">
        <img className="sparker" src={sparker}></img>
        <h3>Faites parti de ceux qui dealent avec nous</h3>
        <Cta class="CTA xx"/>
    </div>
  </>
    )
  }
export default Hero