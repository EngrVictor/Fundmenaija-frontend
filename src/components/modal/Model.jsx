import React from 'react'

function Model() {
  return (
    <div>
      <div className="modal fade" id="purchaseCode" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Attention!!!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p className="text-danger"><strong>As a measure to prevent your account from being hacked, we strongly advise that you do not share your login details with anyone. Knowing that we will never ask you for any of your personal Information.</strong></p>
                    <h5>Contact Us</h5>
                    <p> <strong> Instagram Id: </strong>  http://Instagram.com/fundmenaija</p>
                    <p><strong>Email: </strong>contact@fundmenaija.com</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <a href="#" role="button" type="button" className="btn btn-danger">Report an Issue</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Model
