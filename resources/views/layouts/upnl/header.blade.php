<html data-dpr="1" style="font-size: 42.5px; min-width: 425px; max-width: 425px; margin: 0px auto;">

<head>
    <meta charset="utf-8">
    <title>SEOKORE Strategy</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#fff">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta name="full-screen" content="true">
    <meta name="x5-fullscreen" content="true">
    <meta name="360-fullscreen" content="true">
    <meta name="renderer" content="webkit">
    <meta name="robots" content="noindex, nofollow">
    <script>
        window.addEventListener('error', function (event) {
            if (event.message.indexOf("Unexpected token '<'") > -1) {
                location.reload();
            }
        });
        if ('standalone' in window.navigator && window.navigator.standalone) {
            var noddy,
                remotes = false;
            document.addEventListener(
                'click',
                function (event) {
                    noddy = event.target;
                    while (noddy.nodeName !== 'A' && noddy.nodeName !== 'HTML') {
                        noddy = noddy.parentNode;
                    }
                    if (
                        'href' in noddy &&
                        noddy.href.indexOf('http') !== -1 &&
                        (noddy.href.indexOf(document.location.host) !== -1 || remotes)
                    ) {
                        event.preventDefault();
                        document.location.href = noddy.href;
                    }
                },
                false
            );
        }
    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
        }

        #startLogo {
            width: 100%;
            min-width: 7.5rem;
            height: 100vh;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000000;
            background: #020503;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
        }

        #startLogo img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
        }
    </style>
    <link href="css/chunk-02bd5458.0fb19313.css" rel="prefetch">
    <link href="css/chunk-02c8c6ba.f02a30c2.css" rel="prefetch">
    <link href="css/chunk-0566fd30.1e11c8e5.css" rel="prefetch">
    <link href="css/chunk-08efff57.d1c57c5a.css" rel="prefetch">
    <link href="css/chunk-0fd8d233.1744e2a9.css" rel="prefetch">
    <link href="css/chunk-12e9eabf.b3d0d71a.css" rel="prefetch">
    <link href="css/chunk-146e34fc.2e149894.css" rel="prefetch">
    <link href="css/chunk-18e03ad8.50afbc77.css" rel="prefetch">
    <link href="css/chunk-19b6a8e4.b139f997.css" rel="prefetch">
    <link href="css/chunk-29126459.fe5ce88a.css" rel="prefetch">
    <link href="css/chunk-2bbab528.c3875b9f.css" rel="prefetch">
    <link href="css/chunk-2cd18a7d.c47d657b.css" rel="prefetch">
    <link href="css/chunk-2ec80ff3.d777b076.css" rel="prefetch">
    <link href="css/chunk-2f5392f3.9f86ccac.css" rel="prefetch">
    <link href="css/chunk-37ad0eae.f0c9f373.css" rel="prefetch">
    <link href="css/chunk-380c20ea.9efd6e13.css" rel="prefetch">
    <link href="css/chunk-448c0ae2.f5bf332a.css" rel="prefetch">
    <link href="css/chunk-4c3afbae.12cc21e8.css" rel="prefetch">
    <link href="css/chunk-4e5f1a7a.de8b1aed.css" rel="prefetch">
    <link href="css/chunk-50b10c92.241dffcb.css" rel="prefetch">
    <link href="css/chunk-51c575d6.ffdae5a7.css" rel="prefetch">
    <link href="css/chunk-54637b65.30970f55.css" rel="prefetch">
    <link href="css/chunk-5a04fba1.4a4b249e.css" rel="prefetch">
    <link href="css/chunk-5ac3d6ec.c8f2d705.css" rel="prefetch">
    <link href="css/chunk-5b6ac7a8.56edffb4.css" rel="prefetch">
    <link href="css/chunk-5cb8cbe6.c43f8bc3.css" rel="prefetch">
    <link href="css/chunk-616795b6.5cc48433.css" rel="prefetch">
    <link href="css/chunk-681c0118.11557bbb.css" rel="prefetch">
    <link href="css/chunk-686843b8.ce066fac.css" rel="prefetch">
    <link href="css/chunk-6c7affd0.660ce06f.css" rel="prefetch">
    <link href="css/chunk-6da4369c.fd57190d.css" rel="prefetch">
    <link href="css/chunk-7136a154.e2d1f0d3.css" rel="prefetch">
    <link href="css/chunk-74147bd1.e43d6d74.css" rel="prefetch">
    <link href="css/chunk-75ad7c0e.b67017d0.css" rel="prefetch">
    <link href="css/chunk-75f71fd8.db1cfce5.css" rel="prefetch">
    <link href="css/chunk-75fb7d77.4347cc4f.css" rel="prefetch">
    <link href="css/chunk-78742a63.3df502ae.css" rel="prefetch">
    <link href="css/chunk-78fb2058.3f8e5458.css" rel="prefetch">
    <link href="css/chunk-7aea5d2b.f8ad3983.css" rel="prefetch">
    <link href="css/chunk-7dfd5052.bbff88b1.css" rel="prefetch">
    <link href="css/chunk-80de0c60.cf3f8720.css" rel="prefetch">
    <link href="css/chunk-891177f6.0e8a2793.css" rel="prefetch">
    <link href="css/chunk-926160c6.52e9758a.css" rel="prefetch">
    <link href="css/chunk-991698c0.c70ca9d0.css" rel="prefetch">
    <link href="css/chunk-ad302a42.529caf45.css" rel="prefetch">
    <link href="css/chunk-b205bdbe.a3124886.css" rel="prefetch">
    <link href="css/chunk-b45589e4.41a14156.css" rel="prefetch">
    <link href="css/chunk-b880ca48.7ee96d68.css" rel="prefetch">
    <link href="css/chunk-bc37b504.6f8fa83e.css" rel="prefetch">
    <link href="css/chunk-bf393944.1940f3bc.css" rel="prefetch">
    <link href="css/chunk-c0a3e2fa.35ec6074.css" rel="prefetch">
    <link href="css/chunk-c352687a.9a7cbcfa.css" rel="prefetch">
    <link href="css/chunk-dab37d56.632af7dd.css" rel="prefetch">
    <link href="css/chunk-ded9edba.9080929f.css" rel="prefetch">
    <link href="css/chunk-ea0143b0.c5452a2e.css" rel="prefetch">
    <link href="css/chunk-ee39cd88.8adb81bc.css" rel="prefetch">
    <link href="css/chunk-ee444bf8.1b9d7d9a.css" rel="prefetch">
    <link href="css/chunk-f6532530.0eb12746.css" rel="prefetch">
    <link href="css/app.d4e04d94.css" rel="preload" as="style">
    <link href="css/chunk-vendors.ae7417b2.css" rel="preload" as="style">
    <link href="css/chunk-vendors.ae7417b2.css" rel="stylesheet">
    <link href="css/app.d4e04d94.css" rel="stylesheet">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <link rel="stylesheet" type="text/css" href="css/chunk-12e9eabf.b3d0d71a.css">
    <link rel="stylesheet" type="text/css" href="css/chunk-18e03ad8.50afbc77.css">

    <link rel="stylesheet" type="text/css" href="css/chunk-380c20ea.9efd6e13.css">
    
    <style type="text/css">
        x-vue-echarts {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            min-width: 0
        }

        .vue-echarts-inner {
            flex-grow: 1;
            min-width: 0;
            width: auto !important;
            height: auto !important
        }
    </style>
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
</head>