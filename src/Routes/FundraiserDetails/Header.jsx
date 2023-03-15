
const Header = ({ img, FundraiserName, address }) => {
  return (
    <div className="d-lg-flex align-items-center">
        <div className="fundraiser-img">
            <picture>
                <img src={img} alt="image" className="img-fluid" />
            </picture>
        </div>

        <div className="col-md-8 mx-4">
            <div className="fundraiser-name col-md-12">
                <h1 className='text-capitalize'>{FundraiserName}</h1>
                <p className='address text-capitalize'>Address: <span>{address}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Header