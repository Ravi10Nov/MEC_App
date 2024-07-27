import OrderDetail from './OrderDetail';
import useApi from '../utils/useApi';
import { useState } from 'react';
import Shimmer from './Shimmer';


const Body = () => {

    const {data , filterData, setFilterData} = useApi();

    const [searchText, setSearchText] = useState('');

    const filterPending = () => {
        const status = data.filter((item) => (
            item.Status === 'Pending'
        ))
        setFilterData(status)
    }

    const allOrders = () => {
        const allData = data.filter((item) => (
            item
        ))
        setFilterData(allData)
    }

    const filterComplete = () => {
        const status = data.filter((item) => (
            item.Status === 'COMPLETE' || item.Status === 'Complete'
        ))
        setFilterData(status)
    }

    const ifCreated = () => {
        const status = data.filter((item) => (
            item.Status === 'IfCreated'
        ))
        setFilterData(status)
    }

    const CreateIF = () => {
        const status = data.filter((item) => (
            item.Status === 'CreateIF'
        ))
        setFilterData(status)
    }

    const IFCreated3 = () => {
        const status = data.filter((item) => (
            item.Status === 'IFCreated3'
        ))
        setFilterData(status)
    }

    const IFERROR = () => {
        const status = data.filter((item) => (
            item.Status === 'IFERROR'
        ))
        setFilterData(status)
    }

    const InvoiceError = () => {
        const status = data.filter((item) => (
            item.Status === 'InvoiceError'
        ))
        setFilterData(status)
    }

    const RETRY = () => {
        const status = data.filter((item) => (
            item.Status === 'RETRY'
        ))
        setFilterData(status)
    }

    const UpdateC = () => {
        const status = data.filter((item) => (
            item.Status === 'UpdateC'
        ))
        setFilterData(status)
    }

    const UploadedToNS = () => {
        const status = data.filter((item) => (
            item.Status === 'UploadedToNS'
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
                item.OrderID === searchText || item.NSInternalOrderID === searchText || item.SKU === searchText
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
                <h3>Total Orders = {data.length}</h3>
            </div>
            <div></div>
            <div className='orders-container'>
                <div className='order-status'>
                    <h3 onClick={() => allOrders()}>All Orders</h3>
                    <h3 onClick={()=>filterPending()}>Pending Status</h3>
                    <h3 onClick={() => filterComplete()}>Complete Status</h3>
                    <h3 onClick={() => CreateIF()}>CreateIf</h3>
                    <h3 onClick={() => ifCreated()}>IfCreated</h3>
                    <h3 onClick={() => IFCreated3()}>IFCreated3</h3>
                    <h3 onClick={() => IFERROR()}>IFerror</h3>
                    <h3 onClick={() => InvoiceError()}>InvoiceError</h3>
                    <h3 onClick={() => RETRY()}>Retry</h3>
                    <h3 onClick={() => UpdateC()}>UpdateC</h3>
                    <h3 onClick={() => UploadedToNS()}>UploadedToNS</h3>
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