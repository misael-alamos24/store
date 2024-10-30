import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { delList, postList } from "../redux/actions/list";

export default function Fraction ({object, product, fraction, i, ip, price, priceint, itotal}) { 
    console.log({product, fraction, tf: typeof fraction, tp: typeof product,
        i, ip, price, priceint, itotal
    })

    let list = useSelector(state=> state.list);
    let dispatch = useDispatch();

    const find = (s) =>{
        selected && dispatch(delList({product, fraction, id: itotal || String(ip)+String(i), p, selected: s}))
        selected && dispatch(postList({product, fraction, id: itotal || String(ip)+String(i), p, selected: s}))
    }

    let [input, setInput] = useState(null); 
    let [selected, setSelected] = useState(''); console.log({selected})
    // let [title, setTitle] = useState(null); //console.log({title})
    // let [value, setValue] = useState(fraction); 
    // console.log({product, fraction, input, id: String(ip)+String(i)})

    let p = priceint || Number(price) === price ? price : Number(price.slice(1))
    // console.log({p})

    useEffect(()=>{
        input && dispatch(postList({product, fraction, id: itotal || String(ip)+String(i), p, selected}))
        !!!input && dispatch(delList({product, fraction, id: itotal || String(ip)+String(i), p, selected}))
    }, [input]);

    let options = new Array(5);
    for (let a = 0; a<options.length; a++) {options[a] = a+1}
    options[0] !== '' && options.unshift('')
    // options = options.map((o,i)=>!o&&i+1)

    // useEffect(()=>{
    //     selected !== '' && !input && setInput(true)
    //     selected === '' && input && setInput(false)
    //     // setInput(!!(selected === ''))
    // }, [selected, input])
    
    // useEffect(()=>{
    //     input && dispatch(putList({product, fraction, id: itotal || String(ip)+String(i), p, selected}))
    // }, [selected]);

    const muting = (v) => {setSelected(v); setInput(!!v); find(v)}

    useEffect(()=>{
        if (document.getElementById(String(ip)+String(i)).innerHTML !== fraction) document.getElementById(String(ip)+String(i)).innerHTML = fraction
    }, [])

    let condition = (fraction.includes('llevando') ||
    (typeof object[fraction] === 'string' && object[fraction].includes('%'))
    )

    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between'}}
            >
            <div 
            onClick={()=> {!condition  && setInput(!input); setSelected(selected? '': '1')}}
            className={!condition  ? 'input' :''}
            style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                margin: '4px -4px', 
                cursor: 'pointer', 
                borderRadius: '5px', 
                width: '100%',
                padding: '2px 4px',
                border: input ? '1px solid yellowgreen' : ''
            }}>
                <div 
                style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between'
                }}> 
                    <div id={String(ip)+String(i)}> </div> 
                    <div>
                        {fraction === 'Por 2kg' && '$'}
                        {object[fraction]}
                    </div> 
                </div> 
                { condition ? <></>:
                <div style={{display: 'flex'}}>{
                    <input 
                    type='checkbox' 
                    checked={!!input} 
                    style={{cursor: 'pointer'}}
                    onChange={(e)=>{setInput(!input); setSelected(selected? '': '1')}}
                    value={!!input}
                    /> 
                    }
                </div>}
            </div>
                { !condition &&
                <select style={{height: '32px', backgroundColor: 'black', color: 'white'}}
                value={selected} 
                onChange={e=>muting(e.target.value)}>
                    {options.map((e,i)=><option color="white" style={{backgroundColor: 'black'}} key={i}>{e}</option>)}
                </select>}
        </div>
    )
}