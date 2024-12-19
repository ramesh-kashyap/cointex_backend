<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Investment;
use App\Models\Income;
use App\Models\Contract;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Log;
use Redirect;
use Hash;
use Helper;



class Invest extends Controller
{

  private $downline = "";

    public function index()
    {
        $user=Auth::user();
        $invest_check=Investment::where('user_id',$user->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();

        $this->data['last_package'] = ($invest_check)?$invest_check->amount:0;
        $this->data['page'] = 'user.invest.Deposit';
        return $this->dashboard_layout();
    }  
    public function showrecord(Request $request)
    {
      $user=Auth::user();

      $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('user_id',$user->id);
      if($search <> null && $request->reset!="Reset"){
        $notes = $notes->where(function($q) use($search){
          $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
          ->orWhere('txn_no', 'LIKE', '%' . $search . '%')
          ->orWhere('status', 'LIKE', '%' . $search . '%')
          ->orWhere('type', 'LIKE', '%' . $search . '%')
          ->orWhere('amount', 'LIKE', '%' . $search . '%');
        });

      }

        $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

      $this->data['search'] =$search;
      $this->data['deposits'] =$notes;

$UserRecords = Income::where('user_id', Auth::user()->id)
        ->where('remarks', 'Task Income')
        ->orderBy('created_at', 'desc')
        ->get();

     $this->data['user_record'] = $UserRecords;
    $this->data['page'] = 'user.fund.fundHistory';
    return $this->dashboard_layout();

    }


    public function showrecord1(Request $request)
    {
      $user=Auth::user();
      
        $notes = Investment::where('user_id',$user->id)->get();
      
      $this->data['deposits'] =$notes;

    $this->data['page'] = 'user.fund.fundHistory';
    return $this->dashboard_layout();

    }



    public function deposit()
    {
        $user=Auth::user();
        $invest_check=Investment::where('user_id',$user->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();

        $this->data['last_package'] = ($invest_check)?$invest_check->amount:0;
        $this->data['page'] = 'user.invest.Deposit';
        return $this->dashboard_layout();
    }
    

    public function depositList()
    {
        $user=Auth::user();
        $invest_check=Investment::where('user_id',$user->id)->where('status','==','Active')->orderBy('id','desc');
            $todaysIncome = Income::where('user_id',$user->id)->where('ttime',Date("Y-m-d"))->sum('comm');

        $this->data['records'] = ($invest_check)?$invest_check:[];
        $this->data['page'] = 'user.invest.strategy';
        return $this->dashboard_layout();
    }


    public function package()
    {
       
        $this->data['page'] = 'user.invest.package';
        return $this->dashboard_layout();
    }

    public function generate_roi(Request $request)
    {
        try {          
            $id = Auth::user()->id;
            date_default_timezone_set("Asia/Kolkata"); // Set timezone to India time (GMT+5:30)
    
            // Get all active investments for the user that haven't hit the ROI condition
            $allResult = Investment::where('status', 'Active')
                ->where('roiCandition', 0)
                ->where('user_id', $id)
                ->get();

                 dd($$allResult);
    
            $todays = date("Y-m-d");
    
            Log::info($allResult);
    
            if ($allResult->isNotEmpty()) {
                foreach ($allResult as $investment) {
                    $userID = $investment->user_id;
                    $joining_amt = $investment->amount;
                    $startDate = $investment->sdate;
    
                    // Calculate the number of days since the investment started
                    $daysDifference = \Carbon\Carbon::parse($startDate)->diffInDays($todays);
    
                    // Get user details
                    $userDetails = User::where('id', $userID)
                        ->where('active_status', 'Active')
                        ->first();
    
                    if ($userDetails) {
                        // Calculate total expected ROI (200% of the investment)
                        $total_get = $joining_amt * 200 / 100;
                        $total_profit_b = Income::where('user_id', $userID)->where('invest_id', $investment->id)->where('credit_type', 0)->sum('comm');
                        $total_profit = $total_profit_b ? $total_profit_b : 0;
    
                        // Daily ROI percentage
                        $percent = 3.333;
                        $roi = round($joining_amt * $percent / 100);
    
                        Log::info($roi);
    
                        // Max income and remaining income
                        $max_income = $total_get;
                        $n_m_t = $max_income - $total_profit;
    
                        // Ensure ROI doesn't exceed remaining max income
                        if ($roi >= $n_m_t) {
                            $roi = $n_m_t;
                        }

                        Log::info($roi);
                        Log::info($daysDifference);

    
                        Log::info($roi > 0 && $daysDifference < 60);
    
                        // Apply ROI if valid and user has been active for more than 60 days
                        if ($roi > 0 && $daysDifference < 60) {
                            // Prepare data for income insertion
                            $data = [
                                'remarks' => 'Task Income',
                                'comm' => $roi,
                                'amt' => $joining_amt,
                                'invest_id' => $investment->id, 
                                'level' => 0,
                                'ttime' => date("Y-m-d"),
                                'user_id_fk' => $userDetails->username,
                                'user_id' => $userDetails->id,
                                'credit_type' => 1,
                            ];
    
                            // Insert or update the ROI record
                            $income = Income::firstOrCreate([
                                'remarks' => 'Task Income',
                                'ttime' => date("Y-m-d"),
                                'user_id' => $userID,
                                'invest_id' => $investment->id,
                            ], $data);
    
                            \DB::table('users')->where('id', $userID)->update(['last_trade' => date("Y-m-d H:i:s")]);
    
                            // Uncomment to add leadership bonuses if necessary

                            
                          $this->add_level_income($userDetails->id, $roi);
                          // dd($this->add_level_income($userDetails->id, $roi));
                        } else {
                            // Mark the investment as having fulfilled the ROI condition
                            Investment::where('id', $investment->id)->update(['roiCandition' => 1]);
                        }
                    }
                }
    
                // Success notification
                $notify[] = ['success', 'ROI generated successfully for your investments.'];
                return redirect()->route('user.grid')->withNotify($notify);
            } else {
                // No active investments found
                return redirect()->route('user.grid')->withErrors('No active investments found.');
            }
        } catch (\Exception $e) {
            Log::info('Error in generating ROI');
            Log::info($e->getMessage());
            return redirect()->route('user.grid')->withErrors('An error occurred while generating ROI: ' . $e->getMessage());
        }
    }
    
    // public function generate_roi($invest_id = null)
    // {
    //     try {
    //         $id = Auth::user()->id;
    //         date_default_timezone_set("Asia/Kolkata"); // Set timezone to India time (GMT+5:30)
            
    //         // Get the specific investment if invest_id is provided; otherwise, get all active investments
    //         $allResult = Investment::where('id',$invest_id)->where(column: 'status', 'Active')
    //             ->where('roiCandition', 0)
    //             ->where('user_id', $id);
    
    //         // If invest_id is provided, filter the investments by that ID
    //         if ($invest_id) {
    //             $allResult = $allResult->where('id', $invest_id);
    //         }
    
    //         $allResult = $allResult->get();
    //         $todays = date("Y-m-d");
    //         Log::info($allResult);
    
    //         if ($allResult->isNotEmpty()) {
    //             foreach ($allResult as $investment) {
    //                 $userID = $investment->user_id;
    //                 $joining_amt = $investment->amount;
    //                 $startDate = $investment->sdate;
    //                 $daysDifference = \Carbon\Carbon::parse($startDate)->diffInDays($todays);
    
    //                 $userDetails = User::where('id', $userID)
    //                     ->where('active_status', 'Active')
    //                     ->first();
    
    //                 if ($userDetails) {
    //                     $total_get = $joining_amt * 2;
    //                     $total_profit_b = Income::where('user_id', $userID)
    //                         ->where('invest_id', $investment->id)
    //                         ->where('credit_type', 0)
    //                         ->sum('comm');
    //                     $total_profit = $total_profit_b ? $total_profit_b : 0;
    
    //                     $percent = 3.333;
    //                     $roi = round($joining_amt * $percent / 100);
    
    //                     $max_income = $total_get;
    //                     $n_m_t = $max_income - $total_profit;
    //                     $roi = min($roi, $n_m_t);
    
    //                     if ($roi > 0 && $daysDifference < 60) {
    //                         $data = [
    //                             'remarks' => 'Task Income',
    //                             'comm' => $roi,
    //                             'amt' => $joining_amt,
    //                             'invest_id' => $investment->id,
    //                             'level' => 0,
    //                             'ttime' => date("Y-m-d"),
    //                             'user_id_fk' => $userDetails->username,
    //                             'user_id' => $userDetails->id,
    //                             'credit_type' => 1,
    //                         ];
    
    //                         Income::firstOrCreate([
    //                             'remarks' => 'Task Income',
    //                             'ttime' => date("Y-m-d"),
    //                             'user_id' => $userID,
    //                             'invest_id' => $investment->id,
    //                         ], $data);
    
    //                         \DB::table('users')->where('id', $userID)->update(['last_trade' => date("Y-m-d H:i:s")]);
    //                         $this->add_level_income($userDetails->id, $roi);
    //                     } else {
    //                         Investment::where('id', $investment->id)->update(['roiCandition' => 1]);
    //                     }
    //                 }
    //             }
    
    //             $notify[] = ['success', 'ROI generated successfully for your investments.'];
    //             return redirect()->route('user.strategy')->withNotify($notify);
    //         } else {
    //             return redirect()->route('user.strategy')->withErrors('No active investments found.');
    //         }
    //     } catch (\Exception $e) {
    //         Log::info('Error in generating ROI');
    //         Log::info($e->getMessage());
    //         return redirect()->route('user.strategy')->withErrors('An error occurred while generating ROI: ' . $e->getMessage());
    //     }
    // }
    
    
   public function add_level_income($id,$amt)
    {
    
      //$user_id =$this->session->userdata('user_id_session')
    $data = User::where('id',$id)->orderBy('id','desc')->first();
    
    $user_id = $data->username;
    $fullname=$data->name;
    
    $rname = $data->username;
    $user_mid = $data->id;
    
    
          $cnt = 1;
    
          $amount = $amt/100;
    
    
            while ($user_mid!="" && $user_mid!="1"){
              
                  $Sposnor_id = User::where('id',$user_mid)->orderBy('id','desc')->first();
                  $sponsor=$Sposnor_id->sponsor; 
                  
                  if (!empty($sponsor))
                   {
                    $Sposnor_status = User::where('id',$sponsor)->orderBy('id','desc')->first();
    
                    $my_level_team=my_level_team_count($Sposnor_status->id);
                    $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
                    $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
                    $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());
                  
                    $gen_team1 = User::where(function($query) use($gen_team1)
                            {
                              if(!empty($gen_team1)){
                                foreach ($gen_team1 as $key => $value) {
                                //   $f = explode(",", $value);
                                //   print_r($f)."<br>";
                                  $query->orWhere('id', $value);
                                }
                              }else{$query->where('id',null);}
                            })->orderBy('id', 'DESC')->get();
                            
                      $gen_team2 = User::where(function($query) use($gen_team2)
                            {
                              if(!empty($gen_team2)){
                                foreach ($gen_team2 as $key => $value) {
                                //   $f = explode(",", $value);
                                //   print_r($f)."<br>";
                                  $query->orWhere('id', $value);
                                }
                              }else{$query->where('id',null);}
                            })->orderBy('id', 'DESC')->get();
                       $gen_team3 = User::where(function($query) use($gen_team3)
                            {
                              if(!empty($gen_team3)){
                                foreach ($gen_team3 as $key => $value) {
                                //   $f = explode(",", $value);
                                //   print_r($f)."<br>";
                                  $query->orWhere('id', $value);
                                }
                              }else{$query->where('id',null);}
                            })->orderBy('id', 'DESC')->get();
              
              
                    
              // Calculate totals
            $gen_team1total = $gen_team1->count();
            $active_gen_team1total = $gen_team1->where('active_status', 'Active')->count();
            
            $gen_team2total = $gen_team2->count();
            $active_gen_team2total = $gen_team2->where('active_status', 'Active')->count();
            
            $gen_team3total = $gen_team3->count();
            $active_gen_team3total = $gen_team3->where('active_status', 'Active')->count();
            
            // Combine totals for team 2 and team 3
            $active_gen_team23total = $active_gen_team2total + $active_gen_team3total;
            
            // Initialize VIP status
            $vip = 1;
            
            // Determine VIP level based on conditions
            if ($active_gen_team1total >= 30 && $active_gen_team23total >= 40) {
                $vip = 7;
            } elseif ($active_gen_team1total >= 15 && $active_gen_team23total >= 20) {
              $vip = 6;
            } elseif ($active_gen_team1total >= 8 && $active_gen_team23total >= 15) {
                $vip = 5;
            } elseif ($active_gen_team1total >= 5 && $active_gen_team23total >= 10) {
                $vip = 4;
            } elseif ($active_gen_team1total >= 3 && $active_gen_team23total >= 5) {
                $vip = 3;
            } elseif ($active_gen_team1total >= 2) {
                $vip = 2;
            } elseif ($active_gen_team1total > 0 || $active_gen_team2total > 0 || $active_gen_team3total > 0) {
                $vip = 1;
            }
    
    
    
    
                    $Sposnor_cnt = User::where('sponsor',$sponsor)->where('active_status','Active')->count("id");
                    $sp_status=$Sposnor_status->active_status;
                    $rank=$Sposnor_status->rank;
                    $lastPackage = \DB::table('investments')->where('user_id',$Sposnor_status->id)->where('status','Active')->orderBy('id','DESC')->limit(1)->first();
                    $plan = ($lastPackage)?$lastPackage->plan:0;
                  }
                  else
                  {
                    $Sposnor_status =array();
                    $sp_status="Pending";
                    $Sposnor_cnt=0;
                    $rank=0;
                  }
    
                  $pp=0;
                   if($sp_status=="Active")
                   {
                     if($cnt==1 && $vip>=2)
                      {
                        $pp= $amount*10;
    
                      } if($cnt==2 && $vip>=3)
                      {
                        $pp= $amount*5;
    
                      } if($cnt==3 && $vip>=4)
                      {
                        $pp= $amount*4;
    
                      }  
                      if($cnt==4 && $vip>=5)
                      {
                        $pp= $amount*3;
    
                      }  
                      if($cnt==5 && $vip>=6)
                      {
                        $pp= $amount*2;
    
                      }  
                      if($cnt==6 && $vip>=7)
                      {
                        $pp= $amount*1;
    
                      }  
                      
                   
    
                    }
                    else
                    {
                      $pp=0;
                    }
    
    
    
                  $user_mid = @$Sposnor_status->id;
                  $spid = @$Sposnor_status->id;
                  $idate = date("Y-m-d");
                 
                  $user_id_fk=$sponsor;
                  if($spid>0 && $cnt<=6){
                    if($pp>0){
    
                     $data = [
                    'user_id' => $user_mid,
                    'user_id_fk' =>$Sposnor_status->username,
                    'amt' => $amt,
                    'comm' => $pp,
                    'remarks' =>'Level Income',
                    'level' => $cnt,
                    'rname' => $rname,
                    'fullname' => $fullname,
                    'ttime' => Date("Y-m-d"),
                    'credit_type' => 1,
    
    
                ];
                 $user_data =  Income::create($data);
                
    
            }
           }
    
            $cnt++;
    }
    
    return true;
    }
    
    public function strategy()
    {
      $user = Auth::user();
      date_default_timezone_set("Asia/Kolkata"); // Set timezone to India time (GMT+5:30)
  
      // Get the user's last trade
      $last_trade = $user->last_trade; 
  
      // Initialize $button to default value
      $button = 1; 
  
      // Get the current time
      $current_time = new \DateTime();
  
      // Check if last_trade is not null
      if ($last_trade) {
          // Convert $last_trade to a DateTime object
          $last_trade_time = new \DateTime($last_trade);


  
          // Calculate the time difference in hours
          $time_diff = $current_time->diff($last_trade_time);
          $hours_diff = $time_diff->h + ($time_diff->days * 24); // Total hours difference

  
          if ($hours_diff < 1) {
              // If last trade is within the last hour
              $button = 2;
          } elseif ($hours_diff >= 24) {
              // If last trade is more than or equal to 24 hours ago
              $button = 1;
          } else {
              // If last trade is more than 1 hour but less than 24 hours
              $button = 3;
          }
      }


        $todaysIncome = Income::where('user_id',$user->id)->where('ttime',Date("Y-m-d"))->sum('comm');
        $totalRoi = Income::where('user_id',$user->id)->where('remarks','Trading Bonus')->sum('comm');

         // Check for active investments
    $invest_check = Investment::where('user_id', $user->id)
    ->where('status', 'Active')
    ->where('roiCandition', 0)
    ->get();

// Initialize investment-related variables
$active_investment = 0;
$total_amount = 0;
$total_profit = 0;

// If there are active investments, calculate totals
if ($invest_check->isNotEmpty()) {
$active_investment = 1;
$total_amount = $invest_check->sum('amount'); // Sum of the 'amount' field
$total_profit = $invest_check->sum('plan');   // Sum of the 'plan' field
}
    
    
        $notes = DB::table('plans')->get();

        
        $my_level_team=$this->my_level_team_count($user->id);
        $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
        $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
        $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());
      
        $gen_team1 = User::where(function($query) use($gen_team1)
                {
                  if(!empty($gen_team1)){
                    foreach ($gen_team1 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
                
          $gen_team2 = User::where(function($query) use($gen_team2)
                {
                  if(!empty($gen_team2)){
                    foreach ($gen_team2 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
           $gen_team3 = User::where(function($query) use($gen_team3)
                {
                  if(!empty($gen_team3)){
                    foreach ($gen_team3 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
  
  
        
  // Calculate totals
$gen_team1total = $gen_team1->count();
$active_gen_team1total = $gen_team1->where('active_status', 'Active')->count();

$gen_team2total = $gen_team2->count();
$active_gen_team2total = $gen_team2->where('active_status', 'Active')->count();

$gen_team3total = $gen_team3->count();
$active_gen_team3total = $gen_team3->where('active_status', 'Active')->count();

// Combine totals for team 2 and team 3
$active_gen_team23total = $active_gen_team2total + $active_gen_team3total;


$this->data['active_gen_team1total'] = $active_gen_team1total;
$this->data['active_gen_team2total'] = $active_gen_team2total;
$this->data['active_gen_team3total'] = $active_gen_team3total;

$this->data['active_gen_team23total'] = $active_gen_team23total;



        $this->data['recharges'] = ($invest_check) ? $invest_check : [];
        $this->data['data'] = $notes;
        $this->data['button'] = $button;
        $this->data['last_trade'] = $last_trade;
        $this->data['active_investment'] = $active_investment;
        $this->data['total_amount'] = $total_amount;
        $this->data['total_profit'] = $total_profit;
        $this->data['todaysIncome'] = $todaysIncome;
        $this->data['totalRoi'] = $totalRoi;
        $this->data['vip'] = $user->vip;
      
        $this->data['page'] = 'user.invest.strategy';        
        return $this->dashboard_layout();
    }
    

    public function nodepower()
    {
        $user = Auth::user();
        date_default_timezone_set("Asia/Kolkata"); // Set timezone to India time (GMT+5:30)
    
        // Get the user's last investment
        $last_investment = Investment::where('user_id', $user->id)
            ->orderBy('created_at', 'desc') // Get the latest investment
            ->first();
            $last_investment1 = Investment::where('user_id', $user->id)->get();
          
    
        // Initialize $last_trade and $button to default values
        // $last_trade = $last_investment1->last_trade?;

        // dd($last_trade);
        $button = 1; 
    
        // Get the current time
        $current_time = new \DateTime();
       
    
        // Check if last_trade is not null
        if ($last_trade) {
            // Convert $last_trade to a DateTime object
            $last_trade_time = new \DateTime($last_trade);
    
            // Calculate the time difference in hours
            $time_diff = $current_time->diff($last_trade_time);
           
            $hours_diff = $time_diff->h + ($time_diff->days * 24); // Total hours difference
            // dd( $hours_diff);
            if ($hours_diff < 1) {
                // If last trade is within the last hour
                $button = 1;
            } elseif ($hours_diff >= 24) {
                // If last trade is more than or equal to 24 hours ago
                $button = 2;
            } else {
                // If last trade is more than 1 hour but less than 24 hours
                $button = 3;
            }
        }
    
        // Retrieve active investments with roiCondition of 0
        $investments = Investment::where('user_id', $user->id)
            ->where('status', 'Active')
            ->where('roiCandition', 0)
            ->get();
    
        // Retrieve all active investments for plan details
        $plan = Investment::where('user_id', $user->id)
            ->where('status', 'Active')->get();
    
        // Retrieve all available plans
        $notes = DB::table('plans')->get();
    
        // Pass data to the view
        $this->data['recharges'] = $investments;
        $this->data['button'] = $button;
        $this->data['last_trade'] = $last_trade;
        $this->data['data'] = $notes;
        $this->data['plan'] = $plan;
        $this->data['page'] = 'user.team.market';
    
        return $this->dashboard_layout();
    }
    
    public function grid()
    {
      $user = Auth::user();
      date_default_timezone_set("Asia/Kolkata"); // Set timezone to India time (GMT+5:30)
  
      // Get the user's last trade
      $last_trade = $user->last_trade; 
  
      // Initialize $button to default value
      $button = 1; 
  
      // Get the current time
      $current_time = new \DateTime();
  
      // Check if last_trade is not null
      if ($last_trade) {
          // Convert $last_trade to a DateTime object
          $last_trade_time = new \DateTime($last_trade);


  
          // Calculate the time difference in hours
          $time_diff = $current_time->diff($last_trade_time);
          $hours_diff = $time_diff->h + ($time_diff->days * 24); // Total hours difference
          $minutes_diff = ($time_diff->days * 24 * 60) + ($time_diff->h * 60) + $time_diff->i;

  
          if ($minutes_diff < 10) {
              // If last trade is within the last hour
              $button = 1;
          } elseif ($hours_diff >= 24) {
              // If last trade is more than or equal to 24 hours ago
              $button = 2;
          } else {
              // If last trade is more than 1 hour but less than 24 hours
              $button = 3;
          }
      }


        $todaysIncome = Income::where('user_id',$user->id)->where('ttime',Date("Y-m-d"))->sum('comm');
        $totalRoi = Income::where('user_id',$user->id)->where('remarks','Trading Bonus')->sum('comm');

         // Check for active investments
    $invest_check = Investment::where('user_id', $user->id)
    ->where('status', 'Active')
    ->where('roiCandition', 0)
    ->get();

// Initialize investment-related variables
$active_investment = 0;
$total_amount = 0;
$total_profit = 0;

// If there are active investments, calculate totals
if ($invest_check->isNotEmpty()) {
$active_investment = 1;
$total_amount = $invest_check->sum('amount'); // Sum of the 'amount' field
$total_profit = $invest_check->sum('plan');   // Sum of the 'plan' field
}
    
    
        $notes = DB::table('plans')->get();

        
        $my_level_team=$this->my_level_team_count($user->id);
        $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
        $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
        $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());
      
        $gen_team1 = User::where(function($query) use($gen_team1)
                {
                  if(!empty($gen_team1)){
                    foreach ($gen_team1 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
                
          $gen_team2 = User::where(function($query) use($gen_team2)
                {
                  if(!empty($gen_team2)){
                    foreach ($gen_team2 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
           $gen_team3 = User::where(function($query) use($gen_team3)
                {
                  if(!empty($gen_team3)){
                    foreach ($gen_team3 as $key => $value) {
                    //   $f = explode(",", $value);
                    //   print_r($f)."<br>";
                      $query->orWhere('id', $value);
                    }
                  }else{$query->where('id',null);}
                })->orderBy('id', 'DESC')->get();
  
  
        
  // Calculate totals
$gen_team1total = $gen_team1->count();
$active_gen_team1total = $gen_team1->where('active_status', 'Active')->count();

$gen_team2total = $gen_team2->count();
$active_gen_team2total = $gen_team2->where('active_status', 'Active')->count();

$gen_team3total = $gen_team3->count();
$active_gen_team3total = $gen_team3->where('active_status', 'Active')->count();

// Combine totals for team 2 and team 3
$active_gen_team23total = $active_gen_team2total + $active_gen_team3total;


$this->data['active_gen_team1total'] = $active_gen_team1total;
$this->data['active_gen_team2total'] = $active_gen_team2total;
$this->data['active_gen_team3total'] = $active_gen_team3total;

$this->data['active_gen_team23total'] = $active_gen_team23total;



        $this->data['recharges'] = ($invest_check) ? $invest_check : [];
        $this->data['data'] = $notes;
        $this->data['button'] = $button;
        $this->data['last_trade'] = $last_trade;
        $this->data['active_investment'] = $active_investment;
        $this->data['total_amount'] = $total_amount;
        $this->data['total_profit'] = $total_profit;
        $this->data['todaysIncome'] = $todaysIncome;
        $this->data['totalRoi'] = $totalRoi;
        $this->data['vip'] = $user->vip;
      
        $this->data['page'] = 'user.invest.Sachkore';        
        return $this->dashboard_layout();
    }


    

public function cancel_payment($id)

{
    
         Investment::where('orderId',$id)->update(['status' => 'Decline']);
     
        $notify[] = ['success','Deposit canceled successfully'];
        return redirect()->route('user.invest')->withNotify($notify);
    
}


public function viewdetail($txnId)
{
    
    
        $invoice = substr(str_shuffle("0123456789"), 0, 7);
       $apiURL = 'https://api.plisio.net/api/v1/operations/'.$txnId;
        $postInput = [
        'api_key' => '6Wmf87DHpYmEKz6zDDH8UrzMXACo7nweTe5C8MVkUwYh6Y4S6-yY8wo8hfKjR-K0',
        ];
  
        $headers = [
            'Content-Type' => 'application/json'
        ];
  
        $response = Http::withHeaders($headers)->get($apiURL, $postInput);
  
        $statusCode = $response->status();
        $resultAarray = json_decode($response->getBody(), true);
        if($resultAarray)
        {
          if($resultAarray['status']=="success")
        {
            if(!empty($resultAarray['data']['tx']))
            {
                   return  Redirect::to($resultAarray['data']['tx'][0]['url']);
            }
            else
            {
                return Redirect::back()->withErrors(array('try again'));  
            }
        
        }
        else
        {
           return Redirect::back()->withErrors(array('try again'));  
        }
          
        }
         else
        {
           return Redirect::back()->withErrors(array('try again'));  
        }
        
       
     
}


public function gridDeposit(Request $request)
{
try{
 $validation =  Validator::make($request->all(), [
    'amount' => 'required|numeric|min:10',
 ]);
if($validation->fails()) {
    Log::info($validation->getMessageBag()->first());

    return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
}

$user=Auth::user();
$amount = $request->Sum;

 $invest_check=Investment::where('user_id',$user->id)->where('status','Pending')->first();

$amountTotal= $request->Sum;

if( $invest_check['status']=="success")
{

   $data = [
        // 'plan' => $plan,
        // 'orderId' => $invoice,
        // 'transaction_id' =>$resultAarray['data']['txn_id'],
        'user_id' => $user->id,
        'user_id_fk' => $user->username,
        'amount' => $amountTotal,
        // 'payment_mode' =>$paymentMode,
        'status' => 'Active',
        'sdate' => Date("Y-m-d"),
        'active_from' => $user->username,
        'created_at' => date("Y-m-d H:i:s"),
    ];
    $payment =  Investment::insert($data);
            
$this->data['page'] = 'user.invest.confirmDeposit';
return $this->dashboard_layout();  

}
else
{
return Redirect::back()->withErrors(array('try again'));
}

}
catch(\Exception $e){
Log::info('error here');
Log::info($e->getMessage());
print_r($e->getMessage());
die("hi");
return  redirect()->route('user.strategy')->withErrors('error', $e->getMessage())->withInput();
  }

}

    public function confirmDeposit1(Request $request)
    {
   try{
     $validation =  Validator::make($request->all(), [
        'Sum' => 'required|numeric|min:10',
        'PSys' => 'required',
     ]);

 
    //  dd($request->all());
    if($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
    }




    $user=Auth::user();


    $min_amount = $request->minimum_deposit;
    $max_amount = $request->maximum_deposit;
    $plan = $request->plan;
    $paymentMode = $request->PSys;
    $amount = $request->Sum;

   
    
     $invest_check=Investment::where('user_id',$user->id)->where('status','Pending')->first();

    // if ($invest_check) 
    // {
    //   return  redirect()->route('user.DepositHistory')->withErrors(array('your deposit already pending'));
    // }
   
   
    $amountTotal= $request->Sum;
  
  
    // if($paymentMode=="USDTBEP20")
    // {
    //   $paymentMode= "USDT_BSC"; 
    // }
    // else
    // {
    //   $paymentMode= "USDT_TRX";    
    // }
    

       $invoice = substr(str_shuffle("0123456789"), 0, 7);
       $apiURL = 'https://plisio.net/api/v1/invoices/new';
        $postInput = [
        'source_currency' => 'USD',
        'source_amount' => $amountTotal,
        'order_number' => $invoice,
        'currency' => $paymentMode,
        'email' => $user->email,
        'order_name' =>$user->username,
        'callback_url' => 'https://syntheticventure.com/dynamicupicallback?json=true',
        'api_key' => '6Wmf87DHpYmEKz6zDDH8UrzMXACo7nweTe5C8MVkUwYh6Y4S6-yY8wo8hfKjR-K0',
        ];
  
        $headers = [
            'Content-Type' => 'application/json'
        ];
  
        $response = Http::withHeaders($headers)->get($apiURL, $postInput);
  
        $statusCode = $response->status();
        $resultAarray = json_decode($response->getBody(), true);
           date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
//   if($paymentMode=="USDT_BSC")
//   {
//       dd($resultAarray);
//   }

    if($resultAarray['status']=="success")
    {

       $data = [
            'plan' => $plan,
            'orderId' => $invoice,
            'transaction_id' =>$resultAarray['data']['txn_id'],
            'user_id' => $user->id,
            'user_id_fk' => $user->username,
            'amount' => $amountTotal,
            'payment_mode' =>$paymentMode,
            'status' => 'Active',
            'sdate' => Date("Y-m-d"),
            'active_from' => $user->username,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        $payment =  Investment::insert($data);
                
            
    
    $this->data['walletAddress'] =$resultAarray['data']['wallet_hash'];
    $this->data['paymentMode'] =$paymentMode;
    $this->data['transaction_id'] =$resultAarray['data']['txn_id'];
    $this->data['qr_code'] =$resultAarray['data']['qr_code'];
    $this->data['orderId'] =$invoice;
    $this->data['amount'] =$amount;
    $this->data['invoice_total_sum'] =$resultAarray['data']['invoice_total_sum'];
    $this->data['page'] = 'user.invest.confirmDeposit';
    return $this->dashboard_layout();  

  }
  else
  {
    return Redirect::back()->withErrors(array('try again'));
  }

  }
   catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.strategy')->withErrors('error', $e->getMessage())->withInput();
      }

 }



 public function confirmDeposit(Request $request)
    {
   try{
     $validation =  Validator::make($request->all(), [
        'amount' => 'required|numeric|min:10',
        // 'plan' => 'required|numeric',

     ]);
     

    //  dd($request->all());
    if($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.grid')->withErrors($validation->getMessageBag()->first())->withInput();
    }




    $user=Auth::user();

    $amount = $request->amount;
    $amount=$amount/2;
    // $plan = $request->plan;


    $balance=$balance = round($user->available_balance(),2);

    if($amount>$balance){
      return  Redirect::back()->withErrors(array('Balance Insufficient'));

    }
   
    
     $invest_check=Investment::where('user_id',$user->id)->where('amount', $amount)->where('roiCandition', 0)->first();

    if ($invest_check) 
    {
      return  Redirect::back()->withErrors(array('You already have this Package'));
    }
   
    $paymentMode= "USDT";
  

       $invoice = substr(str_shuffle("0123456789"), 0, 7);
      
           date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)

          $vip=$user->vip;

          
          //  if($request->plan=='4' && ($vip<=1) ){
          //   $vip=2;
          //   DB::table('users')
          // ->where('id', $user->id)
          // ->update(['vip' => $vip]);
          // }
          // else if($request->plan=='1' && $vip<=0){
          //   $vip=1;
          //   DB::table('users')
          // ->where('id', $user->id)
          // ->update(['vip' => $vip]);
          // }
          

       $data = [
            // 'plan' => $plan,
            'orderId' => $invoice,
            'transaction_id' =>$invoice,
            'user_id' => $user->id,
            'user_id_fk' => $user->username,
            'amount' => $amount,
            'payment_mode' =>$paymentMode,
            'status' => 'Active',
            'sdate' => Date("Y-m-d"),
            'active_from' => $user->username,
            'created_at' => date("Y-m-d H:i:s"),
           
        ];
        $payment =  Investment::insert($data);
        \DB::table('users')->where('id', $user->id)->update(['last_trade' => date("Y-m-d H:i:s")]);

        add_direct_income($user->id,$amount);

                
            
    $this->data['page'] = 'user.dashboard';

    $notify[] = ['success','Package Buy Successfully'];


    return  redirect()->route('user.grid')->withNotify($notify);


    return $this->dashboard_layout();  

 
  }
   catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.strategy')->withErrors('error', $e->getMessage())->withInput();
      }

 }



    public function confirmDeposit_new(Request $request)
    {
   try{
     $validation =  Validator::make($request->all(), [
        'Sum' => 'required|numeric|min:2',
        'PSys' => 'required',
     ]);


    //  dd($request->all());
    if($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
    }




    $user=Auth::user();
    $invest_check=Investment::where('user_id',$user->id)->where('status','Pending')->first();

    if ($invest_check) 
    {
      return Redirect::back()->withErrors(array('your deposit already pending'));
    }
   

    $min_amount = $request->minimum_deposit;
    $max_amount = $request->maximum_deposit;
    $plan = $request->Plan;
    $paymentMode = $request->PSys;
    $amount = $request->Sum;

   
       
    if ($amount<$min_amount || $amount>$max_amount) 
    {
      return Redirect::back()->withErrors(array('minimum deposit is $ '.$min_amount.' and maximum is $ '.$max_amount));
    }
    
    
        $plan ='BEGINNER';
      if ($amount>=50 && $amount<=200) 
       {
        $plan ='BEGINNER';
       }
       elseif($amount>=400 && $amount<=800)
       {
        $plan ='STANDARD';
       }
       elseif($amount>=1000 && $amount<=2000)
       {
        $plan ='EXCLUSIVE';
       }
       elseif($amount>=2500 && $amount<=5000)
       {
        $plan ='ULTIMATE';
       }

       elseif($amount>=5000 && $amount<=10000)
       {
        $plan ='PREMIUM';
       }

       elseif($amount>=5000)
       {
        $plan ='PREMIUM';
       }
       
    $invest_check=Investment::where('user_id',$user->id)->where('plan',$plan)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();
    
    if($invest_check)
    {
          return Redirect::back()->withErrors(array('you have already chosen this plan choose another plan'));
    }
   
    $amountTotal= $request->Sum;
  
  
    if($paymentMode=="USDT.BEP20")
    {
       $paymentMode= "USDT_BSC"; 
    }
    else
    {
      $paymentMode= "USDT_TRX";    
    }
    
       $invoice = substr(str_shuffle("0123456789"), 0, 7);
       $apiURL = 'https://plisio.net/api/v1/invoices/new';
        $postInput = [
        'source_currency' => 'USD',
        'source_amount' => $amountTotal,
        'order_number' => $invoice,
        'currency' => $paymentMode,
        'email' => $user->email,
        'order_name' =>$user->username,
        'callback_url' => 'https://etriton.co/dynamicupicallback?json=true',
        'api_key' => '4iJxhwNsKCrdhtDn8Q9ctk_vdMvDs6JoXb7DeiRm95R45OeCUhFH8RcgRDOK-lIM',
        ];
  
        $headers = [
            'Content-Type' => 'application/json'
        ];
  
        $response = Http::withHeaders($headers)->get($apiURL, $postInput);
  
        $statusCode = $response->status();
        $resultAarray = json_decode($response->getBody(), true);
        

    if($resultAarray['status']=="success")
    {

       $data = [
            'plan' => $plan,
            'orderId' => $invoice,
            'transaction_id' =>$resultAarray['data']['txn_id'],
            'user_id' => $user->id,
            'user_id_fk' => $user->username,
            'amount' => $amountTotal,
            'payment_mode' =>$paymentMode,
            'status' => 'Pending',
            'sdate' => Date("Y-m-d"),
            'active_from' => $user->username,
        ];
        $payment =  Investment::insert($data);
                
            
    
    $this->data['walletAddress'] =$resultAarray['data']['wallet_hash'];
    $this->data['paymentMode'] =$paymentMode;
    $this->data['transaction_id'] =$resultAarray['data']['txn_id'];
    $this->data['qr_code'] =$resultAarray['data']['qr_code'];
    $this->data['orderId'] =$invoice;
    $this->data['amount'] =$amount;
    $this->data['invoice_total_sum'] =$resultAarray['data']['invoice_total_sum'];
    $this->data['page'] = 'user.invest.confirmDeposit';
    return $this->dashboard_layout();

  }
  else
  {
    return Redirect::back()->withErrors(array('try again'));
  }

  }
   catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
      }

 }

   public function video(){
    $this->data['page'] = 'user.invest.video';
    return $this->dashboard_layout();
   }



    public function fundActivation(Request $request)
    {

      // dd("hiii");
  try{
    $validation =  Validator::make($request->all(), [
        'amount' => 'required|numeric|min:50',
        'paymentMode' => 'required',
        'transaction_id' => 'required|unique:investments,transaction_id',
    ]);

    if($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
    }

 

       $user=Auth::user();
       
       $plan="1";

       $user_detail=User::where('username',$user->username)->orderBy('id','desc')->limit(1)->first();
       $invest_check=Investment::where('user_id',$user_detail->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();
       $invoice = substr(str_shuffle("0123456789"), 0, 7);
       $joining_amt =$request->amount;
        $plan ='BEGINNER';
       if ($joining_amt>=50 && $joining_amt<=200) 
       {
        $plan ='BEGINNER';
       }
       elseif($joining_amt>=400 && $joining_amt<=800)
       {
        $plan ='STANDARD';
       }
       elseif($joining_amt>=1000 && $joining_amt<=2000)
       {
        $plan ='EXCLUSIVE';
       }
       elseif($joining_amt>=2500 && $joining_amt<=5000)
       {
        $plan ='ULTIMATE';
       }

       elseif($joining_amt>=5000 && $joining_amt<=10000)
       {
        $plan ='PREMIUM';
       }

       elseif($joining_amt>=5000)
       {
        $plan ='PREMIUM';
       }
      


      $last_package = ($invest_check)?$invest_check->amount:0;

        
           $data = [
                'plan' => $plan,
                'transaction_id' =>$request->transaction_id,
                'user_id' => $user_detail->id,
                'user_id_fk' => $user_detail->username,
                'amount' => $request->amount,
                'payment_mode' =>$request->paymentMode,
                'status' => 'Pending',
                'sdate' => Date("Y-m-d"),
                'active_from' => $user->username,
            ];
            $payment =  Investment::insert($data);
            

        $notify[] = ['success','Deposit request submitted successfully'];
        return redirect()->route('user.invest')->withNotify($notify);

   

  }
   catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
      }

 }



        public function invest_list(Request $request){

      $user=Auth::user();
      $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('user_id',$user->id);
      if($search <> null && $request->reset!="Reset"){
        $notes = $notes->where(function($q) use($search){
          $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
          ->orWhere('txn_no', 'LIKE', '%' . $search . '%')
          ->orWhere('status', 'LIKE', '%' . $search . '%')
          ->orWhere('type', 'LIKE', '%' . $search . '%')
          ->orWhere('amount', 'LIKE', '%' . $search . '%');
        });

      }

        $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

      $this->data['search'] =$search;
      $this->data['deposit_list'] =$notes;
      $this->data['page'] = 'user.invest.DepositHistory';
      return $this->dashboard_layout();


        }




    public function my_level_team_count($userid,$level=10){
        $arrin=array($userid);
        $ret=array();

        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[$i]=$arrin;
                $i++;

                if ($i>$level) {
                  break;
                 }

            }else{
                $arrin = array();
            }
        }

        // $final = array();
        // if(!empty($ret)){
        //     array_walk_recursive($ret, function($item, $key) use (&$final){
        //         $final[] = $item;
        //     });
        // }

    // dd($ret);
        return $ret;

    }

        public function quality()
        {
          date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
          $user=Auth::user();
          
             $my_level_team=$this->my_level_team_count($user->id);
      $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
      $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
      $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());
    
      $gen_team1 = User::where(function($query) use($gen_team1)
              {
                if(!empty($gen_team1)){
                  foreach ($gen_team1 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();
              
        $gen_team2 = User::where(function($query) use($gen_team2)
              {
                if(!empty($gen_team2)){
                  foreach ($gen_team2 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();
         $gen_team3 = User::where(function($query) use($gen_team3)
              {
                if(!empty($gen_team3)){
                  foreach ($gen_team3 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();


      

        $this->data['gen_team1total'] =$gen_team1->count();
        $this->data['active_gen_team1total'] =$gen_team1->where('active_status','Active')->count();
        $this->data['gen_team2total'] =$gen_team2->count();
        $this->data['active_gen_team2total'] =$gen_team2->where('active_status','Active')->count();

        $this->data['gen_team3total'] =$gen_team3->count();
        $this->data['active_gen_team3total'] =$gen_team3->where('active_status','Active')->count();


        $this->data['gen_team1Income'] =$gen_team1->count();



          $userDirect = User::where('sponsor',$user->id)->where('active_status','Active')->where('package','>=',30)->count();
          $totalRoi = \DB::table('contract')->where('user_id',$user->id)->sum('profit');
          $todaysRoi = \DB::table('contract')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->get();
          $this->data['totalRoi'] = $totalRoi;
          $this->data['userDirect'] = $userDirect;
          $this->data['todaysRoi'] = $todaysRoi->count();
          $this->data['todaysRoiSum'] = \DB::table('contract')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->where('c_status','-1')->sum('profit');
          $this->data['todaysLevelIncome'] = \DB::table('incomes')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->where('remarks','Quantify Level Income')->sum('comm');
          $this->data['totalLevelIncome'] = \DB::table('incomes')->where('user_id',$user->id)->where('remarks','Quantify Level Income')->sum('comm');
          $this->data['balance'] =round($user->available_balance(),2);
          $this->data['page'] = 'user.quality';
          return $this->dashboard_layout();


        }

        public function records(Request $request)
        {

          $user=Auth::user();
        $limit = $request->limit ? $request->limit : paginationLimit();
          $status = $request->status ? $request->status : null;
          $search = $request->search ? $request->search : null;
          $notes = Contract::where('user_id',$user->id)->orderBy('id','DESC');
        if($search <> null && $request->reset!="Reset"){
          $notes = $notes->where(function($q) use($search){
            $q->Where('c_bot', 'LIKE', '%' . $search . '%')
            ->orWhere('c_buy', 'LIKE', '%' . $search . '%')
            ->orWhere('qty', 'LIKE', '%' . $search . '%')
            ->orWhere('profit', 'LIKE', '%' . $search . '%')
            ->orWhere('c_ref', 'LIKE', '%' . $search . '%');
          });

        }

        $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

        $this->data['search'] =$search;
        $this->data['level_income'] =$notes;
          $this->data['page'] = 'user.record';
          return $this->dashboard_layout();
          
        }


        public function edit(Request $request, $id)
        {
        
           $id= $request->id ; 

           $profile = DB::table('plans')->where('id',$id)->first();

          
           return view('user.invest.Deposit')->with('profile',$profile)->with('id',$id);
        
          }


}

