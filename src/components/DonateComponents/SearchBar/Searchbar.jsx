
const Searchbar = () => {
  return (
    <form className="d-flex align-items-center">
        <input type="text" 
            className="form-control p-3 shadow-sm col-md-12" 
            placeholder="Search" 
            style={{
                border: 'none', 
                borderBottomRightRadius: '0px', 
                borderTopRightRadius: '0px'
            }}
        />

        <div className="btn py-3 px-4 text-white shadow-sm border bg-white" 
            style={{
                // backgroundColor: '#999', 
                borderBottomLeftRadius: '0px', 
                borderTopLeftRadius: '0px'
            }}>
            <i className="fa fa-search text-dark"></i>
        </div>
    </form>
  )
}

export default Searchbar