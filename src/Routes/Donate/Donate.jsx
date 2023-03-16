import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const Donate = () => {
  // Fetch All issues from DB
    // fetching posts here
  return (
    <>
      <Nav />
        <br />
        <br />
        <br />

        <h2>Donate page</h2>

        {/* <!----------- Fundraiser template --------- -->

<?php foreach($posts as $post): ?>
    <!-- // fetch users image from `customer_details` add it to their DP -->
    <?php
        $query_customer = 'SELECT `C_Pan_Doc` FROM `customer_detail` WHERE `C_No`='.$post['user_id'];
            $return_customer = mysqli_query($conn, $query_customer);

            if(mysqli_num_rows($return_customer) > 0){
                while($row = mysqli_fetch_assoc($return_customer)){
                    $customer = $row;
                    // var_dump($customers);
                    // return;
// code to return Images 
    ?>

    <section class="Fundraiser p-4 bg-white my-4 shadow">
        <div class="row justify-content-between">

            <div class='col-md-6 d-flex justify-content-center1 align-items-center'>
                <div class='fundraiser-img'>  
                    <picture>
                        <img src="../user/<?php echo $customer['C_Pan_Doc'];?>" alt="profile image" 
                            class="img-fluid mx-lg-0 mx-auto" 
                        />
                    </picture>
                </div>

                <div class="mx-lg-4 mt-lg-0 mt-3 mx-3" id='<?php echo "donation".$post["id"]; ?>'>
                    <div class="fundraiser-name col-md-12">
                        <b class='text-capitalize'><?php echo $post['user_username']; ?></b>
                        <!------------- Title ----------- -->
                        <div class="h5 my-2" style="font-weight: 500">
                            <?php echo substr($post['issue_title'], 0, 100); ?>...
                        </div>
                        <p class='address text-capitalize'><?php echo date($post['issue_time']); ?></span></p>
                    </div>

                </div>
            </div>

            <!----------------- Issues image --------------- -->
            <div class="col-md-6 d-flex">
                <div class='event-img my-2 hidden mx-auto' style="transition: 0.5s">
                    <img src="../user/customer_data/Issue_img/<?php echo $post['avatar'];?>" alt="issue_image" class='img-fluid'/>
                </div>

                <div class='event-img my-2 mx-lg-2 hidden mx-auto' style="transition: 0.8s">
                    <img src="../user/customer_data/Issue_img/<?php echo $post['avatar'];?>" alt="image" class='img-fluid'/>
                </div>
            </div>
        </div>


        <div class="description">
            <!----------- Donate btn --------- -->
            <button class='px-3 my-2 hover' style='background: #f3613c;'>
                <a href="./pay.php?user_id=<?php echo $post['user_id']; ?>&issue_id=<?php echo $post['id']; ?>" class='nav-link text-white' id="1">Donate Fund</a> 
            </button>

            <!----------- Issues text --------- -->
            <p class='write-up my-2' id='<?php echo $post['id']; ?>'><?php echo $post['issue_body']; ?></p>
            <p class='hover cursor'><b class="detailsBtn" id='<?php echo $post['id']; ?>'>Read</b></p>
        </div>
        
    </section>

    <?php   
            }
        }else{
            // return;
            $customers[] = array("error"=>"NO User Found");
            // echo "NO User Found";
        }
    ?>
<?php endforeach; ?>

<!------------ End Fundraiser temp -----------> */}


      <Footer />
    </>
  )
}

export default Donate