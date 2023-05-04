import Chart from 'chart.js/auto';
import { incrementarValor } from './funciones.js';
import { getAquisitionsByYear } from './api'

(async function () {
    
    const data = await fetch('https://sample-api-29g5.onrender.com/libros')
    .then(res => res.json())
    .then(data => {
            let registros = data.data;
            console.log(registros);
            new Chart(
                document.getElementById('acquisitions'),
                {
                type: 'bar',
                    data: {
                        labels: registros.map(row => row.title),
                        datasets: [
                            {
                                label: 'Acquisitions by year',
                                data: registros.map(row => row.count)
                            }
                        ]
                    }
                }
            );
        })();


    })();
