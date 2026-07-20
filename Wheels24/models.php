<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Models - Wheels24</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
      .fade-in {
        opacity: 0;
        transition: opacity 0.1s ease-in;
      }
      .fade-in.show {
        opacity: 1;
      }
      header {
        z-index: 1000; /* Ensure header stays on top */
      }
      .model-container {
        position: relative;
        z-index: 1; /* Ensure model container is below the header */
        overflow: hidden; /* Hide overflow content */
      }
      .model-card {
        position: relative;
        z-index: 1; /* Ensure model cards are below the header */
      }
    </style>
    <script>
        function redirectToDetails(modelName) {
            window.location.href = `model-details.php?model=${modelName}`;
        }
    </script>
</head>
<body class="fade-in">
<?php include 'includes/header.php'; ?>

    <main>
        <section id="models" class="model-container">
            <h1 id="brand-name"></h1>
            <!-- Car models will be displayed here dynamically -->
        </section>
    </main>

  

    <script>
      document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = this.href;
        });
      });

      window.addEventListener('load', () => {
        document.body.classList.add('show');
      });
      
        // Get the selected brand from URL
        const urlParams = new URLSearchParams(window.location.search);
        const brand = urlParams.get('brand');
    
        if (brand) {
            document.getElementById("brand-name").innerText = brand + " Models";
    
            // Fetch the JSON file
            fetch("data/models.json") // Ensure this path is correct
                .then(response => response.json())
                .then(data => {
                    const models = data[brand.toLowerCase()] || []; // Get models for selected brand
                    const modelsContainer = document.getElementById("models");
    
                    if (models.length === 0) {
                        modelsContainer.innerHTML = "<p>No models found for this brand.</p>";
                    } else {
                        models.forEach(model => {
                            let modelElement = document.createElement("div");
                            modelElement.classList.add("model-card");
                            modelElement.innerHTML = `
                                <div class="model-card-content" onclick="redirectToDetails('${model.name}')">
                                    <div class="model-image">
                                        <img src="${model.image}" alt="${model.name}">
                                    </div>
                                    <div class="model-info">
                                        <h3>${model.name}</h3>
                                        <p>${model.description}</p>
                                    </div>
                                </div>`;
                            modelsContainer.appendChild(modelElement);
                        });
                    }
                })
                .catch(error => console.error("Error loading models:", error));
        } else {
            document.getElementById("brand-name").innerText = "Select a car brand";
        }
        window.addEventListener('load', () => {
          document.body.classList.add('show');
        
          // Check if user is logged in
          const username = getCookie('username');
          if (username) {
              document.getElementById('login-register').style.display = 'none';
              document.getElementById('user-info').style.display = 'block';
              document.getElementById('username-display').textContent = username;
          }
        });

        function getCookie(name) {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(';').shift();
        }
    </script>
     <?php include 'includes/footer.php'; ?>
</body>
</html>
