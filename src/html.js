export default `
    <!DOCTYPE html>
    <html>
    <head>
        <base target="_self">

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta name="format-detection" content="telephone=no,email=no,address=no">
        <meta name="format-detection" content="email=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="telephone=no">
        <meta name="mobile-web-app-capable" content="yes">

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

        <!-- IE/Edge -->
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <!-- iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="copyright" content="Copyright (c) 2018 Super.js">

        <title><script>//inject_title</script></title>
        <script>//inject_metas</script>
        <script>//inject_css</script>
        <script>//inject_style</script>

    </head>
    <body>
        <div id="boat-loader">LOADING...</div>

        <div id="root"><script>//inject_react</script></div>
        <script>//inject_redux</script>
        <script>//inject_js</script>
    </body>
    </html>
`