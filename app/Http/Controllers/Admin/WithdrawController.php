<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Withdraw;
use App\Models\User;
use Carbon\Carbon;
use Auth;
class WithdrawController extends Controller
{

    public function pendingWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Pending')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.pending-withdraw';
        return $this->admin_dashboard();
    }


    public function rejectedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Failed')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.rejected-withdraw';
        return $this->admin_dashboard();
    }


    public function approvedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Approved')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.approved-withdraw';
        return $this->admin_dashboard();
    }


  public function pendingBankWithdrawal(Request $request)
  {


            $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Withdraw::where('status','Pending')->where('payment_mode','!=','USDT')->orderBy('id', 'DESC');
           // $notes = Withdraw::select('withdraws.*')->where('status','Pending')->join('banks', 'banks.user_id', '=', 'withdraws.user_id');

          if($search <> null && $request->reset!="Reset")
          {
          $notes = $notes->where(function($q) use($search){
              $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('txn_id', 'LIKE', '%' . $search . '%')
              ->orWhere('wdate', 'LIKE', '%' . $search . '%');
            });
            }
          $notes = $notes->paginate($limit)
              ->appends([
                  'limit' => $limit
              ]);
              $this->data['pendingBankWithdrawal'] =  $notes;
              $this->data['search'] = $search;
              $this->data['page'] = 'admin.withdraw.pendingBankWithdrawal';
              return $this->admin_dashboard();
  }


        public function withdraw_request_done(Request $request)
        {

        $id= $request->id ; // or any params
        $txHash= $request->txHash ; // or any params
        $withdraw_status= $request->withdraw_status ; // or any params
        $withdraw_id = Withdraw::where('id',$id)->first();
        $user_id = User::where('id',$withdraw_id->user_id)->first();

        if ($withdraw_status=="success")
        {
            
        $update_data['status']= 'Approved';
        $update_data['paid_date']= Carbon::now();
        $user =  Withdraw::where('id',$id)->update($update_data);
        
        $notify[] = ['success', 'Withdraw request Approved successfully'];
        return redirect()->back()->withNotify($notify);
        }
        else
        {
        $update_data['status']= 'Failed';
        $user =  Withdraw::where('id',$id)->update($update_data);
        
          
                    
        $notify[] = ['success', 'Withdraw request Rejected successfully'];
        return redirect()->back()->withNotify($notify);
        }

    }


}
