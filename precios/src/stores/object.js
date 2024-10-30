// let $ ='$';
function calculate (peso, precio, entire = 1.4, threequarts = 1.45, half = 1.5, quart = 1.55, kg = 1.6) {
	let pp = precio / peso;
	return {
		'1 bolsa': Math.ceil((precio * entire) / 100) * 100,
		'3/4 bolsa': Math.ceil((precio * .75 * threequarts) / 100) * 100,
		'1/2 bolsa': Math.ceil((precio * .5 * half) / 100) * 100,
		'1/4 bolsa': Math.ceil((precio * quart * .25) / 100) * 100,
		'por kg': Math.ceil((pp * kg) / 100) * 100,
	}
}

export let objectStores = {
    Papa: calculate(17, 8800),
      Batata: calculate(17, 10000),
      Cebolla: calculate(17, 10000),
      Zanahoria: calculate(17, 10000),
      Anco: calculate(17, 10000),
      'Tomate perita': {
        bolsa: '(17kg) $5800',
        '1/2 bolsa': '(8.5kg) $3000',
        '1/4 bolsa': '(4.25kg) $1550',
        'por kg': '$390',
        'por 2kg': '$730',
        'por kg oferta': 365
      },
      // Banana: {
      //   bolsa: '(19kg) $23200',
      //   '1/2 bolsa': '(9.5kg) $12000',
      //   '1/4 bolsa': '(4.75kg) $6200',
      //   'por kg': '$1390',
      //   'por 2kg': '$2620',
      //   'por kg oferta': (1310)
      // },
      // Manzana: {
      //   bolsa: '(17kg) $21750',
      //   '1/2 bolsa': '(8.5kg) $11250',
      //   '1/4 bolsa': '(4.25kg) $5820',
      //   'por kg': '$1460',
      //   'por 2kg': '$2740',
      //   'por kg oferta': (1370)
      // },
      // Naranja: {
      //   bolsa: '(17kg) $9430',
      //   '1/2 bolsa': '(8.5kg) $4880',
      //   '1/4 bolsa': '(4.25kg) $2520',
      //   'por kg': '$640',
      //   'por 2kg': '$1190',
      //   'por kg oferta': (595)
      // },
      // Frutilla: {
      //   bolsa: '(4.5kg) $10150',
      //   '1/2 bolsa': '(2.25kg) $5250',
      //   '1/4 bolsa': '(1.125kg) $2720',
      //   'por kg': '$2570',
      //   'por 2kg': '$4840',
      //   'por kg oferta': (2420)
      // },
      // Durazno: {
      //   bolsa: '(12kg) $11600',
      //   '1/2 bolsa': '(6kg) $6000',
      //   '1/4 bolsa': '(3kg) $3100',
      //   'por kg': '$1100',
      //   'por 2kg': '$2070',
      //   'por kg oferta': (1035)
      // },
      // 'Limón': {
      //   bolsa: '(7kg) $7250',
      //   '1/2 bolsa': '(3.5kg) $3750',
      //   '1/4 bolsa': '(1.75kg) $1940',
      //   'por kg': '$1180',
      //   'por 2kg': '$2220',
      //   'por kg oferta': (1110)
      // }
};