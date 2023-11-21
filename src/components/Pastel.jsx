import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect, useContext } from 'react';
import GraphicContext from '../Context/GraphicContext';
ChartJS.register(ArcElement, Tooltip, Legend);

function Pastel() {
    const { graphic } = useContext(GraphicContext);
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: 'black',
                },
            },
        },
    };

    const data = {
        labels: graphic.label,
        datasets: [
            {
                label: 'Km',
                data: graphic.distance,
                backgroundColor: ['#10b981', '#06b6d4', '#a855f7', '#f43f5e', '#FFA500', ' #FFFF00', '#00FF7F'],
                borderColor: ['#10b981', '#06b6d4', '#a855f7', '#f43f5e', '#FFA500', ' #FFFF00', '#00FF7F'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Pie style={{ width: '400px', height: '400px' }} data={data} options={options} />
    );
}

export default Pastel;
