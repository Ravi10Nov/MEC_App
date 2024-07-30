import OrderDetail from './OrderDetail';
import useApi from '../utils/useApi';
import { useState } from 'react';
import Shimmer from './Shimmer';


const Body = () => {

    const { data, filterData, setFilterData } = useApi();

    const [searchText, setSearchText] = useState('');

    const allOrders = () => {
        const allData = data.filter((item) => (
            item
        ))
        setFilterData(allData)
    }

    const findStatus = (orderStatus) =>{
        const status = data.filter((item)=>(
            item.Status === orderStatus
        ))
        setFilterData(status)
    }

    const searchItem = (searchText) => {
        if (searchText === '') {
            const item = data.filter((item) => (
                item.OrderID
            ))
            setFilterData(item)
        } else {
            const item = data.filter((item) => (
                item.OrderID === searchText || item.NSInternalOrderID === searchText || item.SKU === searchText || item.State === searchText || item.City === searchText
            ))
            setFilterData(item)
        }
    }

    const clearText = () => {
        setSearchText('')
        const item = data.filter((item) => (
            item.OrderID
        ))
        setFilterData(item)
    }

    if (data.length === 0) return <Shimmer />;

    return (
        <div>
            <div className='box'>
                        <div className='search-box'>
                            <input type='text' placeholder='Search here...' onChange={e => setSearchText(e.target.value)} value={searchText} />
                            <button className='button' onClick={() => searchItem(searchText)}>Search</button>
                            <button className='button' onClick={() => clearText(searchText)}>Clear</button>
                        </div>
                        <h3>Total Orders = {filterData.length}</h3>
            </div>
            <div></div>
            <div className='orders-container'>
                <div className='order-status'>
                    <h3 onClick={() => allOrders()}>All Orders</h3>
                    <h3 onClick={() => findStatus('Pending')}>Pending Status</h3>
                    <h3 onClick={() => findStatus('COMPLETE')}>Complete Status</h3>
                    <h3 onClick={() => findStatus('IfCreated')}>CreateIf</h3>
                    <h3 onClick={() => findStatus('CreateIF')}>IfCreated</h3>
                    <h3 onClick={() => findStatus('IFCreated3')}>IFCreated3</h3>
                    <h3 onClick={() => findStatus('IFERROR')}>IFerror</h3>
                    <h3 onClick={() => findStatus('InvoiceError')}>InvoiceError</h3>
                    <h3 onClick={() => findStatus('RETRY')}>Retry</h3>
                    <h3 onClick={() => findStatus('UpdateC')}>UpdateC</h3>
                    <h3 onClick={() => findStatus('UploadedToNS')}>UploadedToNS</h3>
                </div>
                <div className='orders'>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order Status</th>
                                <th>Purchase Date</th>
                                <th>City</th>
                                <th>State</th>
                                <th>SKU</th>
                                <th>NSInternalOrderID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((item, index) => (
                                <OrderDetail key={index} items={item} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Body;