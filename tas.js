<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patterns Diamond</title>
    <link rel="stylesheet" href="sytle.css">
</head>
<body >
    <h2>Patterns Diamond</h2>
    <div class="pattern" id="diamond"></div>
    <script>
      var diamondPattern = "";
      var size = 15; 

      for (var i = 0; i < size; i++) {
        var row = "";
        for (var j = 0; j < size - i - 1; j++) {
          row += " ";
        }
        for (var k = 0; k < 2 * i + 1; k++) {
          row += "*";
        }
        diamondPattern += row + "\n";
      }
      
      for (var i = size - 2; i >= 0; i--) {
        var row = "";
        for (var j = 0; j < size - i - 1; j++) {
          row += " ";
        }
        for (var k = 0; k < 2 * i + 1; k++) {
          row += "*";
        }
        diamondPattern += row + "\n";
      }

      document.getElementById("diamond").textContent = diamondPattern;
    </script>

</body>
</html>