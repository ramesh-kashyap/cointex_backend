   <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Settings</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Add </a></li>
                    </ol>
                </div>
                <!-- row -->
                <div class="row">
     
     
                    <div class="col-xl-8 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Settings</h4>
                            </div>
                            <div class="card-body">
                                <div class="basic-form">
                                    <form action="{{ route('admin.change-price') }}" method="POST">
                                     {{ csrf_field() }}
                                        <div class="row">
                                       
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">VIP1 %</label>                                            
                                               <input type="text" placeholder="VIP1 %" name="vip1_percentage" value="{{$trade[0]->profit}}" class="form-control" required id="">
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label">VIP2 %</label>                                             
                                                <input type="text" placeholder="" value="{{$trade[1]->profit}}" name="vip2_percentage" class="form-control" required id="">
                                            </div>
                                                    <div class="mb-3 col-md-6">
                                                <label class="form-label">VIP3 %</label>                                             
                                                <input type="text" placeholder="" value="{{$trade[2]->profit}}" name="vip3_percentage" class="form-control" required id="">
                                            </div>
                                              <div class="mb-3 col-md-6">
                                                <label class="form-label">VIP4 %</label>                                             
                                                <input type="text" placeholder="" value="{{$trade[3]->profit}}" name="vip4_percentage" class="form-control" required id="">
                                            </div>

                                           

              
                                           
                                        </div>
     
                                      
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                
     
                </div>
            </div>
        </div>
        <!--**********************************
                 Content body end
             ***********************************-->
     