import { objectStores } from "../stores/object";
import whatsLogo from '../assets/WhatsApp.png';
import { useNavigate } from "react-router-dom";

export default function Stores() {
    let navigate = useNavigate();
    let colour = (color) => {return {color}}
    let o = objectStores;
    let pot = o.Papa
    let bat = o.Batata
    let ceb = o.Cebolla
    let zan = o.Zanahoria
    let zap = o.Anco
    let tom = o['Tomate perita']
    let ban = o.Banana
    let man = o.Manzana
    let nar = o.Naranja
    let fru = o.Frutilla
    let lim = o.Limón
    let dur = o.Durazno
    // let red = colour('red')
    let orange = colour('orange')
    // let yellow = colour('yellow')
    // let orangered = colour('orangered')
    // let wheat = colour('wheat')
    let yellowgreen = colour('yellowgreen')
    const gotohome = () => navigate('/')
    return (
    <div className="App" style={{backgroundColor: 'black'}}>
        <div style={{color:'rgb(160,160,160)'}}>
            Lista de precios mayoristas
            <br/>
            <br/>
            Pedido mínimo: $15.000
            <br/>
            <br/>
            Superando el monto de $30.000, se aplica un 5% de descuento
            <br/>
            <br/>
            {/* Superando el monto de $40.000, permanece el 5% de descuento y el envío no tiene costo
            <br/>
            <br/> */}
            <div><u onClick={gotohome}>Hacer clic acá para pedidos menores</u></div>
            <br/>
            Contacto:
        </div>
    <br/>
    <div>
                  {/* <div className='flex center'> */}
                      <a href='https://wa.me/+541158774985' title='Enviar un mensaje de WhatsApp' target='_blank' rel="noreferrer">
                          <img src={whatsLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                      </a>
                  
                      {/* <a href='https://www.facebook.com/profile.php?id=100095438713871' title='Visitar página de facebook' target='_blank' rel="noreferrer">
                          <img src={faceLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                      </a>
                  
                      <a href='https://www.instagram.com/almacenstack/' title='Visitar página de instagram' target='_blank' rel="noreferrer">
                          <img src={instaLogo} style={{height: '64px', margin: 'auto 16px'}} alt=''/>
                      </a> */}
                  {/* </div> */}
        {/* <img src={whatsapp} href='' style={{width: '50px', borderRadius: '8px'}}/> */}
      </div>
      <br/> <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
        Papa
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>bolsa </div>
        <div>{pot.bolsa}</div> </div>
  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>1/2 bolsa </div>
        <div>{pot['1/2 bolsa']}</div> </div>
  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>1/4 bolsa </div>
        <div>{pot['1/4 bolsa']}</div> </div>
  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>por kg </div>
        <div>{pot['por kg']}</div> </div>
  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>por 2kg </div>
        <div>{pot['por 2kg']}</div> </div>
  
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        
        <div>por kg oferta </div>
        <div>{pot['por kg oferta']}</div> </div>
  
     <br/></div>
     <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'pink', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Batata
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div><div>{bat.bolsa}</div> </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div><div>{bat['1/2 bolsa']}</div> </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div><div>{bat['1/4 bolsa']}</div> </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div><div>{bat['por kg']}</div> </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div><div>{bat['por 2kg']}</div> </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div><div>{bat['por kg oferta']}</div> </div>
    <br/></div>
    <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Cebolla
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div><div>{ceb.bolsa}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div><div>{ceb['1/2 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div><div>{ceb['1/4 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div><div>{ceb['por kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div><div>{ceb['por 2kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div><div>{ceb['por kg oferta']}</div></div>
    <br/></div>
    <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'orangered', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Zanahoria
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div> <div>{zan.bolsa}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div> <div>{zan['1/2 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div> <div>{zan['1/4 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{zan['por kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{zan['por 2kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{zan['por kg oferta']}</div></div>
    <br/></div>
    <br/>  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'orange', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Anco
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>bolsa </div> <div>{zap.bolsa}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 bolsa </div> <div>{zap['1/2 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 bolsa </div> <div>{zap['1/4 bolsa']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{zap['por kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{zap['por 2kg']}</div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{zap['por kg oferta']}</div></div>
    <br/></div>
    <br/>  
    <div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Tomate perita
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div> {tom.bolsa} </div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div> {tom['1/2 bolsa']} </div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div> {tom['1/4 bolsa']} </div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div> {tom['por kg']} </div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div> {tom['por 2kg']} </div></div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div> {tom['por kg oferta']} </div></div>
    </div>
    <br/>  
    {/* <div style={{display: 'block', width: '200px', margin: 'auto', color: 'green', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Acelga
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Acelga['por atado']}</div></div>
    </div>
    <br/>
    
    <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellowgreen', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Perejil
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Perejil['por atado']}</div></div>
    </div>
    <br/>
    
    <div style={{display: 'block', width: '200px', margin: 'auto', color: 'white', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Verdeo
      <div style={{display: 'flex', justifyContent: 'space-between'}}><div>atado </div> <div>{o.Verdeo['por atado']}</div></div>
    </div>
    <br/> */}
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Banana
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{ban.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{ban["1/2 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{ban["1/4 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{ban['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{ban['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{ban['por kg oferta']}</div></div>
    </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Frutilla
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{fru.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{fru["1/2 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{fru["1/4 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{fru['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{fru['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{fru['por kg oferta']}</div></div>
    </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellowgreen', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Limón
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{lim.bolsa} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{lim["1/2 bolsa"]} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{lim["1/4 bolsa"]} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg $</div> <div>{lim['por kg']} </div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg $</div> <div>{lim['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta $</div> <div>{lim['por kg oferta']} </div></div>
    </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'red', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Manzana
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{man.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{man["1/2 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{man["1/4 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{man['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{man['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{man['por kg oferta']}</div></div>
    </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto',  color: 'orange', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Naranja
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{nar.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{nar["1/2 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{nar["1/4 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{nar['por kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{nar['por 2kg']}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{nar['por kg oferta']}</div></div>
    </div>
  <br/>
  <div style={{display: 'block', width: '200px', margin: 'auto', color: 'yellow', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>Durazno
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>cajón </div> <div>{dur.bolsa}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/2 cajón </div> <div>{dur["1/2 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>1/4 cajón </div> <div>{dur["1/4 bolsa"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg </div> <div>{dur["por kg"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por 2kg </div> <div>{dur["por 2kg"]}</div></div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}><div>por kg oferta </div> <div>{dur["por kg oferta"]}</div></div>
    </div>
    <br/>
    <div style={{display: 'block', width: '200px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
      Ofertas de fruta
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg manzana</b> + <b style={orange}>1kg naranja</b> = {Math.ceil((man['por kg oferta']+nar['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg manzana</b> + <b style={yellowgreen}>1kg frutilla</b> = {Math.ceil((man['por kg oferta']+fru['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg banana</b> = {Math.ceil((fru['por kg oferta']+ban['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg naranja</b> = {Math.ceil((nar['por kg oferta']+fru['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg banana</b> + <b style={orange}>1kg naranja</b> = {Math.ceil((ban['por kg oferta']+nar['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {Math.ceil((man['por kg oferta']+ban['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {Math.ceil((nar['por kg oferta']+ban['por kg oferta']+man['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg naranja</b> +  <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg manzana</b> = {Math.ceil((nar['por kg oferta']+fru['por kg oferta']+man['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> +  <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg banana</b> = {Math.ceil((nar['por kg oferta']+fru['por kg oferta']+ban['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg frutilla</b> + <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {Math.ceil((ban['por kg oferta']+fru['por kg oferta']+man['por kg oferta'])/10)*10} </div>
      <br/><br/>
      <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg frutilla</b> + <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {Math.ceil((man['por kg oferta']+fru['por kg oferta']+ban['por kg oferta']+nar['por kg oferta'])/10)*10} </div>
      </div>
      <br/><br/>
    </div>
    );
  }<br/>
  