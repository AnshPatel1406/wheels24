<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Model Details</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        body {
            padding-top: 60px; /* Adjust this value based on the height of your header */
            background-color: #f8f8f8; /* Light grey background */
        }
        main {
            font-size: 1.2em; /* Increase the font size */
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            max-width: 1200px; /* Set a maximum width for the content */
            margin: 0 auto; /* Center the content */
            padding: 20px 40px; /* Add padding to increase space on both sides */
            background-color: #fff; /* Off-white background */
            border-radius: 10px; /* Rounded corners */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            
        }
        .car-overview {
            display: flex;
            gap: 20px;
        }
        h1 {
            font-size: 2em; /* Increase the font size for the heading */
        }
        p {
            font-size: 1.2em; /* Increase the font size for paragraphs */
        }
        img {
            max-width: 400px; /* Increase the max-width by 3 times */
            width: 400px; /* Ensure the image takes full width */
            height: auto;
            border-radius: 10px; /* Rounded corners for the image */
        }
        .car-details {
            max-width: 600px;
            font-size: 1.5em;
            display: flex;
            flex-direction: column;
            gap: 10px; /* Add gap between elements */
        }
        .rating {
            font-size: 1.2em;
            color: #FFD700; /* Gold color for rating stars */
        }
        .price {
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 10px;
        }
        .brief {
            color: #24272CB3; /* Color for brief description */
        }
        .section {
            margin-top: 20px;
            padding: 20px;
            background-color: #f0f0f0; /* Light grey background for sections */
            border-radius: 10px; /* Rounded corners for sections */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for sections */
        }
        .section h2 {
            font-size: 3.5em;
            margin-bottom: 30px;
        }
        .horizontal-selection {
            display: flex;
            justify-content: space-around;
            
            margin-top: 10px;
            border-bottom: 2px solid #ddd;
        }
        .horizontal-selection button {
            padding: 10px 20px;
            background-color: transparent;
            border: none;
            border-bottom: 3px solid transparent;
            cursor: pointer;
            font-size: 2.8em;
        }
        .horizontal-selection button.active {
            border-bottom: 3px solid #007BFF;
            color: #007BFF;
        }
        .specs-content, .features-content {
            display: none;
            font-size: 4.9em;
        }
        .specs-content.active {
            display: block;
            height: auto; /* Adjust height to fit content */
        }
        .features-content.active {
            display: block;
            height: 200px; /* Keep consistent height */
        }
        .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, auto);
            row-gap: 10px;
            column-gap: 190px; /* Add spacing between columns */
        }
        .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 10px;
            column-gap: 20px;
        }
        .variants-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
            margin-top: 10px;
            font-size:2.8em;
        }
        .variant-header, .price-header {
            font-weight: bold; 
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
            font-size:1.2em;
            color:#24272CB3;
        }
        .variant, .price {
            padding: 5px 0;
            font-weight: 100;
        }
        .pros-cons-container {
            display: flex;
            gap: 20px;
        }
        .pros, .cons {
            flex: 1;
            padding: 20px;
            border-radius: 10px;
        }
        .pros {
            background-color: #e0f7fa; /* Very light blue background */
            font-size:0.9em;
        }
        .cons {
            background-color: #ffebee; /* Very light red background */
            font-size:0.9em;
        }
        .pros h2, .cons h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size:5em;
        }
        .pros ul, .cons ul {
            list-style-type: disc;
            padding-left: 20px;
            font-size:5em;
        }
        .mileage-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
        }
        .mileage-grid div {
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .mileage-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .mileage-table th, .mileage-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size:5em;
        }
        .mileage-table th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        .image-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .image-grid img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        .review-form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }
        .review-form label {
            font-weight: bold;
        }
        .review-form input, .review-form select, .review-form textarea, .review-form button {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        .review-form button {
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .review-form button:hover {
            background-color: #0056b3;
        }
        .review {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
            background-color: #f0f0f0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .review h3 {
            margin-bottom: 5px;
        }
        .review p {
            margin: 5px 0;
        }
        #colours-description {
            color:#24272CB3;
            font-size:2.5em;
        }
        #colour-image {
            max-width: 900px; /* Increase the max-width by 3 times */
            width: 600px;
            height: auto;
            border-radius: 10px;
        }
        #colours-selection {
            display: flex;
            gap: 0px;
            margin-top: 10px;
            font-size:0.6em;
            word-spacing: 0px;
        }
        #exterior-images{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        #interior-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

    </style>
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
                    proItem.textContent = pro;
                    prosList.appendChild(proItem);
                });
                carDetails.cons.forEach(con => {
                    const conItem = document.createElement('li');
                    conItem.textContent = con;
                    consList.appendChild(conItem);
                });

                // Display mileage details in table format
                const mileageTable = document.getElementById('mileage-table');
                mileageTable.innerHTML = `
                    <tr>
                        <th>Fuel Type</th>
                        <th>Transmission</th>
                        <th>City Mileage</th>
                    </tr>
                `;
                carDetails.mileage.forEach(mileage => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${mileage.fuelType}</td>
                        <td>${mileage.transmission}</td>
                        <td>${mileage.mileage}</td>
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
                specsContent.classList.add('active');
                featuresContent.classList.remove('active');
            });

            featuresButton.addEventListener('click', () => {
                featuresButton.classList.add('active');
                specsButton.classList.remove('active');
                featuresContent.classList.add('active');
                specsContent.classList.remove('active');
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
    <main>
        <div class="car-overview">
            <img id="model-image" alt="Car Image" />
            <div class="car-details">
                <h1 id="model-name"></h1>
                <p id="model-type"></p>
                <p id="model-rating"></p>
                <p id="model-brief" class="brief"></p>
                <p id="model-description"></p>
                <p class="price" id="model-price"></p>
            </div>
        </div>
        <div id="model-details"></div>
        <div class="section">
            <h2 id="specs-features-title"></h2>
            <div class="horizontal-selection">
                <button id="specs-button" class="active">Key Specifications</button>
                <button id="features-button">Top Features</button>
            </div>
            <div id="specs-content" class="specs-content active" style="color:#24272CB3;">
                <!-- Specifications will be dynamically inserted here -->
            </div>
            <div id="features-content" class="features-content">
                <!-- Top features will be dynamically inserted here -->
            </div>
            <a href="../Wheels24/detail_specification/Toyota_Fortuner_specification.php" style="font-size: 2em; color: #007BFF; text-decoration: underline; margin-top: 20px; display: block;">View all Specs & Features</a>
        </div>
        <div class="section">
            <h2 id="variants-title"></h2>
           
            <div class="variants-grid">
                <div class="variant-header">Variant</div>
                <div class="price-header">Ex-showroom Price</div>
                <!-- Variants will be dynamically inserted here -->
            </div>
        </div>
        <div class="section">
            <h2 id="pros-cons-title"></h2>
            <div class="pros-cons-container">
                <div class="pros">
                    <h2>👍 Things we like</h2>
                    <ul id="pros-list">
                        <!-- Pros will be dynamically inserted here -->
                    </ul>
                </div>
                <div class="cons">
                    <h2>👎 Things we don't like</h2>
                    <ul id="cons-list">
                        <!-- Cons will be dynamically inserted here -->
                    </ul>
                </div>
            </div>
        </div>
        <div class="section">
            <h2 id="mileage-title"></h2>
            <table id="mileage-table" class="mileage-table">
                <!-- Mileage details will be dynamically inserted here -->
            </table>
        </div>
        <div class="section">
            <h2 id="colours-title"></h2>
            <p id="colours-description"></p>
            <div class="horizontal-selection" id="colours-selection">
                <!-- Colour buttons will be dynamically inserted here -->
            </div>
            <div id="colour-image-container">
                <img id="colour-image" alt="Car Colour Image" />
            </div>
        </div>
        <div class="section">
            <h2 id="images-title"></h2>
            
            <div>
                <h3 style="font-size: 6em; padding-bottom: 10px;">Exterior</h3>
                <div id="exterior-images" class="image-grid">
                    <!-- Exterior images will be dynamically inserted here -->
                </div>
            </div>
            <div>
                <h3 style="font-size: 6em; padding-bottom: 10px;">Interior</h3>
                <div id="interior-images" class="image-grid">
                    <!-- Interior images will be dynamically inserted here -->
                </div>
            </div>
        </div>
        <div class="section">
            <h2 id="reviews-title"></h2>
            
            <div id="reviews-container">
                <!-- Reviews will be dynamically inserted here -->
            </div>
            <form id="review-form" class="review-form">
                <h3 style="font-size:3em;">Submit Your Review</h3>
                <label for="review-name" style="font-size: 2.5em;">Name:</label>
                <input type="text" id="review-name" name="review-name" required>
                <label for="review-rating" style="font-size: 2.5em;"">Rating: </label>
                <select id="review-rating" name="review-rating" style="font-size: 4em;" required>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
                </select>
                <label for="review-description" style="font-size: 2.5em;">Description:</label>
                <textarea id="review-description" name="review-description" rows="4" required></textarea>
                <button type="submit" style="font-size:4em;">Submit Review</button>
            </form>
        </div>
    </main>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
