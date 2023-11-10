<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <div id="counter"></div>
    
    <script src="../dist/bundle.umd.js"></script>
    <script>
        var counter = new Component.Counter({
            target: document.querySelector('#counter'),
            props: {
                label: "Text from server side"
            }
        }) 
    </script>
</body>
</html>
