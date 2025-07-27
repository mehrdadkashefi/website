<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bootstrap.css">
    <title>Home</title>
   
  </head>
  <body>
    <nav class="nav">
        <a class="nav-link active" aria-current="index.php" href="index.php">Projects</a>
        <a class="nav-link" href="about.php">About</a>
        <!-- <a class="nav-link" href="blog.php">Blog</a>-->
        <a class="nav-link" href="/data/CV.pdf" target="_blank">CV</a>
        <span id="theme-toggle" onclick="toggleTheme()">
            <img src="/icons/moon.svg" alt="Toggle Theme" id="theme-icon">
        </span>
        <!--  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
    </nav>
    
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h3>Sequence learning in human</h3>
          <p>Learning a sequential movement—like a new piano piece—involves learning both what to do and how to do it. These components are often intertwined in studies. This project introduces a paradigm that disentangles them, revealing how sequence learning unfolds when each is examined separately.<br>
          &rarr; <a href="https://doi.org/10.1523/JNEUROSCI.0299-25.2025" target="_blank">Paper</a><br>
          </div>
        <div class="col-sm-5">
          <img src="data/sequence_learning.png"  class="img-fluid">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h3>Sequence production in human</h3>
          <p> This study explores how humans adjust their planning of ongoing reaching movements when multiple upcoming movements are also known in advance.<br>
          &rarr; <a href="https://elifesciences.org/articles/94485" target="_blank">Paper</a><br>
          &rarr; <a href="https://elifesciences.org/articles/101739" target="_blank">Insight article</a> by Raeed Chowdhury.
          </div>
        <div class="col-sm-5">
          <img src="data/seq_production.png"  class="img-fluid">
        </div>
      </div>
    </div>

    
  <script src="script.js"></script>
  </body>
</html>

