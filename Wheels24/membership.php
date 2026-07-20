<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership Plans - Car Buying Guide</title>
    <link rel="stylesheet" href="assets/css/style.css">
    
   
</head>
<body>
<?php include 'includes/header.php'; ?>
    <main class="container section" style="padding-top: 8rem; min-height: 80vh;">
        <div class="text-center fade-in-up">
            <h1 class="section-title">Choose Your Membership Plan</h1>
            <p class="section-subtitle">Unlock exclusive automotive insights, expert advice, and premium benefits.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
            
            <!-- Silver -->
            <div class="card fade-in-up" style="animation-delay: 0.1s; display: flex; flex-direction: column;">
                <div style="text-align: center; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚗</div>
                    <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #9ca3af;">Silver</h2>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">₹999<span style="font-size: 1rem; color: var(--text-secondary); font-weight: 400;">/year</span></div>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; flex-grow: 1; display: flex; flex-direction: column; gap: 1rem; color: var(--text-secondary);">
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Expert car advice</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Basic car reviews & comparisons</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Latest car price updates</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Limited access to exclusive deals</li>
                </ul>
                <a href="enroll_form?plan=silver" class="btn" style="width: 100%; margin-top: 2rem; text-align: center; background: transparent; border: 1px solid var(--border-color); color: var(--text-primary);">Join Now</a>
            </div>

            <!-- Gold -->
            <div class="card fade-in-up" style="animation-delay: 0.2s; display: flex; flex-direction: column; border: 1px solid var(--accent); position: relative; transform: scale(1.05); z-index: 1;">
                <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: white; padding: 0.2rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Most Popular</div>
                <div style="text-align: center; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏆</div>
                    <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #fbbf24;">Gold</h2>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">₹2,499<span style="font-size: 1rem; color: var(--text-secondary); font-weight: 400;">/year</span></div>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; flex-grow: 1; display: flex; flex-direction: column; gap: 1rem; color: var(--text-secondary);">
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> <strong>Everything in Silver</strong></li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Detailed car reviews with pros & cons</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Personalized car recommendations</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Priority customer support</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Early access to upcoming models</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Discounts on accessories & services</li>
                </ul>
                <a href="enroll_form?plan=gold" class="btn btn-primary" style="width: 100%; margin-top: 2rem; text-align: center;">Upgrade to Gold</a>
            </div>

            <!-- Platinum -->
            <div class="card fade-in-up" style="animation-delay: 0.3s; display: flex; flex-direction: column;">
                <div style="text-align: center; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); margin-bottom: 1.5rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌟</div>
                    <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: #e5e7eb;">Platinum</h2>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--text-primary);">₹4,999<span style="font-size: 1rem; color: var(--text-secondary); font-weight: 400;">/year</span></div>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; flex-grow: 1; display: flex; flex-direction: column; gap: 1rem; color: var(--text-secondary);">
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> <strong>Everything in Gold</strong></li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> One-on-one consultation with car experts</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> VIP access to car launch events</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Exclusive test drive invitations</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Best deals & financing options</li>
                    <li style="display: flex; gap: 0.8rem;"><span style="color: var(--accent);">✓</span> Complimentary car maintenance tips</li>
                </ul>
                <a href="enroll_form?plan=platinum" class="btn" style="width: 100%; margin-top: 2rem; text-align: center; background: transparent; border: 1px solid var(--border-color); color: var(--text-primary);">Go Platinum Now</a>
            </div>

        </div>
    </main>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
