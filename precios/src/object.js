function calculate (peso, precio, entire = 1.4, threequarts = 1.45, half = 1.5, quart = 1.55, kg = 1.6) {
	let pp = precio / peso;
	return {
		'1 bolsa': '$' + Math.ceil((precio * entire) / 100) * 100,
		'3/4 bolsa': '$' + Math.ceil((precio * .75 * threequarts) / 100) * 100,
		'1/2 bolsa': '$' + Math.ceil((precio * .5 * half) / 100) * 100,
		'1/4 bolsa': '$' + Math.ceil((precio * quart * .25) / 100) * 100,
		'por kg': '$' + Math.ceil((pp * kg) / 100) * 100,
	}
}
//papa cebolla anco zan batata

export let object = {
    Papa: {
      color: 'yellow',
      ...calculate(17, 8800)
    },
    Cebolla: {
      color: 'wheat',
      ...calculate(17, 16000)
    },
    Anco: {
      color: 'orange',
      ...calculate(13, 6000)
    },
    Zanahoria: {
      color: 'orangered',
      ...calculate(9, 7000)},
    Batata:
     {
      color: 'violet',
      ...calculate(13, 8000)
    },
    // 'Tomate perita': {
    //   bolsa: '(17kg) $5800',
    //   '1/2 bolsa': '(8.5kg) $3000',
    //   '1/4 bolsa': '(4.25kg) $1550',
    //   'por kg': '$390',
    //   'por 2kg': '$730',
    //   'por kg oferta': 365
    // },
  // 'Tomate perita': {
  //   'Cajón (17kg)': '$13900',
  //   // 'llevando 1 bolsa': '$817 por kg',
  //   '3/4 Cajón (12.75kg)': '$10800',
  //   '1/2 Cajón (8.5kg)': '$7400',
  //   '1/4 Cajón (4.25kg)': '$3800',
  //   // 'llevando 1/4 bolsa': '$590 por kg',
  //   'Por kg': '$900',
  //   color: 'red',
  // },
  // 'Huevos N° 1': {
  //   '1/2 Docena (6u)': '$1000',
  //   '1 Docena (12u)': '$1950',
  //   '1/2 Maple (15u)': '$2400',
  //   'Maple': '$4800',
  //   color: 'pink'
  // },
  // 'Huevos N° 3': {
  //   '1/2 Docena (6u)': '$900',
  //   color: 'pink'
  // },
  // 'Bizcochos 9 de oro': {
  //   Clásicos: '$800',
  //   Azucarados: '$800',
  //   color: 'gold',
  // },
  // 'Fideos Favorita 500g': {
  //   Spaghetti: '$950',
  //   Codito: '$950',
  //   Mostachol: '$950',
  //   color: 'red',
  // },
  // 'Fideos Lucchetti 500g': {
  //   'Codito': '$1800',
  //   'Tirabuzón': '$1800',
  //   color: 'rgb(22,142,203)',
  // },
  // 'Puré de tomate 520g': {
  //   'S&P': '$850',
  //   color: 'red',
  // },
  // 'Arroz Parboil 500g': {
  //   'Molinos Ala': '$1700',
  //   color: 'yellow'
  // },
  // 'Manaos 2.25L': {
  //   Cola: '$1100',
  //   Lima: '$1100',
  //   Pomelo: '$1100',
  //   color: 'red'
  // },
  // 'Aceite suelto Natura': {
  //   '1 Litro': '$1600',
  //   '2 Litros': '$3000',
  //   'Precio por litro llevando 2': '$1500',
  //   color: 'goldenrod',
  // },
  // 'Harina de Trigo Leudante': {
  //   'Marolio 1kg': '$600',
  //   'color': 'burlywood',
  // },
  Azúcar: {
    'Salvador 1kg': '$1500',
    'Salvador 2kg': '$2800',
    'llevando 2kg': '$1400 por kg',
    color: 'burlywood'
  },
  // Acelga: {
  //   '<b>Atado</b>': '$1500',
  //   color: 'green',
  // },
  // Perejil: {
  //   Atado: '$1700',
  //   color: 'greenyellow',
  // },
  // Verdeo: {
  //   '<b>Atado</b>': '$2000',
  //   color: 'green',
  // },
  // Radicheta: {
  //   Atado: '$1300',
  //   color: 'pink'
  // },
  // Remolacha: {
  //   Atado: '$900',
  //   color: 'violet'
  // },
  // Berenjena: {
  //   'Por kg': '$800',
  //   'Por 2kg': '$1500',
  //   color: 'pink'
  // },
  // Repollo: {
  //   'Por kg': '$900',
  //   color: 'yellowgreen'
  // },
  // 'Banana (para licuado)': {
  //   // bolsa: '(19kg) $sin precio',
  //   // '1/2 bolsa': '(9.5kg) $sin precio',
  //   // '1/4 cajón (4.75kg)': '$6000',
  //   'Por 1/2 kg': '$500',
  //   'Por kg': '$1000',
  //   'Por 2kg': 1800,
  //   // 'Por 3kg': '$3900',
  //   // 'llevando 3kg': '$1300 por kg',
  //   color: 'yellow',
  // },
  // Manzana: {
  //   // bolsa: '(17kg) $sin precio',
  //   // '1/2 bolsa': '(8.5kg) $sin precio',
  //   // '1/4 bolsa': '(4.25kg) $sin precio',
  //   'Por kg': '$1600',
  //   'Por 2kg': 3000,
  //   'llevando 2kg': '$1500 por kg',
  //   color: 'red',
  // },
  // Naranja: {
  //   // bolsa: '(17kg) $sin precio',
  //   // '1/2 bolsa': '(8.5kg) $sin precio',
  //   '1/4 cajón (4.25kg)': '$2900',
  //   'Por kg': '$800',
  //   'Por 2kg': 1500,
  //   'Por 3kg': '$2100',
  //   'llevando 3kg': '$700 por kg',
  //   color: 'orange',
  // },
  // Frutilla: {
  //   bolsa: '(4.5kg) $sin precio',
  //   '1/2 bolsa': '(2.25kg) $sin precio',
  //   '1/4 bolsa': '(1.125kg) $2890',
  //   'por kg': '$2500',
  //   'por 2kg': 4800,
  //   'por kg oferta': 2400
  // },
//   Durazno: {
//     // bolsa: '(12kg) $sin precio',
//     // '1/2 bolsa': '(6kg) $sin precio',
//     // '1/4 cajón (3kg)': '$3600',
//     'Por kg': '$1300',
//     'Por 2kg': 2400,
//     'Por 3kg': '$3300',
//     'llevando 3kg': '$1100 por kg',
//     color: 'wheat',
//   },
  // 'Limón': {
  //   // bolsa: '(16kg) $7750',
  //   // '1/2 bolsa': '(8kg) $2800',
  //   // '1/4 cajón (4kg)': '$3000',
  //   'Por kg': '$800',
  //   'Por 2kg': 1500,
  //   'llevando 2kg': '$750 por kg',
  //   color: 'greenyellow',
  // },
//   'Ofertas de fruta':{
//     color: 'yellowgreen',
//     'Miércoles 6/3/24': '+10% descuento en frutas'
//   },
//   'Oferta 1':{
//     "<b>1kg naranja <br/> + 1kg banana</b><br/>": '',
//     color: 'orangered'
//   },
//   'Oferta 2':{
//     '<b>1kg naranja <br/> + 1kg durazno</b><br/>': '',
//     color: 'orange'
//   },
//   'Oferta 3':{
//     '<b>1kg durazno <br/> + 1kg banana</b><br/>': '',
//     color: 'yellow'
//   },
//   'Oferta 4':{
//     '<b>1kg durazno <br/> + 1kg naranja <br/> + 1kg banana</b><br/>': '',
//     color: 'wheat'
//   },
}
// let o = object;
// let o1 = o["Oferta 1"]
// let o2 = o["Oferta 2"]
// let o3 = o["Oferta 3"]
// let o4 = o["Oferta 4"]

// let nar = o.Naranja["Por 2kg"];
// let ban = o.Banana["Por 2kg"];
// let dur = o.Durazno["Por 2kg"];

// object["Oferta 1"]["<b>1kg naranja <br/> + 1kg banana</b><br/>"]=
// `$${nar/2+ban/2}`
// object["Oferta 2"]["<b>1kg naranja <br/> + 1kg durazno</b><br/>"]=
// `$${nar/2+dur/2}`
// object["Oferta 3"]["<b>1kg durazno <br/> + 1kg banana</b><br/>"]=
// `$${dur/2+ban/2}`
// object["Oferta 4"]["<b>1kg durazno <br/> + 1kg naranja <br/> + 1kg banana</b><br/>"]=
// `$${dur/2+nar/2+ban/2}`