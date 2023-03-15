import '../FundraiserDetails/Fundraiserdetails.css'

import Navbar from '../../components/Navbar/Navbar'
import img2 from '../../asserts/images/222.jpg'
import img from '../../asserts/images/hospital.webp'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

const Fundraisedetails = () => {
  return (

    <>
    <Navbar  backgroundColor={'white'}/>
    <section className="fundraiser-details Fundraiser p-lg-4 my-lg-5">
        <div className="container bg-white p-lg-5 px-4 py-5">

            <div className="col-md-9 my-4">

                <div className="d-lg-flex align-items-center">
                    <div className="fundraiser-img">
                        <img src={img} alt="" className="img-fluid border p-2" />
                    </div>

                    <div className="mx-4">
                        <div className="fundraiser-name col-md-12 text-truncate">
                            <span className='d-flex flex-column'>
                                <h2 className='text-capitalize'>Devine international school</h2>
                                <h4>Estimated amount: <span>100,000</span></h4>
                            </span>
                            <p className='address text-capitalize'>Address: <span>No 5 Melrose Street</span></p>
                        </div>
                    </div>
                </div>
                <Link to={'/details'} className="nav-link my-4">
                    <button  className='nav-link py-3 px-5 col-md-6'>
                        <b className='hover'>Donate fund</b>
                    </button>
                </Link>

                <div className="fund-title my-5">
                    <h1 className="display-6 my-5 ">Raising for cctv installation, to ensure adequate security of our students.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum obcaecati beatae porro numquam odio excepturi officia dolorem dolores sint, ex quae delectus alias placeat molestias fugit et consequatur ab quam similique quod qui aut repudiandae minus! Perferendis sequi facilis fugiat ratione laboriosam? Veritatis, molestiae, illum facilis ratione dicta, placeat inventore architecto obcaecati explicabo minus ipsum. Quam aperiam accusamus sequi iure possimus sint sapiente reprehenderit, officia fuga voluptatum quasi molestiae doloremque, iste tempora excepturi? Vitae quasi tenetur optio culpa ullam repellat eaque nemo libero natus eius! Voluptates repellendus repudiandae laboriosam quis vel cupiditate? Accusantium beatae magni labore quas facere ex.</p>
                </div>


                <div className="img-container d-lg-flex">
                    <img src={img2} alt="" className="img-fluid" />
                </div>
            </div>


        </div>


    </section>
    <Footer />
    </>
























    // <section className='Details Fundraiser'>
    //     <div className="container p-lg-5 my-4">
    //         <div className="p-l-5 bg-white" style={{borderRadius: '8px'}}>

    //             <Header 
    //                 img={img2} 
    //                 FundraiserName={'Devine international school'} 
    //                 address={'No 5 Melrose Street'}
    //             />


    //             <div className="img-container my-5 px-lg-5" style={{width: '100%', height: '300px', position: 'relative'}}>
    //                 <div>
    //                     <img src={img1} alt="image" className="img-fluid" style={{width: '44%', height: '100%', position: 'absolute'}}/>
    //                 </div>
    //                 <div>
    //                     <img src={img2} alt="image" className="img-fluid" style={{width: '44%', height: '100%', position: 'absolute', right: '0em'}}/>
    //                 </div>
    //             </div>

    //             <div className="px-5">
    //                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit cum quasi? Assumenda beatae cum error consequuntur, rem totam dolore tempore, voluptatibus excepturi suscipit doloribus iusto iste nobis labore facilis itaque architecto obcaecati repellat ducimus inventore commodi alias? Recusandae aperiam minus provident praesentium vero asperiores beatae perferendis quos ea dolores culpa inventore pariatur deleniti rem in excepturi adipisci animi nisi nam, dignissimos quo ex dolorem maiores? Magnam perspiciatis amet nemo id dolorem voluptate soluta debitis. Eligendi qui dolor quisquam corporis illo odit, eveniet impedit dolorum dignissimos, quasi nemo ut non amet in omnis quidem fuga totam necessitatibus ducimus tempora at.</p>
    //             </div>
    //         </div>

    //     </div>
    // </section>
  )
}

export default Fundraisedetails