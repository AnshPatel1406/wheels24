<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wheels24 Admin Panel</title>
    <!-- Use global dark theme css -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <style>
        /* Admin specific sidebar layout on top of style.css */
        body {
            margin: 0;
            padding: 0;
            display: flex;
            min-height: 100vh;
            background: var(--bg-primary);
            color: var(--text-primary);
        }
        
        .admin-sidebar {
            width: 250px;
            background: var(--bg-card);
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
            z-index: 100;
        }

        .admin-sidebar-header {
            padding: 2rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            text-align: center;
        }

        .admin-sidebar-header h2 {
            margin: 0;
            font-size: 1.5rem;
            color: var(--accent);
        }
        
        .admin-sidebar-nav {
            padding: 1rem 0;
            flex-grow: 1;
        }
        
        .admin-sidebar-nav a {
            display: block;
            padding: 1rem 1.5rem;
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s;
            border-left: 3px solid transparent;
        }
        
        .admin-sidebar-nav a:hover, .admin-sidebar-nav a.active {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            border-left-color: var(--accent);
        }

        .admin-main {
            flex-grow: 1;
            margin-left: 250px;
            padding: 2rem;
            background: var(--bg-primary);
        }

        .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .admin-header h1 {
            margin: 0;
            font-size: 1.8rem;
        }

        /* Admin Table Styles */
        .admin-table-container {
            width: 100%;
            overflow-x: auto;
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
        }

        .admin-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        .admin-table th, .admin-table td {
            padding: 1rem;
            border-bottom: 1px solid var(--border-color);
        }

        .admin-table th {
            background: rgba(255,255,255,0.02);
            color: var(--accent);
            font-weight: 600;
        }

        .admin-table td {
            color: var(--text-secondary);
        }

        .admin-table tr:last-child td {
            border-bottom: none;
        }

        .admin-table a {
            color: var(--accent);
            text-decoration: none;
            margin-right: 0.5rem;
        }

        .admin-table a:hover {
            text-decoration: underline;
        }
        
        .admin-table img {
            border-radius: var(--radius-sm);
        }

        /* Forms */
        .admin-form {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            align-items: end;
        }
    </style>
</head>
<body class="fade-in">
    <div class="admin-sidebar">
        <div class="admin-sidebar-header">
            <h2>Wheels24<br><span style="font-size: 1rem; color: var(--text-secondary);">Admin Panel</span></h2>
        </div>
        <div class="admin-sidebar-nav">
            <a href="dashboard.php">Dashboard</a>
            <a href="admin.php">Manage Cars</a>
            <a href="brands.php">Manage Brands</a>
            <a href="users.php">Manage Users</a>
        </div>
        <div style="padding: 1.5rem;">
            <a href="../index.php" class="btn" style="width: 100%; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); text-align: center;">Logout</a>
        </div>
    </div>
    <div class="admin-main">
