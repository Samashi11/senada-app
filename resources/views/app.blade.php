{{-- <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html> --}}

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'SENADA') }}</title>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=plus-jakarta-sans:400,500,600,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <style>
        #global-loader {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background-color: #f2fcf8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Plus Jakarta Sans', sans-serif;
            transition: opacity 0.5s ease-out;
        }

        .animate-pattern-pulse {
            animation: patternPulse 2s ease-in-out infinite;
        }

        @keyframes patternPulse {

            0%,
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 0.8;
            }

            50% {
                transform: scale(1.05) rotate(5deg);
                opacity: 1;
            }
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 200;
        }
    </style>
</head>

<body class="font-sans antialiased">

    <div id="global-loader">
        <div style="position: relative; margin-bottom: 2rem;">
            <img src="/assets/senada-logo.png" alt="Logo SENADA" class="animate-pattern-pulse"
                style="width: 8rem; height: auto; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(14, 104, 88, 0.1));" />
        </div>
        <h1 style="font-size: 1.25rem; font-weight: 600; letter-spacing: 0.2em; color: #004e41;">SENADA</h1>
        <div style="margin-top: 2rem; display: flex; gap: 0.5rem;">
            <div
                style="width: 6px; height: 6px; border-radius: 50%; background-color: rgba(14, 104, 88, 0.4); animation: pulse 2s infinite;">
            </div>
            <div
                style="width: 6px; height: 6px; border-radius: 50%; background-color: rgba(14, 104, 88, 0.6); animation: pulse 2s infinite 0.2s;">
            </div>
            <div
                style="width: 6px; height: 6px; border-radius: 50%; background-color: rgba(14, 104, 88, 0.4); animation: pulse 2s infinite 0.4s;">
            </div>
        </div>
    </div>

    @inertia

    <script>
        window.addEventListener('load', () => {
            const loader = document.getElementById('global-loader');
            if (loader) {
                // Beri sedikit jeda agar animasi sempat terlihat elegan
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500); // Waktu transisi opacity CSS
                }, 800);
            }
        });
    </script>
</body>

</html>
