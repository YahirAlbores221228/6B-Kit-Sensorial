import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import 'aos/dist/aos.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Pastel() {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white',
                },
            },
        },
    };

    const data = {
        labels: ['Oxxo', 'Gasolinera', 'Presidencia Municipal', 'Parque Central', 'Bodega Aurrera', 'Mercado Publico 18 de Marzo', 'Hotel Ambar Suchiapa'],
        datasets: [
            {
                label: 'Km',
                data: [10, 5, 50, 40, 30, 4, 3],
                backgroundColor: ['#10b981', '#06b6d4', '#a855f7', '#f43f5e', '#FFA500', ' #FFFF00', '#00FF7F'],
                borderColor: ['#10b981', '#06b6d4', '#a855f7', '#f43f5e', '#FFA500', ' #FFFF00', '#00FF7F'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='h-auto w-96' data-aos="fade-right" data-aos-duration="3000">
            <Pie style={{ width: '405px', height: '500px' }} data={data} options={options} />
        </div>
    );
}

export default Pastel;
