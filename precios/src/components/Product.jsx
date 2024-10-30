import { useSelector } from "react-redux";
import { object } from "../object";
import Fraction from "./Fraction";

export default function Product ({product, color, ip}) {
    
    let list = useSelector(state => state.list); console.log({list, product, color, ip})

    return(
        <div style={{display: 'block', width: '240px', margin: 'auto', color, backgroundColor: 'rgb(50,50,50,0.5)', padding: '10px'}}>
            <div style={{display:'flex' , justifyContent: 'space-between'}}>
                <div style={{display: 'flex', margin: 'auto'}}>
                    {product}
                </div>
                <div style={{fontSize:'9px', marginRight: '7px'}}>
                    Agregar ↓
                </div>
            </div>
            {Object.keys(object[product]).map((o,i) => o !== 'color' && <Fraction 
                key={i} 
                object={object[product]}
                product={product}
                fraction={o} 
                price={object[product][o]}
                ip={ip}
                i={i}
                // price2={Object.values(object[product])[i]}
            />)}
        </div>
    )
}