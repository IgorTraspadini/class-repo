# JavaScript run options


## Inside the body tag.
```
<!DOCTYPE html>
<html lang="en-gb">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Window Object</title>
</head>

<body>
  <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>
  <script src= "script.js"></script>
</body>
</html>
```

## Inside the head tag. 
Using the "defer" attribute to force the browser to process all html code first.
```
<!DOCTYPE html>
<html lang="en-gb">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Window Object</title>
  <script src="script.js" defer></script>
</head>

<body>
  <h1 style="text-align:center;">Open the Console to See the Magic ✨! </h1>
</body>
</html>
```