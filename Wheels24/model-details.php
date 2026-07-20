<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Model Details</title>
    <link rel="stylesheet" href="assets/css/style.css">
    
    <script src="assets/js/model-details.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const urlParams = new URLSearchParams(window.location.search);
            const modelName = urlParams.get('model');
            const carDetails = getCarDetails(modelName);

            if (carDetails) {
                document.getElementById('model-name').textContent = modelName;
                document.getElementById('model-type').textContent = carDetails.type;
                //document.getElementById('model-description').textContent = carDetails.description;
                document.getElementById('model-image').src = carDetails.image;
                document.getElementById('model-rating').textContent = "Rating: ★★★★☆"; // Example rating
                document.getElementById('model-brief').textContent = carDetails.brief;
                document.getElementById('model-price').textContent = carDetails.price;
                document.getElementById('specs-features-title').textContent = `${modelName} Specs & Features`;
                document.getElementById('variants-title').textContent = `${modelName} Variants`;
                document.getElementById('pros-cons-title').textContent = `Pros & Cons of ${modelName}`;
                document.getElementById('mileage-title').textContent = `${modelName} Mileage`;
                document.getElementById('colours-title').textContent = `${modelName} Colours`;
                document.getElementById('images-title').textContent = `${modelName} Images`;
                document.getElementById('reviews-title').textContent = `User Reviews of ${modelName}`;

                // Display specifications
                const specsContent = document.getElementById('specs-content');
                specsContent.innerHTML = '<div class="specs-grid"></div>';
                const specsGrid = specsContent.querySelector('.specs-grid');
                for (const [key, value] of Object.entries(carDetails.specifications)) {
                    const specElement = document.createElement('div');
                    specElement.textContent = `${key}: ${value}`;
                    specsGrid.appendChild(specElement);
                }

                // Display top features
                const featuresContent = document.getElementById('features-content');
                featuresContent.innerHTML = '<div class="features-grid"></div>';
                const featuresGrid = featuresContent.querySelector('.features-grid');
                carDetails.topFeatures.forEach(feature => {
                    const featureElement = document.createElement('div');
                    featureElement.textContent = `✔ ${feature}`;
                    featuresGrid.appendChild(featureElement);
                });

                // Display variants
                const variantsGrid = document.querySelector('.variants-grid');
                carDetails.variants.forEach(variant => {
                    const variantElement = document.createElement('div');
                    variantElement.classList.add('variant');
                    variantElement.textContent = variant.name;
                    variantsGrid.appendChild(variantElement);

                    const priceElement = document.createElement('div');
                    priceElement.classList.add('price');
                    priceElement.textContent = variant.price;
                    variantsGrid.appendChild(priceElement);
                });

                // Display pros and cons
                const prosList = document.getElementById('pros-list');
                const consList = document.getElementById('cons-list');
                carDetails.pros.forEach(pro => {
                    const proItem = document.createElement('li');
                    proItem.innerHTML = `<span style='color: #10b981; margin-right: 0.5rem;'>✓</span> ${pro}`;
                    prosList.appendChild(proItem);
                });
                carDetails.cons.forEach(con => {
                    const conItem = document.createElement('li');
                    conItem.innerHTML = `<span style='color: #ef4444; margin-right: 0.5rem;'>✕</span> ${con}`;
                    consList.appendChild(conItem);
                });

                // Display mileage details in table format
                const mileageTable = document.getElementById('mileage-table');
                mileageTable.innerHTML = `
                    <tr style="background: rgba(255,255,255,0.05); border-bottom: 1px solid var(--border-color);">
                        <th style="padding: 1rem; color: var(--accent);">Fuel Type</th>
                        <th style="padding: 1rem; color: var(--accent);">Transmission</th>
                        <th style="padding: 1rem; color: var(--accent);">City Mileage</th>
                    </tr>
                `;
                carDetails.mileage.forEach(mileage => {
                    const row = document.createElement('tr');
                    row.style.borderBottom = "1px solid var(--border-color)";
                    row.innerHTML = `
                        <td style="padding: 1rem;">${mileage.fuelType}</td>
                        <td style="padding: 1rem;">${mileage.transmission}</td>
                        <td style="padding: 1rem;">${mileage.mileage}</td>
                    `;
                    mileageTable.appendChild(row);
                });
            } else {
                document.getElementById('model-details').textContent = 'Car model not found.';
            }

            // Handle horizontal selection
            const specsButton = document.getElementById('specs-button');
            const featuresButton = document.getElementById('features-button');
            const specsContent = document.getElementById('specs-content');
            const featuresContent = document.getElementById('features-content');

            specsButton.addEventListener('click', () => {
                specsButton.classList.add('active');
                featuresButton.classList.remove('active');
                specsContent.style.display = 'grid';
                featuresContent.style.display = 'none';
            });

            featuresButton.addEventListener('click', () => {
                featuresButton.classList.add('active');
                specsButton.classList.remove('active');
                featuresContent.style.display = 'grid';
                specsContent.style.display = 'none';
            });
        });

        window.addEventListener('load', () => {
            document.body.classList.add('show');
    
            // Check if user is logged in
            const username = sessionStorage.getItem('username');
            if (username) {
                document.getElementById('login-register').style.display = 'none';
                document.getElementById('user-info').style.display = 'block';
                document.getElementById('username-display').textContent = username;
            }
          });
    </script>
