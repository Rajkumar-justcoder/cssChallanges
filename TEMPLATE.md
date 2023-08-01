## Html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./day4.css">
</head>

<body>

    <div class="root">
        <div class="frame">
        </div>
    </div>

</body>

</html>
```

## Css

```css
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.root {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center
}

.frame {
    background-color: #1e1e1e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 400px;
    height: 400px
}
```