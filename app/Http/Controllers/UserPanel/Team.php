<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Reentry;
use App\Models\Contract;
use App\Models\Income;
use App\Models\Withdraw;
use App\Models\Investment;
use Illuminate\Support\Facades\DB;
use Auth;
use Log;
use Session;
use Redirect;
use Hash;
use Validator;

class Team extends Controller
{


  

    public function index(Request $request)
    {
      $user=Auth::user();
      // print_r($user->username);die();
        $my_level_team=$this->my_level_team_count($user->id);


      // print_r($ids);die;
        $limit = $request->limit ? $request->limit : paginationLimit();
        $selected_level = $request->selected_level ? $request->selected_level :1;
            
        $search = $request->search ? $request->search : null;
        // $notes = User::where('sponsor',$user->username);
    $gen_team =  (array_key_exists($selected_level,$my_level_team) ? $my_level_team[$selected_level]:array());
       end($my_level_team);        
          $key = key($my_level_team);
          $max_lenght=$key;
          
    ($selected_level)?Session::put('selected_level',$selected_level):"";

            // $notes = User::where('sponsor',$user->username);
          $notes = User::where(function($query) use($gen_team)
              {
                if(!empty($gen_team)){
                  foreach ($gen_team as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC');
      
       if($search <> null && $request->reset!="Reset"){
        $notes = $notes->where(function($q) use($search){
          $q->orWhere('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
        });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);

        $this->data['direct_team'] =$notes;
        $this->data['search'] =$search;
       $this->data['max_lenght'] =$max_lenght;

    $this->data['page'] = 'user.team.direct-team';
    return $this->dashboard_layout();

    }

    public function LevelTeam(Request $request)
    {
      $user=Auth::user();
      $ids=$this->my_level_team($user->id);
   
      $my_level_team=$this->my_level_team_count($user->id);
      $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
      $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
      $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());

      $notes = User::where(function($query) use($ids)
              {
                if(!empty($ids)){
                  foreach ($ids as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();



              $teamwithdraw = Withdraw::where(function($query) use($ids)
              {
                if(!empty($ids)){
                  foreach ($ids as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('user_id', $value);
                  }
                }else{$query->where('user_id',null);}
              })->where('status','Approved')->orderBy('id', 'DESC')->get();

        
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


        $gen_team1UserName =$gen_team1->pluck('username');
        $gen_team2UserName =$gen_team2->pluck('username');
        $gen_team3UserName =$gen_team3->pluck('username');

 
   $totalrecharge=Investment::whereIn('user_id',(!empty($ids)?$ids:array()))->where('status','Active')->sum("amount");
   
   
     if($gen_team1->isNotEmpty())
     {
         $gen_teamIncome = Income::where(function($query) use($gen_team1UserName)
        {
          if(!empty($gen_team1UserName)){
            foreach ($gen_team1UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm'); 
     }
     else
     {
       $gen_teamIncome =0;  
     }
       
  if($gen_team2->isNotEmpty())
     {
        $gen_team2Income = Income::where(function($query) use($gen_team2UserName)
        {
            // dd($gen_team2UserName);
          if($gen_team2UserName){
            foreach ($gen_team2UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm');
  
     }
      else
     {
       $gen_team2Income =0;  
     }
     
      if($gen_team3->isNotEmpty())
     {
         
      $gen_team3Income = Income::where(function($query) use($gen_team3UserName)
        {
          if(!empty($gen_team3UserName)){
            foreach ($gen_team3UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm');
        
     }
      else
     {
       $gen_team3Income =0;  
     }
  
      $teamUserName =$gen_team1->pluck('username');
        $todaysIncome =  \DB::table('incomes')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->where('remarks','Quantify Level Income')->sum('comm');
    
        $this->data['todaysIncome'] =$todaysIncome;
        $this->data['gen_team3Income'] =$gen_team3Income;
        $this->data['gen_team2Income'] =$gen_team2Income;
        $this->data['gen_teamIncome'] =$gen_teamIncome;


        $this->data['gen_team1total'] =$gen_team1->count();
        $this->data['active_gen_team1total'] =$gen_team1->where('active_status','Active')->count();
        $this->data['gen_team2total'] =$gen_team2->count();
        $this->data['active_gen_team2total'] =$gen_team2->where('active_status','Active')->count();

        $this->data['gen_team3total'] =$gen_team3->count();
        $this->data['active_gen_team3total'] =$gen_team3->where('active_status','Active')->count();


        $this->data['gen_team1Income'] =$gen_team1->count();

        $this->data['totalwithdrawal'] =$teamwithdraw->sum('amount');
        $this->data['todaysuser'] =$notes->where('jdate',date('Y-m-d'))->count();
        $this->data['totalrecharge'] =$totalrecharge;
        $this->data['totalTeam'] =$notes->count();
        $this->data['teamEarning'] =$gen_teamIncome+$gen_team2Income+$gen_team3Income;
        $this->data['page'] = 'user.team.level-team';
        return $this->dashboard_layout();

    }
    
    
        public function leftteam(Request $request)
    {  
      
          $this->data['page'] = 'user.team.Mine';
          return $this->dashboard_layout();

    }



   public  function team_by_position($userid,$position){
      $ret=array();
      $get_position_user=User::where('Parentid',$userid)->where('position',$position)->first();
      if($get_position_user){
      
          $ret=$this->my_binary($get_position_user->id);
          $ret[]=$get_position_user->id;
      }
     
      return $ret;
  }



    public  function my_binary($userid){
      $arrin=array($userid);
      $ret=array();
      // print_r($arrin);die();
      while(!empty($arrin)){
       $alldown= User::select('id')->whereIn('Parentid',$arrin)->get()->toArray();
       if(!empty($alldown)){
              $arrin = array_column($alldown,'id');
              $ret[]=$arrin;
            
            
          }else{
              $arrin = array();
          } 
      }
      // continue;    
      $final = array();         
      if(!empty($ret)){
          array_walk_recursive($ret, function($item, $key) use (&$final){
              $final[] = $item;
          });
      }

      return $final;
      
  }  



  public function find_users($snode,$pos) {
    // $this->load->model('Dashboard_model');
  $user_just_downline = User::where('Parentid',$snode)->where('position',$pos)->first();
       return $user_just_downline;
}



  public function genealogy(Request $request)
  {
     $user=Auth::user();
     $userId=$user->id;

     $incomes=Income::where('user_id',$userId)->where('remarks',"ROI Bonus")->get();

  $this->data['datas'] =$incomes;
  $this->data['page'] = 'user.team.tree-view';
  return $this->dashboard_layout();


  }



    public function rightteam(Request $request)
    {  
      $user=Auth::user();
      // print_r($user->username);die();
      $ids=$this->team_by_position($user->id,'Right');
       
        $limit = $request->limit ? $request->limit : 10;
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            // $notes = User::where('sponsor',$user->username);
          $notes = User::whereIn('id',$ids);
        if($search <> null && $request->reset!="Reset"){
          $notes = $notes->where(function($q) use($search){
            $q->orWhere('name', 'LIKE', '%' . $search . '%')          
            ->orWhere('username', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->orWhere('phone', 'LIKE', '%' . $search . '%')
            ->orWhere('jdate', 'LIKE', '%' . $search . '%')
            ->orWhere('active_status', 'LIKE', '%' . $search . '%');
          });
      
        }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
       
          $this->data['direct_team'] =$notes;
          $this->data['search'] =$search;
          $this->data['page'] = 'user.team.market';
          return $this->dashboard_layout();

    }





    public function my_level_team_count($userid,$level=5){
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


        return $ret;

    }



    public function my_level_team($userid,$level=5){
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

      $final = array();
      if(!empty($ret)){
          array_walk_recursive($ret, function($item, $key) use (&$final){
              $final[] = $item;
          });
      }


      return $final;

  }
       
  public function strategy()
  {
      $user=Auth::user();
   
      $this->data['page'] = 'user.bonus.strategy';
      return $this->dashboard_layout();
  } 


  public function invate()
  {
    $user=Auth::user();
    $teamCommission = Income::where('user_id',$user->id)->where('remarks','Team Commission')->sum('comm');
      $this->data['teamCommission'] = $teamCommission;
      $this->data['page'] = 'user.team.invate';
      return $this->dashboard_layout();
  } 

  public function team()
  {
      
    $user=Auth::user();
    $ids=$this->my_level_team($user->id);
    $my_level_team=$this->my_level_team_count($user->id);
    $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
    $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
    $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());
    $gen_team4 =  (array_key_exists(4,$my_level_team) ? $my_level_team[4]:array());
    $gen_team5 =  (array_key_exists(5,$my_level_team) ? $my_level_team[5]:array());

    // dd($gen_team4 );
    $notes = User::where(function($query) use($ids)
            {
              if(!empty($ids)){
                foreach ($ids as $key => $value) {
                //   $f = explode(",", $value);
                //   print_r($f)."<br>";
                  $query->orWhere('id', $value);
                }
              }else{$query->where('id',null);}
            })->orderBy('id', 'DESC')->get();



      
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


            $gen_team4 = User::where(function($query) use($gen_team4)
            {
              if(!empty($gen_team4)){
                foreach ($gen_team4 as $key => $value) {
                //   $f = explode(",", $value);
                //   print_r($f)."<br>";
                  $query->orWhere('id', $value);
                }
              }else{$query->where('id',null);}
            })->orderBy('id', 'DESC')->get();
            
           

            $gen_team5 = User::where(function($query) use($gen_team5)
            {
              if(!empty($gen_team5)){
                foreach ($gen_team5 as $key => $value) {
                //   $f = explode(",", $value);
                //   print_r($f)."<br>";
                  $query->orWhere('id', $value);
                }
              }else{$query->where('id',null);}
            })->orderBy('id', 'DESC')->get();



      $gen_team1UserName =$gen_team1->pluck('username');
      $gen_team2UserName =$gen_team2->pluck('username');
      $gen_team3UserName =$gen_team3->pluck('username');
      $gen_team4UserName =$gen_team4->pluck('username');
      $gen_team5UserName =$gen_team5->pluck('username');


 
 
   if($gen_team1->isNotEmpty())
   {
    
    $gen_team1Recharge = Investment::where(function($query) use($gen_team1UserName)
      {
        if(!empty($gen_team1UserName)){
          foreach ($gen_team1UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Active')->sum('amount'); 

   $gen_team1Withdraw = Withdraw::where(function($query) use($gen_team1UserName)
      {
        if(!empty($gen_team1UserName)){
          foreach ($gen_team1UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Approved')->sum('amount'); 

  $gen_team1Earning = Income::where(function($query) use($gen_team1UserName)
      {
        if(!empty($gen_team1UserName)){
          foreach ($gen_team1UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->sum('comm'); 


   }
   else
   {
     $gen_team1Recharge =0;  
     $gen_team1Withdraw =0;
     $gen_team1Earning =0;
   }
     
if($gen_team2->isNotEmpty())
   {
     
      $gen_team2Recharge = Investment::where(function($query) use($gen_team2UserName)
      {
        if(!empty($gen_team2UserName)){
          foreach ($gen_team2UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Active')->sum('amount'); 

   $gen_team2Withdraw = Withdraw::where(function($query) use($gen_team2UserName)
      {
        if(!empty($gen_team2UserName)){
          foreach ($gen_team2UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Approved')->sum('amount'); 

  $gen_team2Earning = Income::where(function($query) use($gen_team2UserName)
      {
        if(!empty($gen_team2UserName)){
          foreach ($gen_team2UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->sum('comm'); 



   }
    else
   {
    $gen_team2Recharge =0;  
    $gen_team2Withdraw =0;
    $gen_team2Earning =0;
   }
   
    if($gen_team3->isNotEmpty())
   {
       
   

      $gen_team3Recharge = Investment::where(function($query) use($gen_team3UserName)
      {
        if(!empty($gen_team3UserName)){
          foreach ($gen_team3UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Active')->sum('amount'); 

   $gen_team3Withdraw = Withdraw::where(function($query) use($gen_team3UserName)
      {
        if(!empty($gen_team3UserName)){
          foreach ($gen_team3UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Approved')->sum('amount'); 

  $gen_team3Earning = Income::where(function($query) use($gen_team3UserName)
      {
        if(!empty($gen_team3UserName)){
          foreach ($gen_team3UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->sum('comm'); 


      
   }
    else
   {
    $gen_team3Recharge =0;  
    $gen_team3Withdraw =0;
    $gen_team3Earning =0;
   }


   if($gen_team4->isNotEmpty())
   {
       
   

      $gen_team4Recharge = Investment::where(function($query) use($gen_team4UserName)
      {
        if(!empty($gen_team4UserName)){
          foreach ($gen_team4UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Active')->sum('amount'); 

   $gen_team4Withdraw = Withdraw::where(function($query) use($gen_team4UserName)
      {
        if(!empty($gen_team4UserName)){
          foreach ($gen_team4UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Approved')->sum('amount'); 

  $gen_team4Earning = Income::where(function($query) use($gen_team4UserName)
      {
        if(!empty($gen_team4UserName)){
          foreach ($gen_team4UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->sum('comm'); 


      
   }
    else
   {
    $gen_team4Recharge =0;  
    $gen_team4Withdraw =0;
    $gen_team4Earning =0;
   }


   if($gen_team5->isNotEmpty())
   {
       
   

      $gen_team5Recharge = Investment::where(function($query) use($gen_team5UserName)
      {
        if(!empty($gen_team5UserName)){
          foreach ($gen_team5UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Active')->sum('amount'); 

   $gen_team5Withdraw = Withdraw::where(function($query) use($gen_team5UserName)
      {
        if(!empty($gen_team5UserName)){
          foreach ($gen_team5UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->where('status','Approved')->sum('amount'); 

  $gen_team5Earning = Income::where(function($query) use($gen_team5UserName)
      {
        if(!empty($gen_team5UserName)){
          foreach ($gen_team5UserName as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
            $query->orWhere('user_id_fk', $value);
          }
        }else{$query->where('user_id_fk',null);}
      })->sum('comm'); 


      
   }
    else
   {
    $gen_team5Recharge =0;  
    $gen_team5Withdraw =0;
    $gen_team5Earning =0;
   }

    $teamUserName =$gen_team1->pluck('username');

      $this->data['gen_team1Recharge'] =$gen_team1Recharge;
      $this->data['gen_team1Withdraw'] =$gen_team1Withdraw;
      $this->data['gen_team1Earning'] =$gen_team1Earning;

      $this->data['gen_team2Recharge'] =$gen_team2Recharge;
      $this->data['gen_team2Withdraw'] =$gen_team2Withdraw;
      $this->data['gen_team2Earning'] =$gen_team2Earning;

      $this->data['gen_team3Recharge'] =$gen_team3Recharge;
      $this->data['gen_team3Withdraw'] =$gen_team3Withdraw;
      $this->data['gen_team3Earning'] =$gen_team3Earning;

      $this->data['gen_team4Recharge'] =$gen_team4Recharge;
      $this->data['gen_team4Withdraw'] =$gen_team4Withdraw;
      $this->data['gen_team4Earning'] =$gen_team4Earning;

      $this->data['gen_team5Recharge'] =$gen_team5Recharge;
      $this->data['gen_team5Withdraw'] =$gen_team5Withdraw;
      $this->data['gen_team5Earning'] =$gen_team5Earning;


      $this->data['gen_team1total'] =$gen_team1->count();
      $this->data['active_gen_team1total'] =$gen_team1->where('active_status','Active')->count();
      $this->data['gen_team2total'] =$gen_team2->count();
      $this->data['active_gen_team2total'] =$gen_team2->where('active_status','Active')->count();

      $this->data['gen_team3total'] =$gen_team3->count();
      $this->data['active_gen_team3total'] =$gen_team3->where('active_status','Active')->count();

      $this->data['gen_team4total'] =$gen_team4->count();
      $this->data['active_gen_team4total'] =$gen_team4->where('active_status','Active')->count();

      $this->data['gen_team5total'] =$gen_team5->count();
      $this->data['active_gen_team5total'] =$gen_team5->where('active_status','Active')->count();


      $this->data['todaysuser'] =$notes->where('jdate',date('Y-m-d'))->count();
      $this->data['totalTeam'] =$notes->count();
      $this->data['ActivetotalTeam'] =$notes->where('active_status','Active')->count();
      $this->data['totalLevelIncome'] = \DB::table('incomes')->where('user_id',$user->id)->where('remarks','Team Commission')->sum('comm');
      $this->data['balance'] =round($user->available_balance(),2);
    
      $this->data['page'] = 'user.team.team';
      return $this->dashboard_layout();
  } 

  public function list(Request $request)
  {
    $user=Auth::user();
   
    $gen_team=$this->my_level_team($user->id);


    // print_r($ids);die;
      $limit = $request->limit ? $request->limit : 7;
      $selected_level = $request->selected_level ? $request->selected_level :1;
          
      $search = $request->search ? $request->search : null;
      // $notes = User::where('sponsor',$user->username);
          // $notes = User::where('sponsor',$user->username);
           
          $gene1 = User::where('sponsor', $user->id)->first();

          if($gene1!==null){
          $gene2 =   User::whereIn('id', $gene1);
          }
          if($gene2!==null){
            $gene3 =   User::whereIn('id', $gene2);
            }

          // dd($gene1);

        $notes = User::where(function($query) use($gen_team)
            {
              if(!empty($gen_team)){
                foreach ($gen_team as $key => $value) {
                //   $f = explode(",", $value);
                //   print_r($f)."<br>";   
                  $query->orWhere('id', $value);
                }
              }else{$query->where('id',null);}
            })->orderBy('id', 'DESC');
    
     if($search <> null && $request->reset!="Reset"){
      $notes = $notes->where(function($q) use($search){
        $q->orWhere('name', 'LIKE', '%' . $search . '%')
        ->orWhere('username', 'LIKE', '%' . $search . '%')
        ->orWhere('email', 'LIKE', '%' . $search . '%')
        ->orWhere('phone', 'LIKE', '%' . $search . '%')
        ->orWhere('jdate', 'LIKE', '%' . $search . '%')
        ->orWhere('active_status', 'LIKE', '%' . $search . '%');
      });

    }
          $notes = $notes->paginate($limit)
              ->appends([
                  'limit' => $limit
              ]);

      $this->data['direct_team'] =$notes;
      $this->data['search'] =$search;
      $this->data['gene1'] =$gene1;
      $this->data['gene2'] =$gene2;
      $this->data['gene3'] =$gene3;
      $this->data['page'] = 'user.team.list';
      return $this->dashboard_layout();
  } 


  public function totalteam()
  {
      
   
      $this->data['page'] = 'user.team.totalteam';
      return $this->dashboard_layout();
  } 
}
