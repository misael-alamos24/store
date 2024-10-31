// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import './ItemsList.css'; // Archivo de estilos para la lista
import './Item.css'; // Archivo de estilos para el componente
import './cart.css';
import { hex } from './hex';
import { lista } from './lista';


const productos = [
  { nombre: 'Fideos', marca: 'Lucchetti', categoria: 'Pastas', tipo: 'Codito', descripcion: '', tamaño: 'Normal', peso: '500g', costo: '1300', venta: '1950', cantidad: '1', fecha: '17/08/2024', vence: '11/07/2025', lote: '', estado: 'En regla', valores: '1950', total: '224700' },
  // Añadir más productos aquí
]

export default function App () {

	let [list, setList] = useState([]);
	let [cart, setCart] = useState([]);
	let [show, setShow] = useState(false);
	
	useEffect(()=>{
		// axios.get(
		// 'http://localhost:3001/list'
		// ).then(r=> setList(r.data))
		!list.length && setList(lista)
	},[]);

	let msg = '';

	cart && cart.length > 0 && cart.map(
		c => msg += c.Nombre + '%20' 
		+ c.Tipo + '%20'
		+ c.Marca + '%20'
		+ Number(c.quan) + 'u. %24'
		+ Number(c.Venta) * Number(c.quan) + '%0A'
	)
	msg += 'Subtotal %24' + cart.reduce((a, v) => Number(v.Venta) * Number(v.quan) +Number(a), 0)
	msg = msg.split('').map(
		m=> hex.hasOwnProperty(m) ? hex[m] : m
	).join('');
	const button = () => <button className='pointer button-show fixed right0' title='Ver carrito' onClick={()=>setShow(!show)}>
		<div style={{fontSize: '24px'}}>🛒</div>
		<div className='length'>{cart.length}</div>
		<div style={{fontSize: '24px'}}><b>{show?'>':'<'}</b></div>
		<div>
			<div>Ca</div>
			<div>rri</div>
			<div>to</div>
		</div>
		<div style={{fontSize: '24px'}}>🛒</div>
	</button>

  return (
    <div className='App'>
		<h1 style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '16px', textAlign: 'center', width: '50%', margin: 'auto' }}>
			Store
		</h1>
		<div className='flex between'>
			<div className={`w92 margin-x20 left0`}>
				<ItemList productos={list.length ? list : productos} cart={cart} setCart={setCart} list={list}/>
			</div>
			{!show && button()}
			{show &&
			<div className='flex justify-center w100' style={{ position: 'fixed', right: '40px' }}>
				<div style={{ color: '#fff', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '', right: ''}} className='text-start padding20 w100'>
					<div id='list' className='w90'> 
						{/* <span className=''>Lista</span> */}
						{cart.map((c,i) => <div className='w90 cart-container' key={i}>
							{i===0 && 
								<div className='flex between w100'>
									<b className='w60'>Artículo</b>
									<b className='w20 text-center'>Unid.</b>
									<b className='w20 text-center'>Precio</b>
								</div>}
								<div className='flex between w100'>
									<div className='w60'>
										<span>{c.Nombre + ' ' + c.Tipo + ' '}</span>
										<i style={{fontFamily: 'serif'}}>{c.Marca}</i>  
										<span>{' (Art. '+c['i']+')'}</span>
									</div>
									<div className='w20 text-center'>
										<span>{Number(c.quan)}</span>
									</div>
									<div className='flex between w20'>
										<span className=''>$</span>
										<span className=''>{Number(c.Venta) * Number(c.quan) }</span>
									</div>
								</div>
							</div>)}
						<div className='flex between'>
							<b>Subtotal</b>
							<div className='flex between w20'>
								<span>$</span>
								<span>{cart.reduce((a, v) => Number(v.Venta) * Number(v.quan) +Number(a), 0)}</span>
							</div>
						</div>
						{!!(cart.length > 0)&& <a className='a-color' target='_blank' rel="noreferrer" href={`https://wa.me/+541158774985?text=${msg
							//</div>document.getElementById('list').innerText.split('Precio unit')[1]
							}`}>Realizar pedido por WhatsApp</a>}
					</div>
				</div>
				{button()}
			</div>
			}
		</div>
    </div>
  );
};


