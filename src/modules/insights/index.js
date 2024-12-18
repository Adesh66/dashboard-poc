import React from 'react';
import ChatTeardrop from '../../assets/icons/ChatTeardrop.svg';
import TrendUp from '../../assets/icons/TrendUp.svg';
import Chart from 'chart.js/auto';

import { Bar, Line } from 'react-chartjs-2';
const Insights = () => {
    return (
        <div className='section-container flex flex-col w-full gap-8'>
            <div className='sec-title '>At a glance</div>
            <div className='flex gap-6 flex-col md:flex-col lg:flex-row'>
                <div className='chart-1 flex-1'>
                    <Bar
                        data={{
                            // Name of the variables on x-axies for each bar
                            labels: ['Incoming', 'Answered', 'Expert Online'],
                            datasets: [
                                {
                                    // Label for bars
                                    label: 'Consultations',
                                    // Data or value of your each variable
                                    data: [1552, 1319, 613, 1400],
                                    // Color of each bar
                                    backgroundColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    // Border color of each bar
                                    borderColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    borderWidth: 0.5,
                                },
                                {
                                    // Label for bars
                                    label: '',
                                    // Data or value of your each variable
                                    data: [1552, 1319, 613, 1400],
                                    // Color of each bar
                                    backgroundColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    // Border color of each bar
                                    borderColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    borderWidth: 0.5,
                                },
                                {
                                    // Label for bars
                                    label: '',
                                    // Data or value of your each variable
                                    data: [1552, 1319, 613, 1400],
                                    // Color of each bar
                                    backgroundColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    // Border color of each bar
                                    borderColor: [
                                        '#FFF3C6',
                                        '#CCFBEF',
                                        '#134E48',
                                    ],
                                    borderWidth: 0.5,
                                },
                            ],
                        }}
                        // Height of graph
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            // The y-axis value will start from zero
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                </div>
                <div className='flex-1 flex gap-6 flex-col md:flex-row lg:flex-row'>
                    <div className='chart-2 flex-1 flex flex-col'>
                        <Bar
                            data={{
                                // Name of the variables on x-axies for each bar
                                labels: ['This week', 'Last Week'],
                                datasets: [
                                    {
                                        // Label for bars
                                        label: 'This week',
                                        // Data or value of your each variable
                                        data: [20, 100],
                                        // Color of each bar
                                        backgroundColor: ['#134E48', '#CCFBEF'],
                                        // Border color of each bar
                                        borderWidth: 0.5,
                                    },
                                    {
                                        // Label for bars
                                        label: 'Last Week',
                                        // Data or value of your each variable
                                        data: [43, 60],
                                        // Color of each bar
                                        backgroundColor: ['#CCFBEF', '#134E48'],
                                        // Border color of each bar
                                        borderWidth: 0.5,
                                    },
                                ],
                            }}
                            height={450}
                        />
                    </div>
                    <div className='chart-3 flex-1 card-green flex flex-col gap-10'>
                        <div
                            className={
                                'rounded-full flex flex-row gap-3 justify-start items-center '
                            }
                        >
                            <img src={ChatTeardrop} alt='icon' />
                            <span className='cat uppercase'>Forecasts</span>
                        </div>
                        <div className='card-sec flex flex-col gap-2'>
                            <div className='value'>
                                +15%
                                <img src={TrendUp} alt='icon' />
                            </div>
                            <div className='msg'>
                                forecasted increase in your sales closed by the
                                end of the current month
                            </div>
                        </div>
                        <div className='card-sec flex flex-col gap-2'>
                            <div className='value'>
                                +20%
                                <img src={TrendUp} alt='icon' />
                            </div>
                            <div className='msg'>
                                forecasted increase in consultations by the end
                                of the current month
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insights;
