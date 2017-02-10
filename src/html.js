export const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>sp-boilerplate</title>

        <base target="_self">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
        <meta name="format-detection" content="telephone=no,email=no,address=no">
        <meta name="format-detection" content="email=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="telephone=no">
        <meta name="HandheldFriendly" content="true">
        <meta name="mobile-web-app-capable" content="yes">

        <!-- IE/Edge -->
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <!-- iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <!-- for Facebook -->
        <meta property="og:title" content="xxx">
        <meta property="og:type" content="website">
        <meta property="og:description" content="xxx">
        <meta property="og:image" content="xxx">

        <meta name="copyright" content="Copyright (c) xxx">

        <meta name="theme-color" content="#371273" />

        <link href="//cdn.bootcss.com/meyer-reset/2.0/reset.min.css" rel="stylesheet">
        <script>//inject_component_styles</script>
    </head>
    <body>
        <div id="root">
            <div><script>//inject_html</script></div>
        </div>
        <script>//inject_redux_state</script>
        <script>//inject_js</script>
    </body>
    </html>
`