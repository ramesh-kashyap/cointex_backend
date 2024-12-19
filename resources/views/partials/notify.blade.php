<link rel="stylesheet" href="{{ asset('assets/iziToast.min.css') }}">
<script src="{{ asset('assets/iziToast.min.js') }}"></script>
<style>
    .iziToast.iziToast-color-red {
    background: rgb(19 17 23);
    border-color: rgb(19 17 23);
}

.iziToast.iziToast-color-green {
    background: rgb(19 17 23);
    border-color: rgb(19 17 23);
}
.iziToast>.iziToast-body .iziToast-message {
    margin: 0 0 10px;
    color: #55b2c2 ;
}
.iziToast>.iziToast-close {
  
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(245deg) brightness(104%) contrast(104%);
}
</style>
@if(session()->has('notify'))
    @foreach(session('notify') as $msg)
        <script>
            "use strict";
            iziToast.{{ $msg[0] }}({message:"{{ __($msg[1]) }}", position: "center"});
        </script>
    @endforeach
@endif

@if ($errors->any())
    @php
        $collection = collect($errors->all());
        $errors = $collection->unique();
    @endphp

    <script>
        "use strict";
        @foreach ($errors as $error)
        iziToast.error({
            message: '{{ __($error) }}',
            position: "center",
            progressBar: false
        });
        @endforeach
    </script>

@endif
<script>
    "use strict";
    function notify(status,message) {
        iziToast[status]({
            message: message,
            position: "center",
            class: 'iziToast-custom',
            transitionIn: 'fadeIn',
            transitionOut: 'fadeOut',
            timeout: 5000
        });
    }
</script>
