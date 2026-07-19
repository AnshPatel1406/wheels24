<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership Plans - Car Buying Guide</title>
    <link rel="stylesheet" href="./styles/style.css">
    <style>
        

        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color:rgba(211, 221, 230, 0.58);
            text-align: center;
            color: #333;
        }
        .header {
            background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header h1 {
            margin: 0;
            color: #fff;
            font-size: 2em;
        }
        .container {
            width: 80%;
            max-width: 800px;
            background: #fff;
            margin: auto;
            padding: 20px;
            z-index: -1;
        }
        .membership-plan {
            background: #fff;
            padding: 30px;
            margin: 20px 0;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 2.3em;
        }
        .membership-plan:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .gold { background: linear-gradient(135deg, #FFD700, #FFC107); }
        .platinum { background: linear-gradient(135deg, #E5E4E2, #C0C0C0); }
        .silver { background: linear-gradient(135deg, #C0C0C0, #A9A9A9); }
        h2 {
            color: #444;
            font-size: 1.5em;
            margin-bottom: 15px;
        }
        ul {
            list-style: none;
            padding: 0;
            text-align: left;
        }
        ul li {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        ul li:last-child {
            border-bottom: none;
        }
        .btn {
            display: inline-block;
            padding: 12px 25px;
            margin-top: 20px;
            color: #fff;
            text-decoration: none;
            border-radius: 25px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .gold .btn { background: #b8860b; }
        .gold .btn:hover { background: #a37400; }
        .platinum .btn { background: #5a5a5a; }
        .platinum .btn:hover { background: #444; }
        .silver .btn { background: #808080; }
        .silver .btn:hover { background: #666; }
    </style>
   
</head>
<body>
<?php include 'header.php'; ?>
    <div class="container">
        <h1>Choose Your Membership Plan</h1>
        
        <div class="membership-plan silver">
            <h2>🚗 Silver Membership - ₹999/year</h2>
            <ul>
                <li>✔ Expert car advice</li>
                <li>✔ Basic car reviews & comparisons</li>
                <li>✔ Latest car price updates</li>
                <li>✔ Limited access to exclusive deals</li>
            </ul>
            <a href="enroll_form.php" class="btn">Join Now</a>
        </div>

        <div class="membership-plan gold">
            <h2>🏆 Gold Membership - ₹2,499/year</h2>
            <ul>
                <li>✔ Everything in Silver</li>
                <li>✔ Detailed car reviews with pros & cons</li>
                <li>✔ Personalized car recommendations</li>
                <li>✔ Priority customer support</li>
                <li>✔ Early access to upcoming models</li>
                <li>✔ Discounts on accessories & services</li>
            </ul>
            <a href="enroll_form.php" class="btn">Upgrade to Gold</a>
        </div>

        <div class="membership-plan platinum">
            <h2>🌟 Platinum Membership - ₹4,999/year</h2>
            <ul>
                <li>✔ Everything in Gold</li>
                <li>✔ One-on-one consultation with car experts</li>
                <li>✔ VIP access to car launch events</li>
                <li>✔ Exclusive test drive invitations</li>
                <li>✔ Best deals & financing options</li>
                <li>✔ Complimentary car maintenance tips</li>
            </ul>
            <a href="enroll_form.php" class="btn">Go Platinum Now</a>
        </div>
    </div>
    <?php include 'footer.php'; ?>
</body>
</html>