export const ItemList = ({productos, cart, setCart, quan, setQuan, list, cont, setCont}) => { 
  return (
    <div className="item-container">
		{productos.map((producto, index) => (
			<Item
				i={index}
				key={index}
				nombre={producto.Nombre}     
				marca={producto.Marca}
				categoria={producto.Categoria}
				tipo={producto.Tipo}
				imageUrl={producto.Imagen}
				descripcion={producto.Descripcion}
				tamaño={producto.Tamaño}
				peso={producto.Peso}
				costo={producto.Costo}
				venta={producto.Venta}
				cantidad={producto.Cantidad}
				fecha={producto.Fecha}
				vence={producto.Vence}
				lote={producto.Lote}
				estado={producto.Estado}
				valores={producto.Valores}
				total={producto.Total}
				cart={cart} 
				setCart={setCart}
				list={list}
			/>
		))}
    </div>
  );
};


export const Item = ({ 
	nombre, marca, categoria, tipo, descripcion, tamaño, peso, costo, cart, setCart, 
	list, venta, cantidad, fecha, vence, lote, estado, valores, total, imageUrl, i, 
}) => {
	
  let [quan, setQuan] = useState( 1 ); 
  let [value, setValue] = useState(null); 

  /**
   posibilidades	resultado
   no hay string	1
   '0'				0
   '1'				1
   '2'				1
   */

	useEffect(()=>{
		// console.log({value, quan})
		let filter = cart.filter(c=> c['i'] !== i); //console.log({filter});
		setCart(filter)
		value && setCart([...filter, {...list[i], i, quan}]);
		//eslint-disable-next-line
	}, [value, quan]);

	let array = []
	for (let a = 1; a <= cantidad; a++){
		array[a-1] = a
	}
	!array.length && array.push(1)

	return (
		<div className="item">
		{imageUrl && 
			<img className="item-image" src={imageUrl} loading='lazy' alt="Producto" />
		}
		<div>
			<div className="item-details"></div>
			{/* <div className="item-card"> */}
			{nombre && <p>{nombre + ' ' + tipo}</p>}
			<h3>{ marca }</h3>
			{categoria && <p><strong>Categoría:</strong> {categoria}</p>}
			{peso && <p><strong>Peso:</strong> {peso}</p>}
			{costo && <p><strong>Precio:</strong> ${venta}</p>}
			{vence && <p><strong>Vence:</strong> {vence}</p>}
			{lote && <p><strong>Lote:</strong> {lote}</p>}
			{/* {tipo && <p><strong>Tipo:</strong> {tipo}</p>} */}
			{/* {descripcion && <p><strong>Descripción:</strong> {descripcion}</p>} */}
			{/* {tamaño && <p><strong>Tamaño:</strong> {tamaño}</p>} */}
			{/* {costo && <p><strong>Costo:</strong> ${costo}</p>} */}
			{/* {cantidad && <p><strong>Cantidad:</strong> {cantidad}</p>} */}
			{/* {fecha && <p><strong>Fecha:</strong> {fecha}</p>} */}
			{/* {estado && <p><strong>Estado:</strong> {estado}</p>} */}
			{/* {valores && <p><strong>Valores:</strong> ${valores}</p>} */}
			{/* {total && <p><strong>Total:</strong> ${total}</p>} */}
					<div className='flex'>
						<div className='border padding8 radius-l dotted-r border-r0 pointer underline w80 backlime' 
						onClick={()=>setValue(!!!value)}> Agregar al carrito
							<input value={!!value} checked={!!value} type='checkbox' className='pointer' onChange={()=>setValue(!!!value)}/>
						</div>
						<select className='w20 radius-r backlime border border-l0' onChange={(e)=>setQuan(Number(e.target.value))}>
							{array.map(n=><option className='backblack' key={n}>{n}</option>)}
						</select>
					</div>
		</div>
		</div>
	);
};
