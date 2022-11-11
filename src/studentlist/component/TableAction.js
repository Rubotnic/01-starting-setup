import { Component } from 'react';

class TableAction extends Component {
    render() {
        return (
            <div>
                <div className='card-footer'>
                    <button type="button" class= "btn btn-primary" onClick={() => {setShowData(true); {/* Call Save method for API */}}}> 
                        Details</button>
                    </div>
            </div>
        );
    }
}