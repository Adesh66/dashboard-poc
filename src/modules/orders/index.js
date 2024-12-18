import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/apiservices';
import Loading from '../../components/Loading';
import ArrowUpRight from '../../assets/icons/ArrowUpRight.svg'
const Orders = () => {
    const [orderList, setOrderList] = useState([]);
    const [sortedorderList, setSortedOrderList] = useState([]);
    const [sortConfig, setSortConfig] = useState({
        key: 'id',
        direction: 'ascending',
    });

    const [pageNumber, setPageNumber] = useState(1);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        getOrders();
    }, [pageNumber]);

    const getOrders = async () => {
        setLoading(true);
        try {
            const response = await fetchProducts(pageNumber);
            if (response.status === 200) {
                const result = response.data.products || [];
                console.log({ result });

                setOrderList(result);
                setSortedOrderList(result);
            }
        } catch (error) {
            setError('Something went wrong! Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const sortTable = (key) => {
        let direction = 'ascending';

        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedData = [...orderList].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setSortedOrderList(sortedData);
        setSortConfig({ key, direction });
    };

    return (
        <div className='section-container flex flex-col w-full gap-8'>
            <div className='sec-title '>Orders</div>
            <div className='flex flex-row gap-8 flex-wrap'>
                <div className='table-outer w-full'>
                    <table className='w-full '>
                        <thead>
                            <tr>
                                <th
                                    className='cursor-pointer '
                                    onClick={() => sortTable('title')}
                                >
                                    Name
                                    <div className='sort w-3 h-3'></div>
                                </th>
                                <th
                                    className='cursor-pointer '
                                    onClick={() => sortTable('id')}
                                >
                                    Date
                                    <div className='sort w-3 h-3'></div>
                                </th>
                                <th
                                    className='cursor-pointer '
                                    onClick={() => sortTable('rating')}
                                >
                                    Time spent
                                    <div className='sort w-3 h-3'></div>
                                </th>
                                <th
                                    className='cursor-pointer '
                                    onClick={() => sortTable('price')}
                                >
                                    Order Value
                                    <div className='sort w-3 h-3'></div>
                                </th>
                                <th
                                    className='cursor-pointer '
                                    onClick={() =>
                                        sortTable('discountPercentage')
                                    }
                                >
                                    Item Code
                                    <div className='sort w-3 h-3'></div>
                                </th>
                                <th className='cursor-pointer '></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colspan='6'>
                                        <Loading />
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr className='text-center'>
                                    <td colspan='6'>{error}</td>
                                </tr>
                            ) : sortedorderList.length === 0 ? (
                                <tr>
                                    <td>No Order found </td>
                                </tr>
                            ) : (
                                <>
                                    {sortedorderList.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td className='flex flex-row gap-2 justify-start items-center'>
                                                    <img
                                                        className='w-10 h-10 rounded-lg'
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                    />
                                                    {item.title}
                                                </td>
                                                <td>{new Date(item.meta.createdAt).toDateString()}
                                                    <div>{new Date(item.meta.createdAt).toLocaleTimeString()}</div>
                                                </td>
                                                <td>{item.rating}s</td>
                                                <td>₹ {item.price}</td>
                                                <td>{item.sku}</td>
                                                <td className='text-right text-gray-500'>View Cart <img src={ArrowUpRight} className='inline-block  ml-1'  alt='top'/></td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colspan='6'>
                                            <div className='flex justify-center items-center w-full'>
                                                <ul className='pagination flex flex-row justify-center items-center border rounded-md overflow-hidden '>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 1
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(1)
                                                        }
                                                    >
                                                        1
                                                    </li>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 2
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(2)
                                                        }
                                                    >
                                                        2
                                                    </li>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 3
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(3)
                                                        }
                                                    >
                                                        3
                                                    </li>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 4
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(4)
                                                        }
                                                    >
                                                        4
                                                    </li>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 5
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(5)
                                                        }
                                                    >
                                                        5
                                                    </li>
                                                    <li
                                                        className={
                                                            'w-8 h-8 flex flex-col justify-center items-center p-2 ' +
                                                            (pageNumber == 6
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        onClick={() =>
                                                            setPageNumber(6)
                                                        }
                                                    >
                                                        6
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;
