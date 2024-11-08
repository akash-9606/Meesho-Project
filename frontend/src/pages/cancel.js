import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Cancel() {
    return (
        <>
            <div className="card text-center mx-auto mt-5" style={{ maxWidth: '22rem' }}>
                <div className="card-header">
                    Payment Status
                </div>
                <div className="card-body">
                    <FaTimesCircle size={50} className="text-danger mb-3" />
                    <h5 className="card-title">Payment Unsuccessful</h5>
                    <p className="card-text">
                        Unfortunately, your payment could not be processed.
                    </p>
                    <p className="card-text">Please try again or contact support.</p>
                    <Link to='/payment' className="btn btn-primary">Retry Payment</Link>
                </div>
            </div>
        </>
    )
}
export default Cancel