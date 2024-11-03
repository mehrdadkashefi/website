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
          <p> We show that anticipating future target cues is a major confound in traditional sequence learning tasks. To resolve this, we introduce a new paradigm and examine how learning generalizes to different effectors and sequences.</p>
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
          <p> 
          In this work, we investigate how human participants perform sequences of reaching movements when aware of multiple upcoming reaches. See our <a href="https://elifesciences.org/articles/94485" target="_blank">eLife paper</a>  and its associated <a href="https://elifesciences.org/articles/101739" target="_blank">insight article</a> by Raeed Chowdhury.</p>
          </div>
        <div class="col-sm-5">
          <img src="data/seq_production.png"  class="img-fluid">
        </div>
      </div>
    </div>

    
  <script src="script.js"></script>
  </body>
</html>

