import React, { useEffect, useState } from 'react';
import Tag from '../../assets/icons/Tag.svg';
import TrendDown from '../../assets/icons/TrendDown.svg';
import TrendUp from '../../assets/icons/TrendUp.svg';
import { fetchGlanceData } from '../../services/apiservices';
import Loading from '../../components/Loading';

const Glance = () => {
    const [glanceData, setGlanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        setLoading(true);
        try {
            const response = await fetchGlanceData();
            console.log(response);

            if (response.status === 200) {
                const result = response.data || [];
                console.log({ result });

                setGlanceData(result);
            }
        } catch (error) {
            setError('Something went wrong! Please try again later.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='section-container flex flex-col w-full gap-8'>
            <div className='sec-title '>At a glance</div>
            <div className='card-list flex flex-col gap-4 flex-wrap md:flex-row lg:flex-row md:gap-8 lg:gap-8'>
                {loading ? (
                    <div className='flex flex-row flex-wrap overflow-hidden w-full gap-8'>
                        <div className='detail-card skeleton-loader-background'></div>
                        <div className='detail-card skeleton-loader-background'></div>
                        <div className='detail-card skeleton-loader-background'></div>
                        <div className='detail-card skeleton-loader-background'></div>
                        <div className='detail-card skeleton-loader-background'></div>
                        <div className='detail-card skeleton-loader-background'></div>
                    </div>
                ) : error ? (
                    <p className='flex justify-center items-center'>{error}</p>
                ) : glanceData.length === 0 ? (
                    <tr>
                        <td>No Order found </td>
                    </tr>
                ) : (
                    <>
                        {glanceData.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </>
                )}
                {}
            </div>
        </div>
    );
};

export default Glance;

const Card = (props) => {
    const { item = {} } = props;
    return (
        <div className='detail-card p-6 gap-2'>
            <div
                className={
                    'rounded-full flex flex-row gap-3 justify-start items-center '
                }
            >
                <img src={item.iconName} alt='icon' />
                <span className='cat uppercase'>{item.category}</span>
            </div>
            <div className='count'>{item.value}</div>
            <div className='impact rounded-full flex flex-row gap-3 justify-start items-center'>
                {item.type === 'increase' ? (
                    <img src={TrendUp} alt='icon' />
                ) : (
                    <img src={TrendDown} alt='icon' />
                )}

                <span className={`${item.type}`}>
                    {item.changePerentage}% {item.type}
                </span>
            </div>
        </div>
    );
};
