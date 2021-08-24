<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet"> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <title>Invoice</title>
</head>


<style>

  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat'), url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_cJD3gnD_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat'), url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat'), url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat'), url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat'), url(https://fonts.gstatic.com/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* @page { margin: 5px; } */
  /* @media print {
    @page {
        size: auto;
    }
  } */

  

  .float-right {
    float: right;
  }

  /*.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    /* border:0;
    padding:0; */
  /*}*/

  body {
    font-family: 'Montserrat', sans-serif !important;
    /* font-size: 16px !important; */
  }

  .invoiceTitle {
    font-family: 'Montserrat' !important;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .mb-1 {
    margin-bottom: 1rem !important;
  }

  .mb-2 {
    margin-bottom: 2rem !important;
  }

  .mb-3 {
    margin-bottom: 3rem !important;
  }

  .mr-auto {
    margin-right: auto;
  }

  .element {
    position: relative !important;
  }

  .space-between {
    text-align: justify;
  }

  .space-between:after {
    content: '';
    display: inline-block;
    width: 100% !important;
  }

  .item {
    display: inline-block !important;
  }

  .semiTitle {
    font-size: 1.36rem;
    font-weight: 500;
  }

  .paymentDetails {
    font-weight: 500;
    font-size: 1.45rem;
  }

  .mt-5 {
    margin-top: 3rem;
  }

  a, a:link, a:visited {
    color: #009879;
  }

  strong {
    font-weight: 600 !important;
  }

  strong.semi {
    font-weight: 500 !important;
  }

  .page-break {
      page-break-after: always;
  }
  .img {
    min-height: 100px !important;
    width: 150px !important;
    left: 0;
  }

  .text {
    font-size: 2rem;
    font-weight: 500;
  }

  .text.small {
    font-size: 1.6rem;
  }

  hr {
    top: 1rem;
    bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .border {
    border: 1px solid #000;
  }



  .content-table {
    font-family: 'Montserrat' !important;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100% !important;
  }

  .content-table thead {
    background-color: #009879 !important;
  }

  .content-table thead tr {
    border-color: #009879 !important;
    color: #fff;
    text-align: left !important;
    font-weight: 500;
  }

  .content-table thead tr th.right {
    text-align: right !important;
  }

  .content-table thead tr th.center {
    text-align: center !important;
  }

  .content-table th, .content-table td {
    padding: 12px 15px;
  }

  .content-table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  .content-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  /* .content-table tbody tr:last-of-type {
    /* border-bottom: 2px solid #009879 !important; */
  /* } */

  .content-table tbody {
    border-bottom: 2px solid #009879 !important;
  }

  .content-table tbody tr.active-row {
    font-weight: 500;
    color: #009879;
  }

  footer {
    font-weight: 300;
    font-size: 0.9rem;
  }

  .float-left {
    float: left;
  }

  .float-center {
    float:none;
  }
</style>

<body>
  <div class="container">
    <!-- <div style="position: absolute; top: 0px; right: 50%; display: none;">
      <span class="text small float-right">Invoice</span>
    </div>  -->

    <!-- <hr style="position: relative; top: 50px;"> -->

    <div class="row" style="position: relative; margin-bottom: 3rem;">

      <div style="position: absolute; top: 0;" class="header mb-5">
        <span style="white-space: pre-line !important;">
          <strong>Herr/Frau/Firma</strong><br>
          Ayanesh Sarkar<br>
          South Sreepur Boral<br>
          Kolkata - 700154<br>
          India<br>
          <strong>E-Mail: </strong> 
            <a href="#" target="_blank">
              ayaneshsarkar101@gmail.com
            </a>
          <br>
        </span>
      </div>

      <div style="position: absolute; top: 0; right: 50%;">
        <span class="float-right text-right" style="text-align: right;">
          <!-- <strong>#1234567</strong><br> -->
          Online Freelance Services<br>
          Ayanesh Sarkar<br>
          South Sreepur Boral<br>
          Kolkata - 700154<br><br>
          <!-- <strong>Date: </strong>1/1/21<br> -->
        </span>
      </div>

      <!-- <div style="position: absolute; top: 75px; right: 50%;">
        <span class="float-right text-right">
          <strong class="semi">Order ID: </strong>$data['order_id'] ?? '1234567'<br>
          <strong class="semi">Pay ID: </strong>$data['payment_id'] ?? '123456789'<br>
          <strong class="semi">Payer ID: </strong>$data['payer_id'] ?? '1234567890'
        </span>
      </div> -->
    </div>

    <div class="row element mb-2" style="top: 6rem; left: 0;">
      <br>
      <h5 class="invoiceTitle">Invoice</h5>
    </div>

    <div class="row element mb-2" style="top: 4.5rem; left: 0;">
      <div class="space-between" style="width: 100%">
        <div class="item" style="margin-right: 2rem">
          <span class="semiTitle">Invoice Num: </span> ABCD12345
        </div>
        <div class="item" style="margin-right: 2rem">
          <span class="semiTitle">Payer Id: </span> ABCD123
        </div>
        <div class="item">
          <span class="semiTitle">Date: </span> 01.01.2021
        </div>
      </div>
    </div>

    <div class="row" style="position: relative; top: 2rem; left: 0;">
      <table class="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Netto</th>
            <th>Tax (18%)</th>
            <th>Gross</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Warbreaker</td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>

          <tr>
            <td scope="row">2</td>
            <td>Warbreaker</td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>

          <tr>
            <td scope="row">3</td>
            <td>Warbreaker</td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>

          <tr>
            <td scope="row">4</td>
            <td>Warbreaker</td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>

          <tr>
            <td scope="row">5</td>
            <td>Warbreaker</td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>
        </tbody>
  
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Total Netto</th>
            <th>Total Tax</th>
            <th>Total Gross</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>450</td>
            <td>20</td>
            <td>470</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row element">
      <h5 class="paymentDetails">Payment Details:</h5>
    </div>

    <h5 class="mb-2 element invoiceTitle" style="top: -1.6rem; left: 0;">
      Transaction Id: <span>(#ABC1234567)</span>
    </h5>

    <div class="row element" style="top: -3.7rem; left: 0;">
      <table class="content-table">
        <!-- <thead>
          <tr>
            <th>#{{ strtoupper($data['order_id']) }}</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead> -->

        <thead>
          <tr>
            <th>Date</th>
            <th style="padding-right: 20rem !important;">Gateway</th>
            <th>Transaction Id:</th>
            <th>Total Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>01.01.2021</td>
            <td style="width: 100% !important;">
              Stripe Payment Service
            </td>
            <td>ABC12345</td>
            <td>470</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th></th>
            <th></th>
            <th class="right">Balance</th>
            <th>0</th>
          </tr>
        </thead>
      </table>
    </div>


    <div class="row element" style="top: -4rem; left: 0;">
      <span class="mb-1" style="position: absolute; top: 0; white-space: pre-line !important; display: inline-block;">All Terms and Conditions Included.</span>

      <footer style="text-align: center; position: absolute; top: 2rem; color: grey;">
        <p class="text-center">Copyright &copy; <?= date('Y') ?> - Online Freelance Services | All Rights Reserved.</p>
      </footer>
    </div>
  </div>
</body>
</html>