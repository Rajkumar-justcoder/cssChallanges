## Html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> - Css challanges day - </title>
    <link rel="stylesheet" href="./day4.css">
</head>

<body>

    <div class="root flex">
        <div class="frame flex">
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

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.root {
    height: 100vh;
}

.frame {
    color: white;
    position: relative;
    background: #E56262;
    width: 400px;
    height: 400px
}
```