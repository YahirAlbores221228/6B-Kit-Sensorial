import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import 'aos/dist/aos.css';
ChartJS.register(ArcElement, Tooltip, Legend);/**Propiedad de la libreria */
function Pastel() {
    let options = {
        responsive: true, /**Responsive */
        maintainAspectRatio: false, /**Ajustamiento de su contener a una caja*/
    };
    let data = {
        labels: ['Oxxo', 'Gasolinera', 'Presidencia', 'Parque Central'], /**Puntos de interes */
        datasets: [
            {
                label: 'Km', /**Km al cursor de la grafica */
                data: [10, 5, 50, 40], /**Los Km */
                backgroundColor: ['#FF6384', '#36A2EB', '#60A5FA', /**Color de grafica de division */
                    '#93C5FD'],
                boderColor: [ /**Puntos superior de la grafica */
                    "#ff6384",
                    "#36a2eb",
                    '#60A5FA',
                    '#93C5FD',
                ],
                borderwidth: 1,/** Tamaño de los border */
            }
        ]
    }
    return (
        <>
            <div className='h-96 w-96' data-aos="fade-up"
                data-aos-duration="3000">
                <Pie data={data} options={options} />
            </div>
        </>
    );
}

export default Pastel;