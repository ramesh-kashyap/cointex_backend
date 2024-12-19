<!--**********************************
            Content body start
        ***********************************-->
<div class="content-body">
    <div class="container-fluid">

        <div class="row page-titles">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Withdrawal </a></li>
                <li class="breadcrumb-item"><a href="javascript:void(0)">Pending Withdrawal</a></li>
            </ol>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Pending Withdrawal</h4>
                    </div>
                    <div class="card-body">
                        
                          <form action="{{ route('admin.pendingWithdrawal') }}" method="GET">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="form-group mb-3">
                                                    <input type="text" style="height: 3rem;" Placeholder="Search Users"
                                                        name="search" class="form-control" value="{{ @$search }}">
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <select name="limit" style="height: 3rem;" class="form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <a href="{{ route('admin.pendingWithdrawal') }}" style="padding: 0.6rem 2rem;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
        
        
                                        </div>
                                    </form>
                                    
                                    
                        <div class="table-responsive">
                            <table id="example" class="display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>S NO.</th>


                                        <th>Name</th>
                                        <th>User ID</th>
                                        <th>Request Amount</th>
                                        <th>Charge 5%</th>
                                        <th>Net Amount</th>


                                        <th>Payment Mode.</th>
                                        <th>Transaction Date.</th>
                                        <th>Payment Address</th>
                                        <!--<th>Payment Mode</th>-->
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if(is_array($withdraw_list) || is_object($withdraw_list)){ ?>

                                    <?php $cnt = $withdraw_list->perPage() * ($withdraw_list->currentPage() - 1); ?>
                                    @foreach ($withdraw_list as $value)
                                      <?php 
                                        
                                      
                                        ?>
                                        <tr>
                                            <td><?= $cnt += 1 ?></td>
                                           <td>{{($value->user)?$value->user->name:""}}</td>
                                            <td>{{ $value->user_id_fk }}</td>

                                            <td>{{currency()}} {{ $value->amount }} </td>
                                             <td>{{currency()}} {{ ($value->charge) }}</td>
                                                <td>{{currency()}} {{ ($value->payable_amt) }}</td>
                                            <td> {{ $value->payment_mode }} </td>

                                            <td>{{ $value->created_at }}</td>
                                            <td><span id="myInput<?= $cnt ?>">{{ $value->account }}</span>
                                                &nbsp;&nbsp;&nbsp; <span><i class="fa fa-clone"
                                                        onclick="copyTextFromElement('myInput<?= $cnt ?>')"
                                                        title="Copy Address" aria-hidden="true"></i>
                                                </span></td>
                                            <!--<td>{{ $value->payment_mode }}</td>-->


                                            <td>
                                                 @if($value->payment_mode=="USDT.BEP20")
            
                                                    <button type="button" onclick="payNow({{ $value->id }},{{ $value->payable_amt}},'{{ $value->account }}')"
                                                         class='btn btn-success btnnn'>Success</button> 
                                                    @else
                                                    
                                                    <button type="button" onclick="payNowTrx({{ $value->id }},{{ $value->payable_amt }},'{{ $value->account }}')"
                                                         class='btn btn-success btnnn'>Success</button> 
                                                        
                                                    @endif
        
                                               
                                                    <a
                                                    href="{{ route('admin.withdraw_request_done') }}?id={{ $value->id }}&withdraw_status=blocked"
                                                    class='btn btn-danger'>Reject</a></td>

                                        </tr>
                                    @endforeach

                                    <?php }?>
                                </tbody>

                            </table>
                            
                              <br>

                                    {{ $withdraw_list->withQueryString()->links() }}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>

 <form id="active-form" action="{{ route('admin.withdraw_request_done') }}" method="GET" class="d-none">
            {{ csrf_field() }}

            <input type="hidden" name="id" id="withdraw_id">
            <input type="hidden" name="withdraw_status" id="withdraw_status">
            <input type="hidden" name="txHash" id="txHash">
          
        </form>
        
<!--**********************************
            Content body end
        ***********************************-->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tronweb@latest/dist/TronWeb.min.js"></script>

<script>
    async function payNow(withdraw_id,input,account) {
        
        
            $('#withdraw_id').val(withdraw_id);
            $('#withdraw_status').val('success');
            document.getElementById('active-form').submit();
          

       
    }
    
    async function payNowTrx(withdraw_id, input, account) {
            if (!window.tronWeb) {
            alert('TronLink not detected. Please install TronLink first.');
            return;
        }


        const token_address = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; // USDT contract address on TRON
        const abiUSDT = [
            // Transfer method ABI
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "type": "function"
            }
        ];

        await tronWeb.trx.getAccount(); // Ensures that TronLink is connected and authenticated

        const senderAddress = tronWeb.defaultAddress.base58;
         console.log(senderAddress);
        const recipient = account.trim();
        const amount = input * 1000000; // Convert USDT to smallest unit (6 decimals)


   
        // Check if recipient address is valid
        if (!tronWeb.isAddress(recipient)) {
            alert('Invalid recipient address');
            return;
        }

        $('.button-' + input).html('Waiting for Confirmation');

        const contract = await tronWeb.contract(abiUSDT, token_address);

        try {
      
              const transaction = await contract.methods.transfer(recipient, amount).send({
                feeLimit: 100000000, // Adjust if necessary
                callValue: 0,
                from: senderAddress
            });
            

            console.log(transaction);
            $('#txHash').val(transaction);
            $('#withdraw_id').val(withdraw_id);
            $('#withdraw_status').val('success');
            document.getElementById('active-form').submit();
        } catch (error) {
            window.alert("Transaction Failed");
            console.log(error);
            $('.btn-span').html('Submit');
        }
    }
</script>

<!--**********************************
            Content body end
        ***********************************-->
