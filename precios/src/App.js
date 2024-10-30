// import logo from './logo.svg';
// import whatsapp from './whatsappIcon.png';
import './App.css';
import { object } from './object';
import whatsLogo from './assets/WhatsApp.png';
// import faceLogo from './assets/Facebook.png';
// import instaLogo from './assets/Instagram.png';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import Stores from './components/Stores';
import Product from './components/Product';
import { useSelector } from 'react-redux';
import Fraction from './components/Fraction';
import { useEffect, useState } from 'react';
import List from './components/List';

export const router = createBrowserRouter([
  {
    path: '/mayoristas',
    element: <Stores/>
  },
  {
    path: '/',
    element: <App/>
  },
]);

function App() {
  let list = useSelector(state => state.list); console.log({list})
  let [show, setShow] = useState(true);
  let [help, setHelp] = useState(false);

  let colour = (color) => {return {color}}
  let o = object;
  let pot = o.Papa
  // let bat = o.Batata
  // let ceb = o.Cebolla
  // let zan = o.Zanahoria
  // let zap = o.Anco
  // let tom = o['Tomate perita']
  let ban = o.Banana
  let man = o.Manzana
  let nar = o.Naranja
  let fru = o.Frutilla
  let lim = o.Limón
  let dur = o.Durazno
  let variables = Object.keys(object).map(prod => {return {...object[prod], prod}}); 
  // let red = colour('red')
  let orange = colour('orange')
  // let yellow = colour('yellow')
  // let orangered = colour('orangered')
  // let wheat = colour('wheat')
  let yellowgreen = colour('yellowgreen')
  //const additem = (a) => console.log({a}) 
  let sumaIds = 0;
  list && list.all && list.all.forEach(item => sumaIds += item.p * item.selected)

  let msg = ''

  list && list.all && list.all.map(
    (item,i)=>msg+='$'+item.p*item.selected+' '
    +item.product+', '
    +item.fraction.split('<br/>').join('')
    .split('<b>').join('')
    .split('</b>').join('')
    .split('<del>').join('')
    .split('</del>').join('')
    +', ('+item.selected+'u) %0A'
  )
  msg+='\n'+ '$'+sumaIds+' Total'

  console.log({list, msg})
  
  const productos = [
    { 
      nombre: 'Fideos', marca: 'Lucchetti', categoria: 'Pastas', tipo: 'Codito', descripcion: '', tamaño: 'Normal', peso: '500g', costo: '1300', venta: '1950', cantidad: '1', fecha: '17/08/2024', vence: '11/07/2025', lote: '', estado: 'En regla', valores: '1950', total: '224700' 
    },
    // Añadir más productos aquí
  ]

  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <div style={{
      display: 'block', 
      width: '240px', 
      maxWidth: '95vw',
      margin:'0px auto auto 0px', 
      color: 'rgb(224,224,224)',
    }}>
      <div style={{
        position: 'fixed',
        backgroundColor: 'rgb(50,50,50,0.8)',
        border: '1px solid orange',
        padding: '8px',
        margin:'0px', 
        maxHeight: '60vh',
        overflowY: 'scroll',
        scrollbarColor: 'black',
        
      }}>
        <button onClick={()=>setShow(true)} disabled={show}>Mostrar cuenta</button>
        <button onClick={()=>setShow(false)} disabled={!show}>Ocultar cuenta</button>
        {list && list.all && !!list.all.length && show &&
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          backgroundColor: 'black',
          padding: '4px 6px',
          color: 'white',
          margin: 'auto -4px',
          border: '1px solid white',
          fontSize: '10px',
          maxHeight:'fit-content'
        }}>
          <b style={{width: '20%', borderRight: '1px solid gray', paddingRight: '2px'}}>Unids</b>
          <b style={{width: '30%', borderRight: '1px solid gray', paddingRight: '2px'}}>Producto</b>
          <b style={{width: '30%', borderRight: '1px solid gray', paddingRight: '2px'}}>Cantidad unitaria</b>
          <b style={{width: '20%', paddingRight: '2px'}}>Precio</b>
        </div>
        }
        { show &&
        list && list.all && list.all.map(
          (item,u) => <List key={u} item={item} />)
          }
        {list && list.all && !!list.all.length && 
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          backgroundColor: 'black',
          padding: '4px 6px',
          color: 'white',
          margin: 'auto -4px',
          border: '1px solid white'
        }}>
          <b>Total</b>
          <b>
            {sumaIds}
          </b>
        </div>}
        {list && list.all && !!list.all.length && 
        <div style={{width: '100%', display: 'block'}}>
          <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            backgroundColor: 'black',
            padding: '4px 6px',
            color: 'white',
            margin: 'auto -4px',
            border: '1px solid white',
            width: '100%'
          }}>
            <a 
              style={{width: '100%'}}
              href={`https://wa.me/+541158774985?text=${msg}`}
              title='Continuar con WhatsApp' 
              target='_blank' 
              rel="noreferrer"
            >
              <button 
                style={{height: '100%', width: '100%', padding: '5px auto'}} 
                onClick={()=>{}}>
                <b>Confirmar pedido</b>
              </button>
            </a>
          </div>
          <div>
            <button onClick={()=>setHelp(!help)}>¿Cómo realizar un pedido?</button>
          </div>
          {help && 
          <div style={{fontSize: '13px', backgroundColor: 'rgb(32,32,32,0.8)', color: 'rgb(224,224,224)', textAlign: 'start'}}>
            <br/>
            Confirmá un pedido en 2 pasos: <br/>
            1. Pulsá "Confirmar pedido".<br/>
            2. Se te redirigirá a WhatsApp, enviá
            el mensaje autogenerado y ya estamos.
            <br/><br/>
            O también podés optar por enviar una captura 
            o una foto de la lista por WhatsApp 
            pulsando {' acá: '}
            <a className='awp' href='https://wa.me/+541158774985' target='_blank'><u color='orange'>Enviar WhatsApp</u></a>.
            <br/><br/>
            <button onClick={()=>setHelp(!help)}>Listo</button>
          </div>}
        </div>
        }
      </div>
    </div>
      <div style={{color:'gray', paddingTop: '80px', border: '1px solid gray', width: '240px', borderRadius: '8px', margin: 'auto'}}>
        Lista de precios 
        <br/>
        Última actualización: 12 de abril de 2024
        <br/>
        <br/>
        Domicilio local: 
        <br/>
        Vicente Casares 230, Alejandro Korn.
        <br/>
        <a href='https://maps.app.goo.gl/WuXhmb4KWm1cMAC38' target='_blank'>Ver en maps</a>
        <br/>
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
      <br/> 
      
      {variables.map((v,i)=> { 
        console.log(v['prod'], {v})
          return <div key={i}> <Product ip={i} product={v['prod']} color={v['color']} /> <br/></div>
        }
      )}
    <br/>
  {/* <div style={{display: 'block', width: '220px', margin: 'auto', color: 'wheat', backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
    Ofertas de fruta */}
    {/* <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg manzana</b> + <b style={orange}>1kg naranja</b> = {man['por 2kg']/2+nar['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg manzana</b> + <b style={yellowgreen}>1kg durazno</b> = {man['por 2kg']/2+dur['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg durazno</b> + <b style={orange}>1kg banana</b> = {dur['por 2kg']/2+ban['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg naranja</b> = {nar['por 2kg']/2+dur['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg banana</b> + <b style={orange}>1kg naranja</b> = {ban['por 2kg']/2+nar['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {man['por 2kg']/2+ban['por 2kg']/2} </div> */}
    {/* <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {nar['por 2kg']/2+ban['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg naranja</b> +  <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg manzana</b> = {nar['por 2kg']/2+dur['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg naranja</b> +  <b style={orange}>1kg durazno</b> + <b style={orange}>1kg banana</b> = {nar['por 2kg']/2+dur['por 2kg']/2+ban['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={yellowgreen}>1kg durazno</b> + <b style={yellowgreen}>1kg banana</b> + <b style={yellowgreen}>1kg manzana</b> = {ban['por 2kg']/2+dur['por 2kg']/2+man['por 2kg']/2} </div>
    <br/><br/>
    <div style={{color: 'white', backgroundColor: 'rgb(50,50,50,0.5)'}}> <b style={orange}>1kg durazno</b> + <b style={orange}>1kg naranja</b> + <b style={orange}>1kg banana</b> + <b style={orange}>1kg manzana</b> = {man['por 2kg']/2+dur['por 2kg']/2+ban['por 2kg']/2+nar['por 2kg']/2} </div> */}
    {/* </div> */}
    {/* <br/><br/> */}
  </div>
  );
}<br/>

export default App;