</head>
<body>
<?php include 'includes/header.php'; ?>
    <main class="container" style="padding-top: 8rem; min-height: 80vh;">
        <div class="card fade-in-up" style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start; margin-bottom: 2rem;">
            <div style="flex: 1; min-width: 300px;">
                <img id="model-image" alt="Car Image" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);" />
            </div>
            <div style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 1rem;">
                <h1 id="model-name" class="text-accent" style="font-size: 2.5rem; margin-bottom: 0;"></h1>
                <p id="model-type" style="color: var(--text-secondary); font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px;"></p>
                <p id="model-rating" style="color: #fbbf24; font-size: 1.2rem;"></p>
                <p id="model-brief" style="color: var(--text-secondary); font-size: 1.1rem; font-style: italic; border-left: 3px solid var(--accent); padding-left: 1rem;"></p>
                <p id="model-description" style="line-height: 1.6;"></p>
                <p id="model-price" style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary); margin-top: auto;"></p>
            </div>
        </div>
        <div id="model-details"></div>
        <div class="section fade-in-up" style="margin-bottom: 2rem; background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <h2 id="specs-features-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            <div class="filter-pills" style="justify-content: center; margin-bottom: 2rem;">
                <button id="specs-button" class="filter-pill active">Key Specifications</button>
                <button id="features-button" class="filter-pill">Top Features</button>
            </div>
            <div id="specs-content" class="specs-content active" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <!-- Specifications will be dynamically inserted here -->
            </div>
            <div id="features-content" class="features-content" style="display: none; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <!-- Top features will be dynamically inserted here -->
            </div>
            <div class="text-center" style="margin-top: 2rem;">
                <a href="../detail_specification/Toyota_Fortuner_specification" class="btn" style="background: transparent; border: 1px solid var(--accent); color: var(--accent);">View all Specs & Features</a>
            </div>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 2rem; background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <h2 id="variants-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            <div class="variants-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.02); border-radius: var(--radius-md);">
                <div class="variant-header" style="font-weight: 700; color: var(--accent); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Variant</div>
                <div class="price-header" style="font-weight: 700; color: var(--accent); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Ex-showroom Price</div>
                <!-- Variants will be dynamically inserted here -->
            </div>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 2rem;">
            <h2 id="pros-cons-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            <div class="pros-cons-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div class="pros" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); padding: 2rem; border-radius: var(--radius-lg);">
                    <h2 style="color: #10b981; margin-bottom: 1rem; font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">👍 Things we like</h2>
                    <ul id="pros-list" style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-secondary);">
                        <!-- Pros will be dynamically inserted here -->
                    </ul>
                </div>
                <div class="cons" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); padding: 2rem; border-radius: var(--radius-lg);">
                    <h2 style="color: #ef4444; margin-bottom: 1rem; font-size: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">👎 Things we don't like</h2>
                    <ul id="cons-list" style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-secondary);">
                        <!-- Cons will be dynamically inserted here -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 2rem; background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow-x: auto;">
            <h2 id="mileage-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            <table id="mileage-table" style="width: 100%; border-collapse: collapse; text-align: left;">
                <!-- Mileage details will be dynamically inserted here -->
            </table>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 2rem; background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); text-align: center;">
            <h2 id="colours-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 1rem;"></h2>
            <p id="colours-description" style="color: var(--text-secondary); margin-bottom: 1.5rem;"></p>
            <div class="filter-pills" id="colours-selection" style="justify-content: center; margin-bottom: 2rem;">
                <!-- Colour buttons will be dynamically inserted here -->
            </div>
            <div id="colour-image-container" style="display: flex; justify-content: center;">
                <img id="colour-image" alt="Car Colour Image" style="max-width: 100%; border-radius: var(--radius-md);" />
            </div>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 2rem;">
            <h2 id="images-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Exterior</h3>
                <div id="exterior-images" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <!-- Exterior images will be dynamically inserted here -->
                </div>
            </div>
            <div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Interior</h3>
                <div id="interior-images" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <!-- Interior images will be dynamically inserted here -->
                </div>
            </div>
        </div>
        <div class="section fade-in-up" style="margin-bottom: 4rem;">
            <h2 id="reviews-title" class="section-title text-center" style="font-size: 2rem; margin-bottom: 2rem;"></h2>
            
            <div id="reviews-container" style="display: grid; gap: 1rem; margin-bottom: 3rem;">
                <!-- Reviews will be dynamically inserted here -->
            </div>
            <div class="card" style="max-width: 600px; margin: 0 auto;">
                <form id="review-form" style="display: flex; flex-direction: column; gap: 1rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent);">Submit Your Review</h3>
                    <div>
                        <label for="review-name" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Name:</label>
                        <input type="text" id="review-name" name="review-name" class="form-control" required>
                    </div>
                    <div>
                        <label for="review-rating" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Rating: </label>
                        <select id="review-rating" name="review-rating" class="form-control" style="color: #fbbf24;" required>
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                        </select>
                    </div>
                    <div>
                        <label for="review-description" style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Description:</label>
                        <textarea id="review-description" name="review-description" class="form-control" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">Submit Review</button>
                </form>
            </div>
        </div>
    </main>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
