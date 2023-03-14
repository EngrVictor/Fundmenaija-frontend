import React from 'react'

function AdminFooter() {
  return (
    <div>
      <footer class="footer gray_bg">
            <div class="container-fluid">
                <div class="row text-muted">
                    <div class="col-6 text-left">
                        <p class="mb-0">
                            <a href="../index.php" class="text-muted light"><strong>FundMeNaija
                                </strong></a> &copy
                        </p>
                    </div>
                    <div class="col-6 text-right">
                        <ul class="list-inline">
                            <li class="footer-item">
                                <a class="text-muted light" href="../pages/privacypolicy.php">Privacy</a>
                            </li>
                            <li class="footer-item">
                                <a class="text-muted light" href="../pages/terms.php">Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default AdminFooter
