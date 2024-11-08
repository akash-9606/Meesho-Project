import { Link } from "react-router-dom"
import { FaCheckCircle } from 'react-icons/fa';
function Success() {
    return (
        <>
            <div className="card text-center mx-auto mt-5" style={{ maxWidth: '22rem' }}>
                <div className="card-header">
                    Payment Status
                </div>
                <div className="card-body">
                <FaCheckCircle size={50} className="text-success mb-3" />
                    <h5 className="card-title">Payment Successful!</h5>
                    <p className="card-text">
                        Your payment has been processed successfully.
                    </p>
                    <p className="card-text">Thank you for your purchase.</p>
                    <Link to='/' className="btn btn-primary">Continue Shopping</Link>
                </div>
            </div>
        </>
    )
}
export default Success