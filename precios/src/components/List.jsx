import { useEffect } from "react"

export default function List ({item}) {

    useEffect(()=>{
      if (document.getElementById(item.id).innerHTML !== item['fraction'] === 'por kg' ? '1kg' : item['fraction']
      )     document.getElementById(item.id).innerHTML = item['fraction'] === 'por kg' ? '1kg' : item['fraction'] 
    },[item]);

    return (
        <div 
            style={{margin: 'auto'}}
        > 
            <div 
                className= 'input'
                style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    margin: '4px -4px', 
                    cursor: 'pointer', 
                    borderRadius: '5px', 
                    padding: '2px 4px',
                    backgroundColor: 'rgb(0,0,0,0.9)'
                }}
            >
                <div 
                    style={{ 
                        width: '100%', 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        padding: '4px 2px',
                    }}
                >
                    {/* <div>Item: {u} </div> https://wa.me/+541158774985?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo
                    <div>Cod: {item['id']}</div> */}
                    <div style={{width: '20%', fontSize: '12px', borderRight: '1px solid grey', paddingRight:'1px'}}>({item['selected']})</div>
                    <div style={{width: '30%', fontSize: '12px', borderRight: '1px solid grey', paddingRight:'1px', height: 'fit-content'}}>{item['product']}</div>
                    <div style={{width: '30%', fontSize: '12px', borderRight: '1px solid grey', paddingRight:'1px'}} id={item.id}> </div>
                    <div style={{width: '20%', fontSize: '12px', paddingRight:'1px', marginRight:'0px', textAlign: 'right'}}>${item['p']*item['selected']}</div>
                </div> 
            </div>
        </div>
    )     
}