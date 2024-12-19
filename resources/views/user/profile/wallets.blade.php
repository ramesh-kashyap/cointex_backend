<div class="cab-content">
    <div class="container">
        <div class="cab-tabs">
            <a class="cab-tabs__item" href="{{ route('user.profile') }}" style="text-decoration: none;">Account
                settings</a>
            <a class="cab-tabs__item active" href="{{ route('user.wallets') }}" style="text-decoration: none;">Wallets
                settings</a>
            <a class="cab-tabs__item " href="{{ route('user.ChangePass') }}" style="text-decoration: none;">Change
                password</a>
        </div>
        <form method="post" action="{{route('user.update-wallet')}}" name="balance/wallets_frm">
            <div class="cab-inputs">
              {{ csrf_field() }}
              <label class="cab-input cab-input_wallet">
                <img
                        src="assets/img/usdt.svg" alt="usdt" />
                        <input type="text" name="usdtTrc20"   value="{{ $profile_data ? $profile_data->usdtTrc20 : '' }}" 
                        placeholder="USDT TRC20 wallet"></label>
                       
                       
                        <label class="cab-input cab-input_wallet"><img
                        src="assets/img/usdt.svg" alt="usdt" /><input type="text"  name="usdtBep20" value="{{ $profile_data ? $profile_data->usdtBep20 : '' }}" 
                        placeholder="USDT BEP20 wallet"></label>
                        
                       
                        
                        
                        
            </div>
            <input name="__Cert" value="b6bff6ff" type="hidden"><button name="balance/wallets_frm_btn"
                class="main-btn main-btn_orange main-btn_m">save</button>
        </form>
    </div>
</div>
