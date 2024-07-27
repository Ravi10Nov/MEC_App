

const OrderDetail = ({items,index}) => {

    return (
            <tr >
                <td>{items.OrderID}</td>
                <td>{items.OrderStatus}</td>
                <td>{items.PurchaseDate}</td>
                <td>{items.City}</td>
                <td>{items.State}</td>
                <td>{items.SKU}</td>
                <td>{items.NSInternalOrderID}</td>
                <td>{items.Status}</td>
            </tr>
    )
};

export default OrderDetail;