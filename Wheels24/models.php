<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Models - Wheels24</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script>
        function redirectToDetails(modelName) {
            window.location.href = `model-details?model=${encodeURIComponent(modelName)}`;
        }
    </script>
</head>
<body class="fade-in">
    <?php include 'includes/header.php'; ?>

    <main class="container section" style="min-height: 80vh; padding-top: 8rem;">
        <div class="text-center">
            <h1 id="brand-name" class="section-title">Loading...</h1>
            <p class="section-subtitle">Explore the lineup</p>
        </div>
        
        <section id="models" class="car-grid fade-in-up" style="margin-top: 2rem;">
            <!-- Car models will be displayed here dynamically -->
        </section>
    </main>

    <script>
        document.querySelectorAll('a').forEach(anchor => {
            if (anchor.getAttribute('href') && !anchor.getAttribute('href').startsWith('#')) {
                // Don't intercept all links, only handle custom behavior if needed
                // actually we shouldn't prevent default for normal links.
            }
        });

        window.addEventListener('load', () => {
            document.body.classList.add('show');
            
            // Check if user is logged in
            const username = getCookie('username') || sessionStorage.getItem('username');
            if (username) {
                const loginEl = document.getElementById('login-register');
                const userEl = document.getElementById('user-info');
                const nameEl = document.getElementById('username-display');
                if(loginEl) loginEl.style.display = 'none';
                if(userEl) userEl.style.display = 'block';
                if(nameEl) nameEl.textContent = username;
            }
        });

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
      
        // Get the selected brand from URL
        const urlParams = new URLSearchParams(window.location.search);
        const brand = urlParams.get('brand');
    
        if (brand) {
            // Capitalize first letter
            const displayBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
            document.getElementById("brand-name").innerText = displayBrand + " Models";
    
            // Fetch the JSON file
            fetch("data/models.json")
                .then(response => response.json())
                .then(data => {
                    const models = data[brand.toLowerCase()] || []; 
                    const modelsContainer = document.getElementById("models");
    
                    if (models.length === 0) {
                        modelsContainer.innerHTML = "<div class='text-center' style='grid-column: 1 / -1;'><p>No models found for this brand.</p></div>";
                    } else {
                        modelsContainer.innerHTML = '';
                        models.forEach((model, index) => {
                            let modelElement = document.createElement("div");
                            modelElement.className = "car-card fade-in-up";
                            modelElement.style.animationDelay = `${index * 0.1}s`;
                            
                            // Truncate description for neatness
                            let desc = model.description || '';
                            if(desc.length > 100) desc = desc.substring(0, 100) + '...';

                            modelElement.innerHTML = `
                                <img src="${model.image}" alt="${model.name}" class="car-card-img" style="cursor: pointer;" onclick="redirectToDetails('${model.name}')">
                                <div class="car-card-body">
                                    <h3 style="margin-bottom: 0.5rem;">${model.name}</h3>
                                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4; flex-grow: 1;">${desc}</p>
                                    <button class="btn btn-primary" style="width: 100%; margin-top: auto;" onclick="redirectToDetails('${model.name}')">View Details</button>
                                </div>`;
                            modelsContainer.appendChild(modelElement);
                        });
                    }
                })
                .catch(error => {
                    console.error("Error loading models:", error);
                    document.getElementById("models").innerHTML = "<div class='text-center' style='grid-column: 1 / -1;'><p class='text-accent'>Error loading models data.</p></div>";
                });
        } else {
            document.getElementById("brand-name").innerText = "Select a car brand";
        }
    </script>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
