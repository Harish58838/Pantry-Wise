export const BundledHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="description"
        content="PantryWise — Full-featured real-world smart inventory, shopping checklists, family sync, and AI insights dashboard.">
    <title>PantryWise — Smart Pantry & Family Hub</title>
    <style>
            font-weight: 600;
            color: var(--text-primary);
        }

        .cmd-option:hover {
            background: var(--surface-2);
        }

        .cmd-badge {
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 3px 8px;
            font-size: 10px;
            font-weight: 800;
            color: var(--text-secondary);
        }

        /* --- Quick Actions Bar --- */
        .quick-actions-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 24px;
            overflow-x: auto;
            padding-bottom: 4px;
        }

        .quick-action-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border-radius: var(--radius-md);
            background: var(--surface);
            border: 1px solid var(--border);
            font-size: 12.5px;
            font-weight: 700;
            color: var(--text-primary);
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.2s;
            font-family: var(--font-main);
        }

        .quick-action-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
            border-color: var(--primary);
            color: var(--primary);
        }

        .quick-action-btn i {
            font-size: 14px;
        }

        /* --- Inventory Summary Bar --- */
        .inventory-summary-bar {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .inv-summary-chip {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: var(--radius-full);
            background: var(--surface);
            border: 1px solid var(--border);
            font-size: 12px;
            font-weight: 700;
            color: var(--text-secondary);
        }

        .inv-summary-chip .chip-count {
            font-family: var(--font-display);
            font-weight: 800;
            color: var(--text-primary);
        }

        /* --- Analytics KPI Cards --- */
        .kpi-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 14px;
            margin-bottom: 24px;
        }

        .kpi-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 18px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .kpi-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-2);
        }

        .kpi-card .kpi-value {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: 28px;
            display: block;
            line-height: 1;
        }

        .kpi-card .kpi-label {
            font-size: 11px;
            color: var(--text-secondary);
            font-weight: 600;
            margin-top: 4px;
            display: block;
        }

        .kpi-card .kpi-trend {
            font-size: 10px;
            font-weight: 800;
            margin-top: 6px;
            display: inline-flex;
            align-items: center;
            gap: 3px;
            padding: 2px 8px;
            border-radius: 6px;
        }

        .kpi-trend.up {
            background: rgba(16, 185, 129, 0.1);
</style>
    <style>
            color: var(--success);
        }

        .kpi-trend.down {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger);
        }

        /* --- IoT Sensor Display --- */
        .sensor-display {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border-radius: var(--radius-sm);
            background: var(--surface-2);
            border: 1px solid var(--border);
        }

        .sensor-display .sensor-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .sensor-display .sensor-value {
            font-family: var(--font-display);
            font-weight: 800;
            font-size: 18px;
        }

        .sensor-display .sensor-label {
            font-size: 10.5px;
            color: var(--text-secondary);
        }

        /* --- Floating Help FAB --- */
        .floating-help-fab {
            position: fixed;
            bottom: 28px;
            right: 28px;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), #3B82F6);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.4);
            z-index: 900;
            transition: transform 0.2s, box-shadow 0.2s;
            border: none;
        }

        .floating-help-fab:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 28px rgba(var(--primary-rgb), 0.55);
        }

        .floating-help-fab:active {
            transform: scale(0.95);
        }

        @media (max-width: 768px) {
            .floating-help-fab {
                bottom: 110px;
                right: 16px;
                width: 46px;
                height: 46px;
                font-size: 18px;
            }
            .responsive-dashboard-grid {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            background: var(--surface-2);
        }

        /* Gauge progress ring */
        .gauge-ring-container {
            position: relative;
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gauge-svg {
            transform: rotate(-90deg);
            width: 80px;
            height: 80px;
        }

        .gauge-bg-circle {
            fill: none;
            stroke: var(--surface-2);
            stroke-width: 8px;
        }

        .gauge-fill-circle {
            fill: none;
            stroke: var(--primary);
            stroke-width: 8px;
            stroke-linecap: round;
            stroke-dasharray: 201;
            /* 2 * PI * 32 */
            stroke-dashoffset: 201;
            transition: stroke-dashoffset 0.8s ease-in-out;
        }

        .gauge-text {
            position: absolute;
            font-family: var(--font-display);
            font-weight: 800;
            font-size: 16px;
            color: var(--text-primary);
        }

        /* Buttons & Forms Components */
        .app-btn {
            font-family: var(--font-main);
            font-weight: 700;
            display: inline-flex;
            align-items: center;
</style>
    <style>
            justify-content: center;
            gap: 8px;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            outline: none;
        }

        .app-btn:active {
            transform: scale(0.97);
            opacity: 0.9;
        }

        .app-btn-primary {
            background: var(--primary);
            color: white;
        }

        .app-btn-primary:hover {
            background: var(--primary-hover);
        }

        .app-btn-secondary {
            background: var(--surface-2);
            color: var(--text-primary);
            border: 1.5px solid var(--border);
        }

        .app-btn-secondary:hover {
            background: var(--border);
        }

        .app-btn-danger {
            background: var(--danger);
            color: white;
        }

        .app-btn-ghost {
            background: transparent;
            color: var(--text-secondary);
        }

        .app-btn-ghost:hover {
            background: var(--surface-2);
            color: var(--text-primary);
        }

        .app-btn-lg {
            height: 48px;
            padding: 0 24px;
            border-radius: var(--radius-md);
            font-size: 15px;
        }

        .app-btn-md {
            height: 40px;
            padding: 0 16px;
            border-radius: var(--radius-sm);
            font-size: 13.5px;
        }

        .app-btn-sm {
            height: 32px;
            padding: 0 12px;
            border-radius: var(--radius-sm);
            font-size: 12px;
        }

        .app-badge {
            padding: 4px 10px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 800;
            display: inline-block;
        }

        .app-badge-danger {
            background: rgba(239, 68, 68, 0.12);
            color: var(--danger);
        }

        .app-badge-warning {
            background: rgba(245, 158, 11, 0.12);
            color: var(--accent);
        }

        .app-badge-success {
            background: rgba(16, 185, 129, 0.12);
            color: var(--success);
        }

        /* Inputs & Selectors */
        input,
        select {
            width: 100%;
            height: 44px;
            border-radius: var(--radius-sm);
            border: 1.5px solid var(--border);
            background: var(--surface);
            padding: 0 14px;
            color: var(--text-primary);
            font-family: var(--font-main);
            outline: none;
            transition: all 0.2s;
        }

        input:focus,
        select:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.15);
        }

        /* Swipable List Component */
        .swipe-item-wrapper {
            overflow: hidden;
            position: relative;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            margin-bottom: 12px;
        }

        .swipe-actions-under {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            z-index: 1;
        }
</style>
    <style>

        .under-delete-btn {
            background: var(--danger);
            color: white;
            height: 100%;
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
        }

        .under-checklist-btn {
            background: var(--success);
            color: white;
            height: 100%;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 12px;
            cursor: pointer;
        }

        /* --- Stat Summary Row --- */
        .stat-summary-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
        }

        .stat-mini-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 16px 18px;
            display: flex;
            align-items: center;
            gap: 14px;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-mini-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
        }

        .stat-mini-card .stat-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }

        .stat-mini-card .stat-value {
            font-family: var(--font-display);
            font-weight: 800;
            font-size: 22px;
            display: block;
            line-height: 1.1;
        }

        .stat-mini-card .stat-label {
            font-size: 11.5px;
            color: var(--text-secondary);
            font-weight: 600;
            display: block;
            margin-top: 2px;
        }

        /* --- Gradient Card Top Accent --- */
        .card-accent-green {
            border-top: 3px solid var(--primary) !important;
        }

        .card-accent-blue {
            border-top: 3px solid var(--info) !important;
        }

        .card-accent-amber {
            border-top: 3px solid var(--accent) !important;
        }

        .card-accent-red {
            border-top: 3px solid var(--danger) !important;
        }

        /* --- Premium Range Slider --- */
        input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 6px;
            background: var(--surface-2);
            outline: none;
            border: none;
            box-shadow: none;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.4);
            border: 3px solid var(--surface);
            transition: transform 0.15s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.15);
        }

        input[type="range"]::-webkit-slider-thumb:active {
            transform: scale(0.95);
        }

        /* --- Notification Bell --- */
        .notification-bell {
            position: relative;
            cursor: pointer;
            font-size: 20px;
</style>
    <style>
            color: var(--text-secondary);
            transition: color 0.2s;
        }

        .notification-bell:hover {
            color: var(--text-primary);
        }

        .notification-bell .bell-badge {
            position: absolute;
            top: -4px;
            right: -6px;
            min-width: 16px;
            height: 16px;
            border-radius: 99px;
            background: var(--danger);
            color: white;
            font-size: 9px;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 4px;
            border: 2px solid var(--surface);
            animation: bellPulse 2s infinite;
        }

        @keyframes bellPulse {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.15);
            }
        }

        /* --- Activity Timeline --- */
        .activity-timeline {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .timeline-item {
            display: flex;
            gap: 14px;
            padding: 12px 0;
            position: relative;
        }

        .timeline-item:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 15px;
            top: 38px;
            bottom: -2px;
            width: 2px;
            background: var(--border);
        }

        .timeline-dot {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            flex-shrink: 0;
            z-index: 2;
        }

        .timeline-item .timeline-text {
            font-size: 13px;
            color: var(--text-secondary);
            line-height: 18px;
        }

        .timeline-item .timeline-text strong {
            color: var(--text-primary);
        }

        .timeline-item .timeline-time {
            font-size: 10.5px;
            color: var(--text-secondary);
            opacity: 0.7;
            margin-top: 2px;
            display: block;
        }

        /* --- About/Version Card --- */
        .about-version-card {
            text-align: center;
            padding: 32px 24px;
        }

        .about-version-card .version-logo {
            width: 64px;
            height: 64px;
            border-radius: 16px;
            background: rgba(var(--primary-rgb), 0.1);

        .overlay-modal-card {
            background: var(--surface);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-3);
            width: 100%;
            max-width: 460px;
            padding: 24px;
            animation: modalAppear 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes modalAppear {
            from {
                transform: scale(0.9);
                opacity: 0;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        /* Confetti overlay canvas */
        #confetti-celebrate-canvas {
            position: fixed;
            top: 0;
            left: 0;
</style>
    <style>
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 99999;
        }

        /* Skeletal Loader Shimmers */
        .loader-shimmer-block {
            background: linear-gradient(90deg, var(--surface-2) 25%, var(--border) 50%, var(--surface-2) 75%);
            background-size: 200% 100%;
            animation: shimmerEffect 1.5s infinite;
        }

        @keyframes shimmerEffect {
            0% {
                background-position: 200% 0;
            }

            100% {
                background-position: -200% 0;
            }
        }

        /* Custom chips design system */
        .chip-button {
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            border: 1.5px solid var(--border);
            color: var(--text-secondary);
            background: var(--surface);
            transition: all 0.2s;
        }

        .chip-button.active-chip {
            border-color: var(--primary);
            background: rgba(var(--primary-rgb), 0.12);
            color: var(--primary);
        }

        /* ==========================================================================
           6. RESPONSIVE MEDIA QUERIES
           ========================================================================== */
        @media (max-width: 768px) {
            .sidebar-navigation {
                display: none;
            }

            .mobile-bottom-navbar {
                display: flex;
            }

            .brand-mobile-trigger {
                display: flex;
            }
        }

        /* ==========================================================================
           7. PREMIUM ENHANCEMENT SYSTEM — GLOBAL POLISH
           ========================================================================== */

        /* --- Sidebar Active Pill Indicator --- */
        .nav-menu-item.active {
            position: relative;
        }

        .nav-menu-item.active::before {
            content: '';
            position: absolute;
            left: -12px;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            border-radius: 0 6px 6px 0;
            background: var(--primary);
        }

        .nav-menu-item i {
            width: 20px;
            text-align: center;
            transition: transform 0.2s;
        }

        .nav-menu-item:hover i {
            transform: scale(1.15);
        }

        /* --- Section Header Decorator --- */
        .view-section-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 24px;
        }

        .view-section-header .section-icon-badge {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            flex-shrink: 0;
        }

        .view-section-header h2 {
            font-family: var(--font-display);
            font-size: 22px;
            font-weight: 900;
            margin: 0;
        }

        .view-section-header p {
            font-size: 12px;
            color: var(--text-secondary);
            margin: 2px 0 0 0;
        }

        /* --- Premium Welcome Banner --- */
        .welcome-banner {
            background: linear-gradient(135deg, #064E3B 0%, #0c7552 50%, #0D9488 100%);
            border-radius: var(--radius-lg);
            padding: 28px 32px;
            color: white;
            margin-bottom: 24px;
            position: relative;
            overflow: hidden;
        }

</style>
    <style>
        .welcome-banner::before {
            content: '';
            position: absolute;
            top: -40%;
            right: -10%;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%);
            filter: blur(40px);
        }

        .welcome-banner::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: 20%;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
            filter: blur(30px);
        }

        .welcome-banner h1 {
            font-family: var(--font-display);
            font-weight: 800;
            font-size: 24px;
            margin: 0 0 6px 0;
            position: relative;
            z-index: 2;
        }

        .welcome-banner p {
            font-size: 13.5px;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
            position: relative;
            z-index: 2;
        }

        .welcome-banner .banner-date {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.55);
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 14px auto;
            font-size: 28px;
            color: var(--primary);
        }

        .about-version-card .version-tag {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 6px;
            background: rgba(var(--primary-rgb), 0.1);
            color: var(--primary);
            font-size: 11px;
            font-weight: 800;
            margin-top: 8px;
        }

        /* --- Smooth scrollbar for premium feel --- */
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(var(--secondary-rgb), 0.2);
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(var(--secondary-rgb), 0.35);
        }

        /* --- Selection colors --- */
        ::selection {
            background: rgba(var(--primary-rgb), 0.25);
            color: var(--text-primary);
        }

        /* ==========================================================================
           8. WAVE 2 PREMIUM ENHANCEMENTS
           ========================================================================== */

        /* --- Sidebar Pro Badge --- */
        .sidebar-pro-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 9px;
            font-weight: 900;
            letter-spacing: 0.5px;
            background: linear-gradient(135deg, #F59E0B, #EF4444);
            color: white;
            text-transform: uppercase;
        }

        /* --- Online Status Dot --- */
        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 4px;
        }

        .status-dot.online {
            background: var(--success);
            box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
            animation: statusPulse 2s infinite;
        }

        @keyframes statusPulse {

            0%,
            100% {
                opacity: 1;
</style>
    <style>
            }

            50% {
                opacity: 0.5;
            }
        }

        /* --- Global Command Search (Wave 3) --- */
        .global-search-container {
            display: none;
            background: var(--surface-2);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 8px 16px;
            align-items: center;
            gap: 12px;
            width: 320px;
            cursor: pointer;
            transition: all 0.2s;
        }

        @media (min-width: 768px) {
            .global-search-container {
                display: flex;
            }
        }

        .global-search-container:hover {
            border-color: rgba(var(--primary-rgb), 0.4);
            box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
        }

        .search-shortcut-hint {
            margin-left: auto;
            display: flex;
            gap: 4px;
        }

        .search-shortcut-hint span {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 10px;
            font-weight: 800;
            color: var(--text-secondary);
        }

        /* --- Command Palette Modal (Wave 3) --- */
        .command-palette-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(8px);
            z-index: 99999;
            display: none;
            align-items: flex-start;
            justify-content: center;
            padding-top: 12vh;
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .command-palette-modal {
            width: 100%;
            max-width: 580px;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-3);
            overflow: hidden;
            transform: scale(0.96) translateY(-10px);
            transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .command-palette-overlay.active {
            display: flex;
            opacity: 1;
        }

        .command-palette-overlay.active .command-palette-modal {
            transform: scale(1) translateY(0);
        }

        .cmd-palette-header {
            padding: 20px;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .cmd-palette-header input {
            background: none;
            border: none;
            font-size: 18px;
            color: var(--text-primary);
            width: 100%;
            outline: none;
            font-family: var(--font-main);
        }

        .cmd-palette-body {
            padding: 12px;
            max-height: 400px;
            overflow-y: auto;
        }

        .cmd-section-title {
            font-size: 11px;
            font-weight: 800;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin: 12px 0 8px 12px;
        }

        .cmd-option {
            padding: 12px 16px;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: background 0.15s;
            font-size: 13.5px;
                z-index: 1;
            }

            .auth-right-glow-bubble {
</style>
    <style>
                position: absolute;
                bottom: -15%;
                left: -15%;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, transparent 70%);
                filter: blur(50px);
                z-index: 1;
                pointer-events: none;
            }

            .auth-right-content-frame {
                display: flex !important;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 80px 100px;
                background: #0f172a;
                /* Sleek, premium dark slate canvas */
                position: relative;
                overflow-y: auto;
                border-left: 1px solid rgba(255, 255, 255, 0.05);
            }

            /* High-contrast premium typography rules for widescreen dark pane */
            .auth-right-content-frame h2,
            .auth-right-content-frame h3 {
                color: #FFFFFF !important;
            }

            .auth-right-content-frame p {
                color: #94A3B8 !important;
            }

            .auth-right-content-frame label {
                color: #94A3B8 !important;
            }

            .auth-right-content-frame input {
                background: #1e293b !important;
                border-color: #334155 !important;
                color: #FFFFFF !important;
            }

            .auth-right-content-frame input:focus {
                border-color: var(--primary) !important;
                box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.25) !important;
            }

            .auth-right-content-frame .dot-indicator {
                background: rgba(255, 255, 255, 0.15) !important;
            }

            .auth-right-content-frame .dot-indicator.active {
                background: var(--primary) !important;
            }

            .auth-slider-stage {
                width: 100%;
                max-width: 380px;
                margin: 0 auto;
                z-index: 10;
            }
        }

        .auth-slider-stage {
            display: none;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 22px;
            animation: slideInAuth 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15);
        }

        .auth-slider-stage.active-stage {
            display: flex;
        }

        @keyframes slideInAuth {
            from {
                opacity: 0;
                transform: translateX(30px);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Floating icons wraps in onboarding */
        .auth-icon-wrapper {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: rgba(var(--primary-rgb), 0.08);
            border: 1.5px dashed rgba(var(--primary-rgb), 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;
            animation: onboardingIconFloat 3s infinite ease-in-out;
        }

        @keyframes onboardingIconFloat {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-6px);
            }
        }

        .dots-group {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 6px;
        }

        .dot-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--border);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dot-indicator.active {
</style>
    <style>
            background: var(--primary);
            width: 22px;
            border-radius: 10px;
        }

        /* Pin OTP boxes */
        .otp-inputs-row {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 12px 0;
        }

        .otp-box {
            width: 44px;
            height: 48px;
            text-align: center;
            font-size: 20px;
            font-weight: 800;
            border-radius: var(--radius-sm);
            border: 1.5px solid var(--border);
            background: var(--surface-2);
            color: var(--text-primary);
        }

        .otp-box:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.15);
        }

        /* ==========================================================================
           4. MAIN LAYOUT AND NAVIGATION SYSTEMS
           ========================================================================== */
        .application-layout {
            display: flex;
            flex: 1;
            min-height: 100vh;
            position: relative;
        }

        /* Desktop Left Sidebar */
        .sidebar-navigation {
            width: 280px;
            background: var(--surface);
            border-right: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            position: sticky;
            top: 0;
            height: 100vh;
            z-index: 100;
            box-shadow: var(--shadow-1);
            transition: all 0.3s;
        }

        .sidebar-brand-box {
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid var(--border);
        }

        .brand-text-display {
            font-family: var(--font-display);
            font-weight: 900;
            font-size: 22px;
            background: linear-gradient(135deg, var(--primary), #3B82F6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .sidebar-nav-menu {
            flex: 1;
            margin-left: auto;
        }

        .swipe-item-foreground {
            background: var(--surface);
            position: relative;
            z-index: 2;
            padding: 16px;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            display: flex;
            align-items: center;
            gap: 16px;
        }

        /* Toggle Switches */
        .switch-ds-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
        }

        .toggle-switch-ds {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 26px;
        }

        .toggle-switch-ds input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider-switch-bg {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--border);
            transition: 0.3s;
            border-radius: 34px;
        }

        .slider-switch-bg:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
        }
</style>
    <style>

        input:checked+.slider-switch-bg {
            background-color: var(--primary);
        }

        input:checked+.slider-switch-bg:before {
            transform: translateX(22px);
        }

        /* Steppers */
        .value-stepper {
            display: flex;
            align-items: center;
            background: var(--surface-2);
            border-radius: 8px;
            overflow: hidden;
            width: fit-content;
        }

        .stepper-action {
            background: none;
            border: none;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-primary);
        }

        .stepper-display {
            width: 32px;
            text-align: center;
            font-weight: 800;
            font-size: 13.5px;
        }

        /* Visual calendar grids */
        .grid-calendar-expiry {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 6px;
            text-align: center;
        }

        .calendar-cell-block {
            aspect-ratio: 1;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
            background: var(--surface-2);
            color: var(--text-secondary);
            cursor: pointer;
            position: relative;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .calendar-cell-block:hover {
            transform: translateY(-2px) scale(1.06);
            background: var(--border);
            color: var(--text-primary);
            box-shadow: var(--shadow-2);
            z-index: 5;
        }

        .calendar-cell-block.cell-warning {
            background: rgba(245, 158, 11, 0.15);
            color: var(--accent);
        }

        .calendar-cell-block.cell-warning::after {
            content: '';
            position: absolute;
            bottom: 4px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 4px var(--accent);
        }

        .calendar-cell-block.cell-danger {
            background: rgba(239, 68, 68, 0.15);
            color: var(--danger);
        }

        .calendar-cell-block.cell-danger::after {
            content: '';
            position: absolute;
            bottom: 4px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--danger);
            box-shadow: 0 0 4px var(--danger);
        }

        .calendar-cell-block.cell-selected {
            border: 2px solid var(--primary);
            transform: scale(1.05);
            box-shadow: var(--shadow-2);
        }

        /* Floating action buttons & notifications */
        .toast-popup {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--surface);
            color: var(--text-primary);
            border-left: 4px solid var(--primary);
            border-radius: var(--radius-sm);
            box-shadow: var(--shadow-3);
            padding: 16px;
            display: none;
            /* controlled by JS */
            align-items: center;
            gap: 12px;
            z-index: 9999;
            animation: toastPopIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes toastPopIn {
            from {
                transform: translateY(20px);
                opacity: 0;
            }

            to {
</style>
    <style>
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Overlay Modals */
        .hub-overlay-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(4px);
            z-index: 1500;
            display: none;
            /* controlled by JS */
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
            padding: 20px 12px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            overflow-y: auto;
        }

        .nav-menu-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 12px 16px;
            border-radius: var(--radius-md);
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 14.5px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .nav-menu-item:hover {
            background: var(--surface-2);
            color: var(--text-primary);
        }

        .nav-menu-item.active {
            background: rgba(var(--primary-rgb), 0.12);
            color: var(--primary);
        }

        .sidebar-nav-footer {
            padding: 20px;
            border-top: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        /* Main Workspace Hub */
        .workspace-hub {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow-y: auto;
            position: relative;
            padding-bottom: 90px;
            /* space for mobile navbar bottom safe */
        }

        /* Top Header */
        .hub-header {
            background: var(--surface);
            border-bottom: 1px solid var(--border);
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 90;
            box-shadow: var(--shadow-1);
        }

        .header-left-side {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .brand-mobile-trigger {
            display: none;
            align-items: center;
            gap: 8px;
        }

        .header-right-side {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        /* Mobile Glassmorphic Bottom Navigation Bar */
        .mobile-bottom-navbar {
            display: none;
            /* activated < 768px */
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 76px;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: 1px solid var(--border);
            z-index: 1000;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 12px;
            box-shadow: var(--shadow-glass);
        }

        .mobile-nav-btn {
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            color: var(--text-secondary);
            font-size: 10px;
            font-weight: 700;
</style>
    <style>
            cursor: pointer;
            width: 60px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-btn i {
            font-size: 20px;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s, filter 0.3s;
        }

        .mobile-nav-btn.active {
            color: var(--primary);
        }

        .mobile-nav-btn.active i {
            transform: translateY(-4px) scale(1.18);
            color: var(--primary);
            filter: drop-shadow(0 0 6px rgba(var(--primary-rgb), 0.6));
        }

        .mobile-barcode-fab {
            width: 56px;
            height: 56px;
            border-radius: var(--radius-full);
            background: var(--primary);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            box-shadow: var(--shadow-3);
            border: 4px solid var(--surface);
            transform: translateY(-20px);
            cursor: pointer;
            transition: all 0.2s;
        }

        .mobile-barcode-fab:active {
            transform: translateY(-20px) scale(0.9);
        }

        /* ==========================================================================
           5. SHARED APP DISPLAY MODULE VIEWS
           ========================================================================== */
        .app-view-panel {
            padding: 24px;
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            display: none;
            animation: panelFadeIn 0.3s ease-in-out;
        }

        .app-view-panel.active-panel {
            display: block;
        }

        @keyframes panelFadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Grids & Cards Components */
        .responsive-dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 24px;
        }

        .app-premium-card {
            background: var(--surface);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            padding: 20px;
            box-shadow: var(--shadow-1);
            display: flex;
            flex-direction: column;
            gap: 14px;
            transition: transform 0.2s, box-shadow 0.2s;
            position: relative;
            overflow: hidden;
        }

        .app-premium-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
        }

        .card-header-icon {
            width: 48px;
            height: 48px;
            border-radius: var(--radius-md);
                grid-template-columns: 1fr;
            }
            .app-premium-card {
                grid-column: 1 / -1 !important;
            }
        }

        /* --- Shopping Completion Progress --- */
        .shopping-progress-banner {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 20px;
            border-radius: var(--radius-md);
            background: var(--surface);
            border: 1px solid var(--border);
            margin-bottom: 20px;
        }

        .progress-ring-mini {
            position: relative;
            width: 52px;
            height: 52px;
            flex-shrink: 0;
        }

        .progress-ring-mini svg {
            transform: rotate(-90deg);
            width: 52px;
            height: 52px;
        }

        .progress-ring-mini .ring-text {
</style>
    <style>
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-display);
            font-weight: 800;
            font-size: 12px;
        }

        /* Vocal Soundwave Voice Visualizer for Chatbot */
        .voicewave-container {
            display: inline-flex;
            align-items: center;
            gap: 3px;
            height: 18px;
            margin-left: 8px;
        }

        .voicewave-bar {
            width: 2.5px;
            height: 4px;
            background: var(--primary);
            border-radius: 4px;
            animation: voiceWavePulse 1s infinite ease-in-out;
        }

        .voicewave-bar:nth-child(2) {
            animation-delay: 0.15s;
            height: 12px;
        }

        .voicewave-bar:nth-child(3) {
            animation-delay: 0.3s;
            height: 8px;
        }

        .voicewave-bar:nth-child(4) {
            animation-delay: 0.45s;
            height: 15px;
        }

        .voicewave-bar:nth-child(5) {
            animation-delay: 0.6s;
            height: 5px;
        }

        @keyframes voiceWavePulse {

            0%,
            100% {
                transform: scaleY(1);
            }

            50% {
                transform: scaleY(2.2);
            }
        }

        /* Premium Pulsing Core Glow */
        .pulse-active-glow {
            box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.5);
            animation: activeGlowPulse 2s infinite;
        }

        @keyframes activeGlowPulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4);
            }

            70% {
                transform: scale(1.02);
                box-shadow: 0 0 0 8px rgba(var(--primary-rgb), 0);
            }

            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
            }
        }

        /* GORGEOUS PREMIUM SPLASH SCREEN OVERLAY */
        .splash-screen-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #0F172A;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease, visibility 0.5s;
        }

        .splash-content-box {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

        .splash-logo-circle {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            background: rgba(16, 185, 129, 0.08);
            border: 1px solid rgba(16, 185, 129, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.15);
            animation: splashLogoGlow 2s infinite ease-in-out;
        }

        .splash-logo-icon {
            font-size: 44px;
            color: #10B981;
            animation: splashLogoPulse 2s infinite ease-in-out;
        }

        .splash-brand-title {
            font-family: var(--font-display);
            font-size: 32px;
            font-weight: 900;
            color: #F1F5F9;
            letter-spacing: -0.5px;
            margin: 0;
        }

        .splash-tagline {
</style>
    <style>
            font-size: 13px;
            color: #94A3B8;
            margin: 0;
            font-weight: 600;
        }

        .splash-progress-track {
            width: 180px;
            height: 4px;
            background: #1E293B;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 10px;
        }

        .splash-progress-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #10B981, #3B82F6);
            transition: width 0.1s ease;
        }

        @keyframes splashLogoPulse {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.15);
            }
        }

        @keyframes splashLogoGlow {

            0%,
            100% {
                box-shadow: 0 0 30px rgba(16, 185, 129, 0.15);
            }

            50% {
                box-shadow: 0 0 50px rgba(16, 185, 129, 0.35);
            }
        }
/* ==========================================================================
           1. DESIGN SYSTEM TOKENS (LIGHT & DARK THEMES)
           ========================================================================== */
        :root {
            --primary: #10B981;
            --primary-rgb: 16, 185, 129;
            --primary-hover: #0D9668;
            --secondary: #1E293B;
            --secondary-rgb: 30, 41, 59;
            --accent: #F59E0B;
            --accent-rgb: 245, 158, 11;

            --bg-main: #F8FAFC;
            --surface: #FFFFFF;
            --surface-2: #F1F5F9;
            --border: #E2E8F0;

            --text-primary: #0F172A;
            --text-secondary: #475569;

            /* Status Colors */
            --success: #10B981;
            --warning: #F59E0B;
            --danger: #EF4444;
            --info: #3B82F6;

            /* Elevation & Shadows */
            --shadow-1: 0px 2px 4px rgba(0, 0, 0, 0.04);
            --shadow-2: 0px 4px 12px rgba(0, 0, 0, 0.08);
            --shadow-3: 0px 8px 24px rgba(0, 0, 0, 0.12);
            --shadow-glass: 0px 8px 20px rgba(0, 0, 0, 0.05);
            --glass-bg: rgba(255, 255, 255, 0.7);

            /* Border Radii */
            --radius-sm: 12px;
            --radius-md: 16px;
            --radius-lg: 24px;
            --radius-full: 999px;

            --font-main: 'Inter', sans-serif;
            --font-display: 'Outfit', sans-serif;
        }

        body.dark {
            --primary: #34D399;
            --primary-rgb: 52, 211, 153;
            --primary-hover: #10B981;
            --secondary: #334155;
            --secondary-rgb: 51, 65, 85;
            --accent: #FBBF24;
            --accent-rgb: 251, 191, 36;

            --bg-main: #0F172A;
            --surface: #1E293B;
            --surface-2: #334155;
            --border: #334155;

            --text-primary: #F1F5F9;
            --text-secondary: #94A3B8;

            --success: #34D399;
            --warning: #FBBF24;
            --danger: #F87171;
            --info: #60A5FA;

            --shadow-1: 0px 2px 8px rgba(0, 0, 0, 0.4);
            --shadow-2: 0px 4px 16px rgba(0, 0, 0, 0.6);
            --shadow-3: 0px 8px 32px rgba(0, 0, 0, 0.8);
            --shadow-glass: 0px 8px 24px rgba(0, 0, 0, 0.3);
            --glass-bg: rgba(30, 41, 59, 0.75);
        }

        /* ==========================================================================
           2. UNIVERSAL RESET & WRAPPER STYLES
           ========================================================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: var(--font-main);
            background: var(--bg-main);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
</style>
    <style>
            flex-direction: column;
            overflow-x: hidden;
            transition: background 0.3s, color 0.3s;
        }

        a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 700;
        }

        /* Custom scrollbars */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--surface-2);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
        }

        /* ==========================================================================
           3. ONBOARDING & AUTHENTICATION OVERLAY
           ========================================================================== */
        .auth-view-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg-main);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .auth-card-frame {
            background: var(--surface);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-3);
            width: 100%;
            max-width: 420px;
            padding: 40px 32px 32px 32px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .auth-card-frame::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, var(--primary), #3B82F6);
            z-index: 10;
        }

        /* GORGEOUS WIDESCREEN DESKTOP SPLIT LAYOUT STYLES */
        .auth-desktop-brand-hero {
            display: none;
        }

        .auth-right-content-frame {
            display: contents;
            /* fallback matches normal flow on mobile */
        }

        @media (min-width: 992px) {
            .auth-view-overlay {
                padding: 0;
                background: #0F172A;
            }

            .auth-card-frame {
                max-width: 100vw;
                width: 100vw;
                height: 100vh;
                border-radius: 0;
                border: none;
                display: grid !important;
                grid-template-columns: 1.25fr 1fr;
                padding: 0;
                box-shadow: none;
                gap: 0 !important;
                background: #0f172a;
            }

            .auth-card-frame::before {
                display: none;
                /* remove small accent stripe on full screen */
            }

            .auth-desktop-brand-hero {
                display: flex !important;
                flex-direction: column;
                justify-content: center;
                background: linear-gradient(135deg, #0b1528 0%, #0c7552 100%);
                padding: 80px 100px;
                position: relative;
                overflow: hidden;
                border-right: 1px solid rgba(255, 255, 255, 0.08);
            }

            .auth-hero-glow-bubble {
                position: absolute;
                top: -20%;
                right: -20%;
                width: 500px;
                height: 500px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%);
                filter: blur(50px);

</style>

    <!-- Google Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    

    <!-- Premium Data Visualizations Engine -->
    

    
    
    
    
    
    
    
    
    
    
    

    <!-- Supabase SDK (defer so it doesn't block page load) -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2" defer></script>
</head>

<body style="overflow: hidden;">

    <!-- GORGEOUS PREMIUM SPLASH SCREEN OVERLAY -->
    <div id="appSplashScreenOverlay" class="splash-screen-overlay">
        <div class="splash-content-box">
            <div class="splash-logo-circle">
                <i class="fa-solid fa-leaf splash-logo-icon"></i>
            </div>
            <h1 class="splash-brand-title">PantryWise</h1>
            <p class="splash-tagline">Initializing Smart Inventory OS...</p>

            <div class="splash-progress-track">
                <div id="splashProgressIndicator" class="splash-progress-bar"></div>
            </div>
        </div>
    </div>

    <canvas id="confetti-celebrate-canvas"></canvas>

    <!-- Success and warnings Toast popups -->
    <div class="toast-popup" id="systemToast">
        <i class="fa-solid fa-circle-check" style="color:var(--primary); font-size:20px;"></i>
        <div>
            <strong id="toastTitle" style="font-size:13.5px; display:block;">Action Success</strong>
            <span id="toastDesc" style="font-size:11px; color:var(--text-secondary);">State synched successfully.</span>
        </div>
    </div>

    <!-- ==========================================================================
       COMMAND PALETTE OVERLAY (WAVE 3 ENTERPRISE)
       ========================================================================== -->
    <div class="command-palette-overlay" id="commandPaletteOverlay" onclick="closeCommandPalette(event)">
        <div class="command-palette-modal" onclick="event.stopPropagation()">
            <div class="cmd-palette-header">
                <i class="fa-solid fa-magnifying-glass" style="color:var(--primary); font-size:18px;"></i>
                <input type="text" id="cmdPaletteInput" placeholder="What do you need?"
                    onkeyup="executeCommandSearch(event)">
                <div class="cmd-badge">ESC</div>
            </div>
            <div class="cmd-palette-body">
                <div class="cmd-section-title">Quick Actions</div>
                <div class="cmd-option" onclick="routeToView('pantry'); closeCommandPalette();">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid fa-box-open" style="color:var(--text-secondary); font-size:16px;"></i>
                        <span>View Pantry Inventory</span>
                    </div>
                    <div class="cmd-badge">G</div>
                </div>
                <div class="cmd-option" onclick="routeToView('shopping'); closeCommandPalette();">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid fa-basket-shopping" style="color:var(--text-secondary); font-size:16px;"></i>
                        <span>Open Shopping List</span>
                    </div>
                    <div class="cmd-badge">S</div>
                </div>
                <div class="cmd-option" onclick="openAddPantryItemModal(); closeCommandPalette();">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid fa-plus" style="color:var(--primary); font-size:16px;"></i>
                        <span>Add New Product</span>
                    </div>
                    <div class="cmd-badge">N</div>
                </div>

                <div class="cmd-section-title" style="margin-top:16px;">AI Assistant</div>
                <div class="cmd-option"
                    onclick="routeToView('settings'); closeCommandPalette(); document.getElementById('pantryBotCmdInput').focus();">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fa-solid fa-wand-magic-sparkles" style="color:var(--accent); font-size:16px;"></i>
                        <span>Ask PantryBot AI...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       AUTHENTICATION FLOW (ONBOARDING, LOGIN, OTP SLIDES OVERLAY)
       ========================================================================== -->
    <section class="auth-view-overlay" id="appAuthView">
        <div class="auth-card-frame">

            <!-- Sleek Desktop Left-side Branding Showcase Hero Column -->
            <div class="auth-desktop-brand-hero">
                <div class="auth-hero-glow-bubble"></div>
                <div
                    style="z-index:10; display:flex; flex-direction:column; gap:24px; max-width:460px; text-align:left;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div
                            style="width:48px; height:48px; border-radius:12px; background:rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.18);">
                            <i class="fa-solid fa-leaf" style="font-size:22px; color:#34D399;"></i>
                        </div>
                        <span
                            style="font-family:var(--font-display); font-weight:900; font-size:26px; color:#FFFFFF; letter-spacing:-0.5px;">PantryWise
                            OS</span>
                    </div>

                    <div style="margin-top:20px;">
                        <h1
                            style="font-family:var(--font-display); font-weight:800; font-size:38px; color:#FFFFFF; line-height:48px; margin:0; letter-spacing:-0.5px;">
                            The smartest way to govern your household storage.
                        </h1>
                        <p style="color:rgba(241, 245, 249, 0.75); font-size:15px; line-height:24px; margin-top:16px;">
                            Seamlessly coordinate real-time grocery expiries, auto-build predictive family checklists,
                            and optimize sustainability with intelligent analytics.
                        </p>
                    </div>

                    <!-- AI predictive feature highlight snippet badge -->
                    <div
                        style="margin-top:24px; padding:18px; border-radius:16px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); display:flex; align-items:center; gap:16px; box-shadow:var(--shadow-1);">
                        <div
                            style="width:40px; height:40px; border-radius:50%; background:rgba(251, 191, 36, 0.15); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                            <i class="fa-solid fa-wand-magic-sparkles" style="font-size:18px; color:#FBBF24;"></i>
                        </div>
                        <div>
                            <strong style="color:#FFFFFF; font-size:13.5px; display:block; font-weight:700;">PantryBot
                                Predictive Agent</strong>
                            <span
                                style="color:rgba(241, 245, 249, 0.6); font-size:11.5px; display:block; margin-top:2px;">Assigned
                                metrics scanning. Expiry predictions calibrated.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dynamic Right-side Content Frame for authStages -->
            <div class="auth-right-content-frame">
                <div class="auth-right-glow-bubble"></div>

                <!-- Onboarding Stage 1 (Screen 2) -->
                <div class="auth-slider-stage active-stage" id="authStage-1">
                    <div class="auth-icon-wrapper">
                        <i class="fa-solid fa-basket-shopping" style="font-size:38px; color:var(--primary);"></i>
                    </div>
                    <h2 style="font-family:var(--font-display); font-weight:800; font-size:24px;">Track Everything</h2>
                    <p style="color:var(--text-secondary); font-size:14px; line-height:22px;">Manage food, fridge
                        layers, storage categories, and item volumes effortlessly in unified databases.</p>
                    <button class="app-btn app-btn-primary app-btn-lg" style="width:100%;"
                        onclick="navigateAuthStage(2)">Next Slide</button>
                    <div class="dots-group">
                        <span class="dot-indicator active"></span>
                        <span class="dot-indicator"></span>
                        <span class="dot-indicator"></span>
                    </div>
                </div>

                <!-- Onboarding Stage 2 (Screen 3) -->
                <div class="auth-slider-stage" id="authStage-2">
                    <div class="auth-icon-wrapper"
                        style="background:rgba(var(--accent-rgb), 0.08); border-color:rgba(var(--accent-rgb), 0.35);">
                        <i class="fa-solid fa-calendar-xmark" style="font-size:38px; color:var(--accent);"></i>
                    </div>
                    <h2 style="font-family:var(--font-display); font-weight:800; font-size:24px;">Zero Food Waste</h2>
                    <p style="color:var(--text-secondary); font-size:14px; line-height:22px;">Receive real-time
                        notifications on impending product expiries. Cook recipes matched with what you own.</p>
                    <button class="app-btn app-btn-primary app-btn-lg" style="width:100%;"
                        onclick="navigateAuthStage(3)">Next Slide</button>
                    <div class="dots-group">
                        <span class="dot-indicator"></span>
                        <span class="dot-indicator active"></span>
                        <span class="dot-indicator"></span>
                    </div>
                </div>

                <!-- Onboarding Stage 3 (Screen 4) -->
                <div class="auth-slider-stage" id="authStage-3">
                    <div class="auth-icon-wrapper"
                        style="background:rgba(59, 130, 246, 0.08); border-color:rgba(59, 130, 246, 0.35);">
                        <i class="fa-solid fa-people-roof" style="font-size:38px; color:var(--info);"></i>
                    </div>
                    <h2 style="font-family:var(--font-display); font-weight:800; font-size:24px;">Family Sync Hub</h2>
                    <p style="color:var(--text-secondary); font-size:14px; line-height:22px;">Sync shopping lists and
                        checklist completions in real-time across family member profiles.</p>
                    <button class="app-btn app-btn-primary app-btn-lg" style="width:100%;"
                        onclick="navigateAuthStage(4)">Let's Cook</button>
                    <div class="dots-group">
                        <span class="dot-indicator"></span>
                        <span class="dot-indicator"></span>
                        <span class="dot-indicator active"></span>
                    </div>
                </div>

                <!-- Welcome Screen (Screen 5) -->
                <div class="auth-slider-stage" id="authStage-4">
                    <div class="auth-icon-wrapper">
                        <i class="fa-solid fa-leaf" style="font-size:38px; color:var(--primary);"></i>
                    </div>
                    <h2 style="font-family:var(--font-display); font-weight:900; font-size:26px;">PantryWise OS</h2>
                    <p style="color:var(--text-secondary); font-size:13px;">Enterprise Smart Household Storage
                        Management</p>

                    <div style="width:100%; display:flex; flex-direction:column; gap:12px; margin-top:20px;">
                        <button class="app-btn app-btn-primary app-btn-lg" style="width:100%;"
                            onclick="navigateAuthStage(5)">Sign In</button>
                        <button class="app-btn app-btn-secondary app-btn-lg" style="width:100%;"
                            onclick="navigateAuthStage(6)">Create Account</button>
                    </div>
                </div>

                <!-- Login Screen (Screen 6) -->
                <div class="auth-slider-stage" id="authStage-5" style="align-items:stretch; text-align:left;">
                    <h3 style="font-family:var(--font-display); font-size:20px; font-weight:800; text-align:center;">
                        Welcome Back</h3>
                    <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
                        <div>
                            <label
                                style="font-size:11px; font-weight:700; color:var(--text-secondary); display:block; margin-bottom:4px;">Email</label>
                            <input type="email" id="loginEmailInput" placeholder="Enter your email...">
                        </div>
                        <div>
                            <label
                                style="font-size:11px; font-weight:700; color:var(--text-secondary); display:block; margin-bottom:4px;">Password</label>
                            <input type="password" id="loginPassInput" placeholder="••••••••••••">
                        </div>
                    </div>
                    <div
                        style="display:flex; justify-content:space-between; font-size:11px; font-weight:700; margin-top:8px;">
                        <span style="color:var(--primary); cursor:pointer;" onclick="navigateAuthStage(8)">Forgot
                            Password?</span>
                        <span style="color:var(--text-secondary); cursor:pointer;"
                            onclick="triggerBiometricBypass()">FaceID Biometrics</span>
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="margin-top:20px;"
                        onclick="completeAppLogin()">Sign In</button>
                </div>

                <!-- Sign Up Screen (Screen 7) -->
                <div class="auth-slider-stage" id="authStage-6" style="align-items:stretch; text-align:left;">
                    <h3 style="font-family:var(--font-display); font-size:20px; font-weight:800; text-align:center;">
                        Create Household</h3>
                    <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
                        <div>
                            <label style="font-size:11px; font-weight:700; display:block; margin-bottom:4px;">Admin
                                Name</label>
                            <input type="text" id="signupName" placeholder="e.g., Harish">
                        </div>
                        <div>
                            <label style="font-size:11px; font-weight:700; display:block; margin-bottom:4px;">Email
                                Address</label>
                            <input type="email" id="signupEmail" placeholder="name@domain.com">
                        </div>
                        <div>
                            <label
                                style="font-size:11px; font-weight:700; display:block; margin-bottom:4px;">Password</label>
                            <input type="password" id="signupPass" placeholder="••••••••••••">
                        </div>
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="margin-top:20px;"
                        onclick="completeAppSignup()">Create Account</button>
                </div>

                <!-- OTP Verification Screen (Screen 8) -->
                <div class="auth-slider-stage" id="authStage-7">
                    <h3 style="font-family:var(--font-display); font-weight:800;">Verify OTP Pin</h3>
                    <p style="color:var(--text-secondary); font-size:12px;">Sent to your registered email logs</p>
                    <div class="otp-inputs-row">
                        <input type="text" class="otp-box" value="4" maxlength="1">
                        <input type="text" class="otp-box" value="8" maxlength="1">
                        <input type="text" class="otp-box" value="9" maxlength="1">
                        <input type="text" class="otp-box" value="2" maxlength="1">
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="width:100%; margin-top:20px;"
                        onclick="completeAppLogin()">Complete Registration</button>
                </div>

                <!-- Forgot Password Screen (Screen 9) -->
                <div class="auth-slider-stage" id="authStage-8" style="align-items:stretch; text-align:left;">
                    <h3 style="text-align:center;">Recover Credentials</h3>
                    <div style="margin-top:10px;">
                        <label style="font-size:11px; font-weight:700; display:block; margin-bottom:4px;">Registered
                            Email</label>
                        <input type="email" value="" placeholder="Enter your email" id="recoverEmailInput">
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="margin-top:20px;"
                        onclick="sendPasswordResetEmail()">Dispatch Reset Token</button>
                </div>

                <!-- Reset Password Screen (Screen 10) -->
                <div class="auth-slider-stage" id="authStage-9" style="align-items:stretch; text-align:left;">
                    <h3>Assign New Passcode</h3>
                    <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
                        <div>
                            <label style="font-size:11px; font-weight:700; display:block; margin-bottom:4px;">New
                                Password</label>
                            <input type="password" placeholder="••••••••••••" id="newPasscodeInput">
                        </div>
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="margin-top:20px;"
                        onclick="saveNewPassword()">Save and Sign In</button>
                </div>

                <!-- Reset Password OTP Screen -->
                <div class="auth-slider-stage" id="authStage-10">
                    <h3 style="font-family:var(--font-display); font-weight:800;">Verify Reset OTP</h3>
                    <p style="color:var(--text-secondary); font-size:12px;">Sent to your email</p>
                    <div style="margin-top:10px;">
                        <input type="text" placeholder="Enter OTP (e.g. 1234)" id="resetOtpInput"
                            style="text-align:center; letter-spacing:4px; font-weight:bold; width:100%; height:48px; border-radius:var(--radius-sm); border:1px solid var(--border);">
                    </div>
                    <button class="app-btn app-btn-primary app-btn-lg" style="width:100%; margin-top:20px;"
                        onclick="verifyResetOTP()">Verify Code</button>
                </div>

            </div>

        </div>
    </section>

    <!-- ==========================================================================
       MAIN SYSTEM APPLICATION LAYOUT
       ========================================================================== -->
    <div class="application-layout">

        <!-- DESKTOP LEFT SIDEBAR NAVIGATION -->
        <aside class="sidebar-navigation">
            <div class="sidebar-brand-box">
                <i class="fa-solid fa-leaf" style="font-size:26px; color:var(--primary);"></i>
                <span class="brand-text-display">PantryWise</span>
                <span class="sidebar-pro-badge">PRO</span>
            </div>

            <nav class="sidebar-nav-menu">
                <div class="nav-menu-item active" id="deskNav-dashboard" onclick="routeToView('dashboard')">
                    <i class="fa-solid fa-house"></i> <span>Dashboard Home</span>
                </div>
                <div class="nav-menu-item" id="deskNav-pantry" onclick="routeToView('pantry')">
                    <i class="fa-solid fa-boxes-stacked"></i> <span>Smart Pantry</span>
                </div>
                <div class="nav-menu-item" id="deskNav-shopping" onclick="routeToView('shopping')">
                    <i class="fa-solid fa-basket-shopping"></i> <span>Shopping List</span>
                </div>
                <div class="nav-menu-item" id="deskNav-analytics" onclick="routeToView('analytics')">
                    <i class="fa-solid fa-chart-pie"></i> <span>Insights Panel</span>
                </div>
                <div class="nav-menu-item" id="deskNav-fridge" onclick="routeToView('fridge')">
                    <i class="fa-solid fa-temperature-empty"></i> <span>Connected IoT Fridge</span>
                </div>
                <div class="nav-menu-item" id="deskNav-family" onclick="routeToView('family')">
                    <i class="fa-solid fa-people-roof"></i> <span>Family Sync Hub</span>
                </div>
                <div class="nav-menu-item" id="deskNav-settings" onclick="routeToView('settings')">
                    <i class="fa-solid fa-gears"></i> <span>System Settings</span>
                </div>
                <div class="nav-menu-item" style="color:var(--danger); margin-top:auto; font-weight:700;"
                    onclick="performSystemLogout()">
                    <i class="fa-solid fa-right-from-bracket"></i> <span>Sign Out</span>
                </div>
            </nav>

            <div class="sidebar-nav-footer">
                <div
                    style="font-size:22px; width:38px; height:38px; border-radius:50%; background:var(--surface-2); display:flex; align-items:center; justify-content:center; position:relative;">
                    👩‍🍳
                    <span class="status-dot online"
                        style="position:absolute; bottom:0; right:-2px; border:2px solid var(--surface);"></span>
                </div>
                <div>
                    <strong style="font-size:13px; display:block;" id="currentUserLabel">Sarah Johnson</strong>
                    <span style="font-size:10.5px; color:var(--text-secondary);"><span
                            class="status-dot online"></span>Online · Admin</span>
                </div>
            </div>
        </aside>

        <!-- UNIVERSAL WORKSPACE HUB VIEWPORT -->
        <main class="workspace-hub">

            <!-- HEADER -->
            <header class="hub-header">
                <div class="header-left-side">
                    <div class="brand-mobile-trigger">
                        <i class="fa-solid fa-leaf" style="font-size:22px; color:var(--primary);"></i>
                        <strong style="font-family:var(--font-display); font-size:18px;">PantryWise</strong>
                    </div>

                    <!-- Global Command Search Bar (Wave 3) -->
                    <div class="global-search-container" onclick="openCommandPalette()">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <span style="color:var(--text-secondary); font-size:13px; font-weight:600;">Search inventory,
                            recipes, or ask AI...</span>
                        <div class="search-shortcut-hint">
                            <span>⌘</span><span>K</span>
                        </div>
                    </div>
                </div>
                <div class="header-right-side">
                    <div class="notification-bell"
                        onclick="showSystemToast('Notifications', '2 items expiring soon · 1 checklist update')">
                        <i class="fa-solid fa-bell"></i>
                        <span class="bell-badge">2</span>
                    </div>
                    <button class="app-btn app-btn-secondary app-btn-sm" onclick="toggleGlobalAppearanceTheme()"><i
                            class="fa-solid fa-circle-half-stroke"></i></button>
                    <button class="app-btn app-btn-secondary app-btn-sm"
                        style="color:var(--danger); border-color:rgba(239, 68, 68, 0.25);"
                        onclick="performSystemLogout()" title="Sign Out"><i
                            class="fa-solid fa-right-from-bracket"></i></button>
                    <div style="font-size:22px; cursor:pointer;" onclick="routeToView('settings')">⚙️</div>
                </div>
            </header>

            <!-- ==========================================================================
               VIEW 1: SYSTEM HOME DASHBOARD
               ========================================================================== -->
            <section class="app-view-panel active-panel" id="view-dashboard">

                <!-- Premium Welcome Banner -->
                <div class="welcome-banner">
                    <h1>Good evening, Sarah 👋</h1>
                    <p>Your household pantry is 88% fresh. 2 items need attention before they expire.</p>
                    <div class="banner-date">
                        <i class="fa-solid fa-calendar-day"></i>
                        <span id="dashboardDateDisplay">Wednesday, May 21 2026</span>
                    </div>
                </div>

                <!-- Quick Stat Summary Row -->
                <div class="stat-summary-row" id="dashboardStatRow">
                    <div class="stat-mini-card">
                        <div class="stat-icon" style="background:rgba(var(--primary-rgb), 0.12); color:var(--primary);">
                            <i class="fa-solid fa-boxes-stacked"></i>
                        </div>
                        <div>
                            <span class="stat-value" id="statTotalItems">4</span>
                            <span class="stat-label">Total Items</span>
                        </div>
                    </div>
                    <div class="stat-mini-card">
                        <div class="stat-icon" style="background:rgba(239, 68, 68, 0.12); color:var(--danger);">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </div>
                        <div>
                            <span class="stat-value" id="statExpiringItems">2</span>
                            <span class="stat-label">Expiring Soon</span>
                        </div>
                    </div>
                    <div class="stat-mini-card">
                        <div class="stat-icon" style="background:rgba(59, 130, 246, 0.12); color:var(--info);">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <div>
                            <span class="stat-value" id="statShoppingCount">3</span>
                            <span class="stat-label">Shopping List</span>
                        </div>
                    </div>
                    <div class="stat-mini-card">
                        <div class="stat-icon" style="background:rgba(251, 191, 36, 0.12); color:var(--accent);">
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <div>
                            <span class="stat-value" id="statFamilyCount">3</span>
                            <span class="stat-label">Family Members</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions Bar -->
                <div class="quick-actions-bar">
                    <button class="quick-action-btn" onclick="openAddPantryItemModal()">
                        <i class="fa-solid fa-plus" style="color:var(--primary);"></i> Add Item
                    </button>
                    <button class="quick-action-btn" onclick="openSimulatedScanner('barcode')">
                        <i class="fa-solid fa-barcode" style="color:var(--info);"></i> Scan Barcode
                    </button>
                    <button class="quick-action-btn" onclick="openSimulatedScanner('ocr')">
                        <i class="fa-solid fa-receipt" style="color:var(--accent);"></i> OCR Receipt
                    </button>
                    <button class="quick-action-btn" onclick="routeToView('shopping')">
                        <i class="fa-solid fa-basket-shopping" style="color:#A855F7;"></i> Shopping List
                    </button>
                    <button class="quick-action-btn" onclick="triggerAIShortageChecklistBuilder()">
                        <i class="fa-solid fa-wand-magic-sparkles" style="color:var(--primary);"></i> AI Restock
                    </button>
                </div>

                <div class="responsive-dashboard-grid">

                    <!-- Expiry freshness ring tracker -->
                    <div class="app-premium-card card-accent-green" style="flex-direction:row; align-items:center;">
                        <div class="gauge-ring-container">
                            <svg class="gauge-svg">
                                <circle class="gauge-bg-circle" cx="40" cy="40" r="32"></circle>
                                <circle class="gauge-fill-circle" id="dashboardFreshnessCircle" cx="40" cy="40" r="32">
                                </circle>
                            </svg>
                            <span class="gauge-text" id="dashboardFreshnessVal">88%</span>
                        </div>
                        <div>
                            <strong style="font-family:var(--font-display); font-size:15px;">Freshness Index</strong>
                            <p style="color:var(--text-secondary); font-size:12px; margin-top:4px;"
                                id="dashboardFreshnessDesc">Scanning storage indexes. 0 expired products.</p>
                        </div>
                    </div>

                    <!-- AI predictive recommendations widgets -->
                    <div class="app-premium-card card-accent-amber"
                        style="background:linear-gradient(135deg, rgba(var(--primary-rgb), 0.1), transparent); border-color:rgba(var(--primary-rgb), 0.15);">
                        <div style="display:flex; gap:12px;">
                            <i class="fa-solid fa-wand-magic-sparkles"
                                style="color:var(--primary); font-size:22px;"></i>
                            <div>
                                <strong style="font-family:var(--font-display); font-size:14.5px;">AI Smart
                                    Replenishment</strong>
                                <p style="color:var(--text-secondary); font-size:12px; margin-top:4px; line-height:16px;"
                                    id="dashboardSuggestionText">Predicting bread depletes tomorrow. Auto-build list?
                                </p>
                                <div style="display:flex; gap:10px; margin-top:12px;">
                                    <button class="app-btn app-btn-primary app-btn-sm"
                                        onclick="acceptAIDepletionSuggestion()">Auto-Add</button>
                                    <button class="app-btn app-btn-ghost app-btn-sm">Dismiss</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Connected IoT Fridge Widget -->
                    <div class="app-premium-card card-accent-blue" style="cursor:pointer;"
                        onclick="routeToView('fridge')">
                        <div style="display:flex; justify-content:space-between; align-items:center; height:100%;">
                            <div style="display:flex; gap:12px; align-items:center;">
                                <i class="fa-solid fa-snowflake" style="color:var(--info); font-size:24px;"></i>
                                <div>
                                    <strong style="font-family:var(--font-display); font-size:15px;">Smart Connected IoT
                                        Fridge</strong>
                                    <p style="color:var(--text-secondary); font-size:11.5px; margin-top:2px;"
                                        id="dashboardFridgeSensorText">Internal Temp: 37°F · Door Closed</p>
                                </div>
                            </div>
                            <i class="fa-solid fa-chevron-right" style="color:var(--text-secondary);"></i>
                        </div>
                    </div>

                </div>

                <!-- Expiry heatmaps grid -->
                <div class="app-premium-card card-accent-red" style="margin-bottom:24px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong style="font-family:var(--font-display); font-size:15px;"><i
                                class="fa-solid fa-calendar-week"></i> 5-Week Expiry Calendar Matrix</strong>
                        <span style="font-size:11px; color:var(--text-secondary);">Red indicators show expiring
                            products</span>
                    </div>
                    <div class="grid-calendar-expiry" id="dashboardCalendarGrid">
                        <!-- Plotted dynamically -->
                    </div>
                </div>

                <!-- Low Stock warnings list -->
                <div style="margin-bottom:24px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                        <strong style="font-family:var(--font-display); font-size:15px;">Critical low quantities
                            checklist</strong>
                        <a href="#" style="font-size:12px; font-weight:700;" onclick="routeToView('pantry')">See All
                            Inventory</a>
                    </div>
                    <div style="display:flex; gap:12px; overflow-x:auto; padding-bottom:8px;"
                        id="dashboardLowStockScroll">
                        <!-- Populated dynamically -->
                    </div>
                </div>

                <!-- Live weekly trend charts -->
                <div class="app-premium-card card-accent-blue">
                    <strong style="font-family:var(--font-display); font-size:15px;">Weekly Consumption & Waste
                        Ratio</strong>
                    <div style="position:relative; height:220px; width:100%;">
                        <canvas id="dashboardWeeklyLineCanvas"></canvas>
                    </div>
                </div>

            </section>

            <!-- ==========================================================================
               VIEW 2: SMART PANTRY INVENTORY
               ========================================================================== -->
            <section class="app-view-panel" id="view-pantry">
                <div
                    style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
                    <div class="view-section-header" style="margin-bottom:0;">
                        <div class="section-icon-badge"
                            style="background:rgba(var(--primary-rgb), 0.1); color:var(--primary);">
                            <i class="fa-solid fa-boxes-stacked"></i>
                        </div>
                        <div>
                            <h2>Smart Pantry Storage</h2>
                            <p>Manage items inside Fridge, Pantry cabinets, and Freezer drawers. Click any name to edit.
                            </p>
                        </div>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="app-btn app-btn-secondary app-btn-md" onclick="openSimulatedScanner('ocr')"><i
                                class="fa-solid fa-receipt"></i> OCR Scan</button>
                        <button class="app-btn app-btn-primary app-btn-md" onclick="openAddPantryItemModal()">+ Add
                            Product</button>
                    </div>
                </div>

                <!-- Inventory Summary Bar -->
                <div class="inventory-summary-bar" id="pantrySummaryBar">
                    <div class="inv-summary-chip">
                        <i class="fa-solid fa-cubes" style="color:var(--primary); font-size:12px;"></i>
                        <span class="chip-count" id="summaryTotal">4</span> Total Products
                    </div>
                    <div class="inv-summary-chip">
                        <span style="font-size:13px;">❄️</span>
                        <span class="chip-count" id="summaryFridge">2</span> Fridge
                    </div>
                    <div class="inv-summary-chip">
                        <span style="font-size:13px;">🍞</span>
                        <span class="chip-count" id="summaryPantry">1</span> Pantry
                    </div>
                    <div class="inv-summary-chip">
                        <span style="font-size:13px;">🍏</span>
                        <span class="chip-count" id="summaryCounter">1</span> Counter
                    </div>
                </div>

                <!-- Search & Filters Toggles -->
                <div style="display:grid; grid-template-columns: 2fr 1fr; gap:12px; margin-bottom:20px;">
                    <div style="position:relative;">
                        <i class="fa-solid fa-magnifying-glass"
                            style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-secondary);"></i>
                        <input type="text" id="pantrySearchBox" placeholder="Search product database..."
                            style="padding-left:36px;" onkeyup="triggerPantryListReload()">
                    </div>
                    <select id="pantryLocationSelect" onchange="triggerPantryListReload()">
                        <option value="All">All Locations</option>
                        <option value="Fridge">Fridge ❄️</option>
                        <option value="Pantry">Pantry 🍞</option>
                        <option value="Counter">Counter 🍏</option>
                    </select>
                </div>

                <div
                    style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; gap:12px; flex-wrap:wrap;">
                    <div style="display:flex; gap:8px; overflow-x:auto;">
                        <span class="chip-button active-chip" id="chip-All" onclick="filterPantryCategory('All')">All
                            Categories</span>
                        <span class="chip-button" id="chip-Dairy" onclick="filterPantryCategory('Dairy')">Dairy
                            🥛</span>
                        <span class="chip-button" id="chip-Fruits" onclick="filterPantryCategory('Fruits')">Fruits
                            🍎</span>
                        <span class="chip-button" id="chip-Bakery" onclick="filterPantryCategory('Bakery')">Bakery
                            🍞</span>
                        <span class="chip-button" id="chip-Veggies" onclick="filterPantryCategory('Veggies')">Veggies
                            🥦</span>
                    </div>
                    <div style="display:flex; background:var(--surface-2); border-radius:8px; padding:2px;">
                        <button class="app-btn app-btn-ghost app-btn-sm" id="layoutGridBtn"
                            onclick="togglePantryLayout('grid')" style="background:var(--surface);"><i
                                class="fa-solid fa-grip"></i> Grid</button>
                        <button class="app-btn app-btn-ghost app-btn-sm" id="layoutListBtn"
                            onclick="togglePantryLayout('list')"><i class="fa-solid fa-list"></i> List</button>
                    </div>
                </div>

                <!-- Products Display Area -->
                <div id="pantryGridItemsWrapper">
                    <!-- Dynamic rendering -->
                </div>

            </section>

            <!-- ==========================================================================
               VIEW 3: SHOPPING LIST MODULE
               ========================================================================== -->
            <section class="app-view-panel" id="view-shopping">
                <div
                    style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
                    <div class="view-section-header" style="margin-bottom:0;">
                        <div class="section-icon-badge" style="background:rgba(59, 130, 246, 0.1); color:var(--info);">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <div>
                            <h2>Shopping Checklists</h2>
                            <p>Real-time checkoff sync between family members</p>
                        </div>
                    </div>
                    <button class="app-btn app-btn-primary app-btn-md" onclick="triggerAIShortageChecklistBuilder()"><i
                            class="fa-solid fa-wand-magic-sparkles"></i> AI Restock</button>
                </div>

                <!-- Shopping Progress Ring Banner -->
                <div class="shopping-progress-banner">
                    <div class="progress-ring-mini">
                        <svg>
                            <circle class="gauge-bg-circle" cx="26" cy="26" r="22" stroke-width="6"
                                style="stroke:var(--surface-2);"></circle>
                            <circle class="gauge-fill-circle" id="shoppingProgressRing" cx="26" cy="26" r="22"
                                stroke-width="6"
                                style="stroke:var(--primary); stroke-dasharray:138; stroke-dashoffset:138;"></circle>
                        </svg>
                        <span class="ring-text" id="shoppingProgressText">0%</span>
                    </div>
                    <div>
                        <strong style="font-family:var(--font-display); font-size:16px;">Shopping Completion</strong>
                        <p style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;"
                            id="shoppingProgressSubtitle">0 of 0 items checked off today.</p>
                    </div>
                </div>

                <div class="responsive-dashboard-grid">

                    <!-- Monthly Spend limits tracker -->
                    <div class="app-premium-card card-accent-green" style="justify-content:space-between;">
                        <div>
                            <strong style="font-family:var(--font-display); font-size:14.5px;">Budget Planning
                                Control</strong>
                            <div style="display:flex; align-items:center; gap:6px; margin-top:4px;">
                                <span style="font-size:12px; color:var(--text-secondary);">Limit:</span>
                                <input type="number" id="budgetLimitInput" value="200"
                                    style="width:70px; height:24px; padding:0 4px; font-size:11px; font-weight:800; border-radius:4px;"
                                    onchange="reloadAppUIRenderers()">
                            </div>
                        </div>
                        <div style="margin-top:12px;">
                            <div
                                style="display:flex; justify-content:space-between; font-size:11px; font-weight:800; margin-bottom:4px;">
                                <span id="budgetSpentText">Spent: \$128.40</span>
                                <span id="budgetPercentText">64%</span>
                            </div>
                            <div class="expiry-progress-track"
                                style="height:6px; background:var(--surface-2); border-radius:4px; overflow:hidden;">
                                <div class="expiry-progress-thumb" id="budgetLimitMeterBar"
                                    style="width:64%; height:100%; background:var(--primary); transition: width 0.3s;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Store prices comparisons -->
                    <div class="app-premium-card card-accent-amber">
                        <strong style="font-family:var(--font-display); font-size:14.5px;">Cloud Pricing
                            Comparisons</strong>
                        <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px; margin-top:8px;">
                            <div style="display:flex; justify-content:space-between; font-weight:800;">
                                <span>Walmart preset</span>
                                <span style="color:var(--primary); font-weight:900;">\$18.42 (Best Match!)</span>
                            </div>
                            <div style="display:flex; justify-content:space-between; color:var(--text-secondary);">
                                <span>Instacart</span>
                                <span>\$22.10</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Main checklists logs card -->
                <div class="app-premium-card">
                    <div style="display:flex; gap:12px; margin-bottom:12px; align-items:center;">
                        <input type="text" id="addShoppingItemName" placeholder="Add custom grocery item..."
                            style="flex:1;">
                        <button class="app-btn app-btn-primary app-btn-md" onclick="saveCustomShoppingItem()">+ Add
                            Item</button>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px; width:100%;"
                        id="shoppingChecklistContainer">
                        <!-- Loaded dynamically -->
                    </div>
                </div>

            </section>

            <!-- ==========================================================================
               VIEW 4: DETAILED ANALYTICS COMMAND CENTER
               ========================================================================== -->
            <section class="app-view-panel" id="view-analytics">
                <div class="view-section-header">
                    <div class="section-icon-badge" style="background:rgba(245, 158, 11, 0.1); color:var(--accent);">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                        <h2>Insights Command Center</h2>
                        <p>Track spending patterns, waste ratios, and sustainability metrics in real time</p>
                    </div>
                </div>

                <!-- Analytics KPI Summary -->
                <div class="kpi-row">
                    <div class="kpi-card">
                        <span class="kpi-value" style="color:var(--primary);">\$148</span>
                        <span class="kpi-label">Monthly Spend</span>
                        <span class="kpi-trend down"><i class="fa-solid fa-arrow-down"></i> 12% vs last month</span>
                    </div>
                    <div class="kpi-card">
                        <span class="kpi-value" style="color:var(--danger);">18%</span>
                        <span class="kpi-label">Waste Ratio</span>
                        <span class="kpi-trend down"><i class="fa-solid fa-arrow-down"></i> 4% improved</span>
                    </div>
                    <div class="kpi-card">
                        <span class="kpi-value" style="color:var(--info);">26</span>
                        <span class="kpi-label">Items Tracked</span>
                        <span class="kpi-trend up"><i class="fa-solid fa-arrow-up"></i> 8 this week</span>
                    </div>
                    <div class="kpi-card">
                        <span class="kpi-value" style="color:var(--accent);">2.4kg</span>
                        <span class="kpi-label">Daily Consumption</span>
                        <span class="kpi-trend up"><i class="fa-solid fa-arrow-up"></i> Normal range</span>
                    </div>
                </div>

                <div class="responsive-dashboard-grid"
                    style="grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));">

                    <div class="app-premium-card" style="height:320px;">
                        <strong style="font-size:14px; font-family:var(--font-display);">Category spend
                            distribution</strong>
                        <div style="position:relative; flex:1; height:100%; width:100%;">
                            <canvas id="chartCategorySpendCanvas"></canvas>
                        </div>
                    </div>

                    <div class="app-premium-card" style="height:320px;">
                        <strong style="font-size:14px; font-family:var(--font-display);">Waste & Sustainability
                            metrics</strong>
                        <div style="position:relative; flex:1; height:100%; width:100%;">
                            <canvas id="chartSustainabilityCanvas"></canvas>
                        </div>
                    </div>

                </div>
            </section>

            <!-- ==========================================================================
               VIEW 5: CONNECTED IOT SMART FRIDGE
               ========================================================================== -->
            <section class="app-view-panel" id="view-fridge">
                <div class="view-section-header">
                    <div class="section-icon-badge" style="background:rgba(59, 130, 246, 0.1); color:var(--info);">
                        <i class="fa-solid fa-temperature-empty"></i>
                    </div>
                    <div>
                        <h2>Connected IoT Smart Fridge</h2>
                        <p>Monitor temperature sensors, door alerts, and visual shelf contents remotely</p>
                    </div>
                </div>

                <div class="responsive-dashboard-grid">

                    <!-- Real-time IoT Sensor Displays -->
                    <div style="grid-column: 1 / -1; display:flex; gap:16px; margin-bottom:12px; flex-wrap:wrap;">
                        <div class="sensor-display" style="flex:1;">
                            <div class="sensor-icon" style="background:rgba(59, 130, 246, 0.15); color:var(--info);"><i
                                    class="fa-solid fa-temperature-low"></i></div>
                            <div>
                                <div class="sensor-value" id="iotSensorTemp">37.2°F</div>
                                <div class="sensor-label">Zone 1 Core Temp</div>
                            </div>
                        </div>
                        <div class="sensor-display" style="flex:1;">
                            <div class="sensor-icon" style="background:rgba(16, 185, 129, 0.15); color:var(--success);">
                                <i class="fa-solid fa-droplet"></i>
                            </div>
                            <div>
                                <div class="sensor-value">45%</div>
                                <div class="sensor-label">Crisper Humidity</div>
                            </div>
                        </div>
                        <div class="sensor-display" style="flex:1;">
                            <div class="sensor-icon" style="background:rgba(239, 68, 68, 0.15); color:var(--danger);"><i
                                    class="fa-solid fa-door-closed"></i></div>
                            <div>
                                <div class="sensor-value" id="iotSensorDoor">Closed</div>
                                <div class="sensor-label">Main Door Status</div>
                            </div>
                        </div>
                    </div>

                    <!-- Temp Slider controls card -->
                    <div class="app-premium-card card-accent-blue"
                        style="display:flex; flex-direction:column; justify-content:space-between;">
                        <div>
                            <strong style="font-family:var(--font-display); font-size:15px;"><i
                                    class="fa-solid fa-temperature-low"></i> Climate Control Drawer</strong>
                            <div style="margin-top:16px; display:flex; flex-direction:column; gap:12px;">
                                <div style="display:flex; justify-content:space-between; font-weight:800;">
                                    <span>Target Temperature</span>
                                    <span id="fridgeCompartmentTempDisplay">37.0°F</span>
                                </div>
                                <input type="range" id="fridgeCompartmentTempSlider" min="32" max="45" value="37"
                                    step="0.5" oninput="updateFridgeCompartmentTempDisplay(this.value)"
                                    onchange="setNewFridgeTargetTemp(this.value)">

                                <hr style="border:none; border-bottom:1px solid var(--border); margin:4px 0;">

                                <div class="switch-ds-row">
                                    <span>Enable Door Alarm (5s)</span>
                                    <label class="toggle-switch-ds">
                                        <input type="checkbox" id="fridgeAlarmToggle" checked>
                                        <span class="slider-switch-bg"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button class="app-btn app-btn-primary app-btn-lg" style="margin-top:16px; width:100%;"
                            id="simulateDoorBtn" onclick="toggleFridgeDoorState()">Open Fridge Door</button>
                    </div>

                    <!-- Live Power Draw Canvas -->
                    <div class="app-premium-card" style="display:flex; flex-direction:column;">
                        <strong style="font-family:var(--font-display); font-size:15px; margin-bottom:12px;"><i
                                class="fa-solid fa-bolt"></i> Live Compressor Power Draw</strong>
                        <div style="position:relative; flex:1; width:100%; min-height:160px;">
                            <canvas id="chartIotPowerCanvas"></canvas>
                        </div>
                    </div>

                    <!-- Virtual Internal Camera live shelf drawer -->
                    <div class="app-premium-card" style="grid-column: span 2;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong style="font-family:var(--font-display); font-size:15px;"><i
                                    class="fa-solid fa-camera"></i> Live Internal View Camera</strong>
                            <span class="app-badge app-badge-success" id="cameraStatusBadge">Camera Online</span>
                        </div>
                        <div id="fridgeCameraFeedBox"
                            style="background:#0F172A; border-radius:12px; aspect-ratio:16/9; margin-top:12px; display:flex; flex-direction:column; justify-content:space-between; padding:16px; border:2px solid #1E293B; overflow:hidden; position:relative; transition: background 0.3s;">
                            <!-- Fridge internal light simulation -->
                            <div id="fridgeInternalLight"
                                style="position:absolute; top:-20%; left:50%; transform:translateX(-50%); width:300px; height:300px; background:radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%); border-radius:50%; opacity:0; transition:opacity 0.3s; pointer-events:none;">
                            </div>

                            <!-- Virtual fridge shelves -->
                            <div
                                style="position:absolute; bottom:0; left:0; right:0; height:10px; background:#334155; z-index:2;">
                            </div>
                            <div
                                style="position:absolute; bottom:40%; left:0; right:0; height:4px; background:#475569; z-index:2;">
                            </div>

                            <div style="display:flex; justify-content:space-around; align-items:flex-end; flex:1; padding-bottom:8px; z-index:3;"
                                id="fridgeShelfTopItems">
                                <!-- Top Shelf virtual icons -->
                            </div>
                            <div style="display:flex; justify-content:space-around; align-items:flex-end; flex:1; padding-bottom:8px; z-index:3;"
                                id="fridgeShelfBottomItems">
                                <!-- Bottom Shelf virtual icons -->
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- ==========================================================================
               VIEW 6: FAMILY HUB & ACCESS RULES CONTROL
               ========================================================================== -->
            <section class="app-view-panel" id="view-family">
                <div
                    style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
                    <div class="view-section-header" style="margin-bottom:0;">
                        <div class="section-icon-badge" style="background:rgba(168, 85, 247, 0.1); color:#A855F7;">
                            <i class="fa-solid fa-people-roof"></i>
                        </div>
                        <div>
                            <h2>Family Member Sync</h2>
                            <p>Manage household editor permissions and shared access controls</p>
                        </div>
                    </div>
                    <button class="app-btn app-btn-primary app-btn-md" onclick="openInviteFamilyMemberPrompt()">+ Invite
                        Member</button>
                </div>

                <div class="responsive-dashboard-grid">

                    <!-- Members list cards -->
                    <div class="app-premium-card" style="grid-column: span 2;">
                        <strong style="font-family:var(--font-display); font-size:15px; margin-bottom:12px;">Active
                            Members Domain</strong>
                        <div style="display:flex; flex-direction:column; gap:12px;" id="familyListContainer">
                            <!-- Injected dynamically -->
                        </div>
                    </div>

                    <!-- Direct permissions toggle matrix -->
                    <div class="app-premium-card">
                        <strong style="font-family:var(--font-display); font-size:15px; margin-bottom:12px;">Direct
                            Permission Controls</strong>
                        <div style="display:flex; flex-direction:column; gap:12px; font-size:13px;"
                            id="familyPermissionsControlWrapper">
                            <!-- Injected dynamically -->
                        </div>
                    </div>

                </div>
            </section>

            <!-- ==========================================================================
               VIEW 7: SYSTEM SETTINGS AND PREFERENCES
               ========================================================================== -->
            <section class="app-view-panel" id="view-settings">
                <div class="view-section-header">
                    <div class="section-icon-badge"
                        style="background:rgba(var(--secondary-rgb), 0.1); color:var(--text-secondary);">
                        <i class="fa-solid fa-gears"></i>
                    </div>
                    <div>
                        <h2>System Preferences & Support</h2>
                        <p>Configure app settings, sync preferences, and get help from PantryBot</p>
                    </div>
                </div>

                <div class="responsive-dashboard-grid">

                    <!-- Mobile Advanced Modules Links -->
                    <div class="app-premium-card card-accent-blue">
                        <strong style="font-family:var(--font-display); font-size:15px;"><i
                                class="fa-solid fa-mobile-screen"></i> Advanced Modules</strong>
                        <p style="color:var(--text-secondary); font-size:12px; margin-top:4px;">Access full desktop
                            features right from your phone.</p>
                        <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
                            <button class="app-btn app-btn-secondary app-btn-md" onclick="routeToView('analytics')"
                                style="justify-content: flex-start;"><i class="fa-solid fa-chart-pie"
                                    style="color:var(--accent); width:24px; text-align:center;"></i> Insights
                                Panel</button>
                            <button class="app-btn app-btn-secondary app-btn-md" onclick="routeToView('fridge')"
                                style="justify-content: flex-start;"><i class="fa-solid fa-temperature-empty"
                                    style="color:var(--info); width:24px; text-align:center;"></i> Connected IoT
                                Fridge</button>
                            <button class="app-btn app-btn-secondary app-btn-md" onclick="routeToView('family')"
                                style="justify-content: flex-start;"><i class="fa-solid fa-people-roof"
                                    style="color:#A855F7; width:24px; text-align:center;"></i> Family Sync Hub</button>
                        </div>
                    </div>

                    <!-- Standard options lists -->
                    <div class="app-premium-card card-accent-amber">
                        <strong style="font-family:var(--font-display); font-size:15px;"><i
                                class="fa-solid fa-sliders"></i> Preferences Configuration</strong>
                        <div style="display:flex; flex-direction:column; gap:10px; font-size:13.5px; margin-top:8px;">

                            <div class="switch-ds-row">
                                <span>Appearance Dark mode</span>
                                <label class="toggle-switch-ds">
                                    <input type="checkbox" id="settingsDarkModeToggle"
                                        onchange="toggleGlobalAppearanceTheme()">
                                    <span class="slider-switch-bg"></span>
                                </label>
                            </div>

                            <hr style="border:none; border-bottom:1px solid var(--border);">

                            <div class="switch-ds-row">
                                <span><i class="fa-solid fa-bell"
                                        style="margin-right:6px; font-size:12px; color:var(--accent);"></i> Expiry
                                    Alerts</span>
                                <label class="toggle-switch-ds">
                                    <input type="checkbox" checked
                                        onchange="showSystemToast('Alerts', 'Expiry notification preferences updated')">
                                    <span class="slider-switch-bg"></span>
                                </label>
                            </div>

                            <div class="switch-ds-row">
                                <span><i class="fa-solid fa-wand-magic-sparkles"
                                        style="margin-right:6px; font-size:12px; color:var(--primary);"></i> AI
                                    Suggestions</span>
                                <label class="toggle-switch-ds">
                                    <input type="checkbox" checked
                                        onchange="showSystemToast('AI Mode', 'Smart suggestion engine toggled')">
                                    <span class="slider-switch-bg"></span>
                                </label>
                            </div>

                            <hr style="border:none; border-bottom:1px solid var(--border);">

                            <div
                                style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
                                <span>Sync Language</span>
                                <strong>English (US) <i class="fa-solid fa-chevron-right"
                                        style="font-size:10px; margin-left:6px;"></i></strong>
                            </div>

                            <div
                                style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
                                <span>Household Region</span>
                                <strong>North America <i class="fa-solid fa-chevron-right"
                                        style="font-size:10px; margin-left:6px;"></i></strong>
                            </div>

                            <hr style="border:none; border-bottom:1px solid var(--border);">

                            <button class="app-btn app-btn-secondary app-btn-sm" style="width:100%;"
                                onclick="runSimulatedCloudBackup()"><i class="fa-solid fa-cloud-arrow-up"></i> Sync Now
                                to Cloud Drive</button>
                            <button class="app-btn app-btn-ghost app-btn-sm" style="width:100%; color:var(--danger);"
                                onclick="showSystemToast('Cache Cleared', 'Local storage cache successfully purged')"><i
                                    class="fa-solid fa-trash-can"></i> Clear Local Cache</button>

                        </div>
                    </div>



                    <!-- FAQ chatbots panel -->
                    <div class="app-premium-card card-accent-green" style="grid-column: span 2;">
                        <strong style="font-family:var(--font-display); font-size:15px;"><i
                                class="fa-solid fa-comments"></i> PantryBot live support & automation bot</strong>

                        <div
                            style="background:var(--surface-2); border-radius:var(--radius-md); padding:16px; min-height:180px; display:flex; flex-direction:column; justify-content:space-between; gap:12px; margin-top:12px;">
                            <div id="settingsChatbotLog"
                                style="font-size:13px; color:var(--text-secondary); max-height:140px; overflow-y:auto; display:flex; flex-direction:column; gap:8px;">
                                <div><strong style="color:var(--primary);">PantryBot:</strong> Hello Sarah, ask me
                                    anything! Try typing commands like: *"add 3 Apples to pantry"* or *"what is
                                    expiring?"*</div>
                            </div>
                            <div style="display:flex; gap:12px; align-items:center;">
                                <input type="text" id="pantryBotCmdInput" placeholder="Type command/question..."
                                    style="flex:1; height:36px; font-size:12.5px;"
                                    onkeydown="if(event.key==='Enter') submitFAQKeyword(this.value)">
                                <button class="app-btn app-btn-primary app-btn-sm"
                                    style="height:36px; padding:0 12px; border-radius:8px;"
                                    onclick="submitFAQKeyword(document.getElementById('pantryBotCmdInput').value)">Send</button>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Activity Timeline -->
                    <div class="app-premium-card card-accent-blue">
                        <strong style="font-family:var(--font-display); font-size:15px;"><i
                                class="fa-solid fa-clock-rotate-left"></i> Recent Activity</strong>
                        <div class="activity-timeline" id="recentActivityContainer" style="margin-top:8px;">
                            <!-- Injected dynamically -->
                        </div>
                    </div>

                    <!-- About / Version Card -->
                    <div class="app-premium-card about-version-card">
                        <div class="version-logo">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                        <strong style="font-family:var(--font-display); font-size:18px;">PantryWise OS</strong>
                        <p style="color:var(--text-secondary); font-size:12px; margin-top:4px;">Enterprise Smart
                            Household Storage Management</p>
                        <span class="version-tag">v2.4.1 — Build 2026.05.21</span>
                        <div
                            style="margin-top:16px; display:flex; flex-direction:column; gap:6px; font-size:11.5px; color:var(--text-secondary);">
                            <span>© 2026 PantryWise Technologies</span>
                            <span>Licensed to HarishKUmar</span>
                        </div>
                    </div>

                </div>
            </section>

            <!-- MOBILE FOOTER NAV GLASSMOPHISM BAR -->
            <nav class="mobile-bottom-navbar">
                <button class="mobile-nav-btn active" id="mobNav-dashboard" onclick="routeToView('dashboard')">
                    <i class="fa-solid fa-house"></i> <span>Home</span>
                </button>
                <button class="mobile-nav-btn" id="mobNav-pantry" onclick="routeToView('pantry')">
                    <i class="fa-solid fa-boxes-stacked"></i> <span>Pantry</span>
                </button>
                <button class="mobile-barcode-fab" onclick="openSimulatedScanner('barcode')" title="Scan barcode"><i
                        class="fa-solid fa-barcode"></i></button>
                <button class="mobile-nav-btn" id="mobNav-shopping" onclick="routeToView('shopping')">
                    <i class="fa-solid fa-basket-shopping"></i> <span>List</span>
                </button>
                <button class="mobile-nav-btn" id="mobNav-settings" onclick="routeToView('settings')">
                    <i class="fa-solid fa-gears"></i> <span>Settings</span>
                </button>
            </nav>

            <!-- Global Floating Help FAB -->
            <button class="floating-help-fab"
                onclick="routeToView('settings'); setTimeout(() => document.getElementById('pantryBotCmdInput').focus(), 400);"
                title="Ask PantryBot">
                <i class="fa-solid fa-comment-dots"></i>
            </button>

        </main>
    </div>

    <!-- ==========================================================================
       OVERLAY MODALS (ADD PANTRY ITEM, EDIT PANTRY ITEM, OCR SCANNING, BARCODE MATCH)
       ========================================================================== -->

    <!-- Add Food modal -->
    <div class="hub-overlay-modal" id="addFoodItemModal">
        <div class="overlay-modal-card">
            <h3 style="font-family:var(--font-display); font-weight:800; font-size:18px; margin-bottom:16px;">Add pantry
                item uploader</h3>

            <div style="display:flex; flex-direction:column; gap:12px;">
                <div>
                    <label
                        style="font-size:11.5px; font-weight:700; color:var(--text-secondary); display:block; margin-bottom:4px;">Product
                        Name</label>
                    <input type="text" id="formFoodName" placeholder="e.g. Cream Cheese Tub">
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    <div>
                        <label
                            style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Quantity</label>
                        <input type="number" id="formFoodQty" value="1">
                    </div>
                    <div>
                        <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Measurement
                            Unit</label>
                        <select id="formFoodUnit">
                            <option>pcs</option>
                            <option>liters</option>
                            <option>grams</option>
                            <option>packs</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Food Category
                        Group</label>
                    <select id="formFoodCategory">
                        <option value="Dairy">Dairy 🥛</option>
                        <option value="Fruits">Fruits 🍎</option>
                        <option value="Bakery">Bakery 🍞</option>
                        <option value="Veggies">Veggies 🥦</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Expiration
                        Date</label>
                    <input type="date" id="formFoodExpiry" value="2026-05-29">
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Storage
                        Location</label>
                    <select id="formFoodLocation">
                        <option>Fridge</option>
                        <option>Pantry</option>
                        <option>Counter</option>
                    </select>
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
                <button class="app-btn app-btn-secondary app-btn-md" onclick="closeAddPantryItemModal()">Cancel</button>
                <button class="app-btn app-btn-primary app-btn-md" onclick="saveAddPantryItemForm()">Save
                    Product</button>
            </div>
        </div>
    </div>

    <!-- Edit Food modal -->
    <div class="hub-overlay-modal" id="editFoodItemModal">
        <div class="overlay-modal-card">
            <h3 style="font-family:var(--font-display); font-weight:800; font-size:18px; margin-bottom:16px;">Modify
                product properties</h3>
            <input type="hidden" id="editFormFoodId">
            <div style="display:flex; flex-direction:column; gap:12px;">
                <div>
                    <label
                        style="font-size:11.5px; font-weight:700; color:var(--text-secondary); display:block; margin-bottom:4px;">Product
                        Name</label>
                    <input type="text" id="editFormFoodName">
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    <div>
                        <label
                            style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Quantity</label>
                        <input type="number" id="editFormFoodQty">
                    </div>
                    <div>
                        <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Measurement
                            Unit</label>
                        <select id="editFormFoodUnit">
                            <option>pcs</option>
                            <option>liters</option>
                            <option>grams</option>
                            <option>packs</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Food Category
                        Group</label>
                    <select id="editFormFoodCategory">
                        <option value="Dairy">Dairy 🥛</option>
                        <option value="Fruits">Fruits 🍎</option>
                        <option value="Bakery">Bakery 🍞</option>
                        <option value="Veggies">Veggies 🥦</option>
                    </select>
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Expiration
                        Date</label>
                    <input type="date" id="editFormFoodExpiry">
                </div>
                <div>
                    <label style="font-size:11.5px; font-weight:700; display:block; margin-bottom:4px;">Storage
                        Location</label>
                    <select id="editFormFoodLocation">
                        <option>Fridge</option>
                        <option>Pantry</option>
                        <option>Counter</option>
                    </select>
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
                <button class="app-btn app-btn-secondary app-btn-md"
                    onclick="closeEditPantryItemModal()">Cancel</button>
                <button class="app-btn app-btn-primary app-btn-md" onclick="saveEditPantryItemForm()">Save
                    Changes</button>
            </div>
        </div>
    </div>

    <!-- Scanners simulation dialog overlays -->
    <div class="hub-overlay-modal" id="scannerSimulatorModal">
        <div class="overlay-modal-card" style="background:#111827; color:white; border-color:#374151; max-width:380px;">
            <h3 style="font-family:var(--font-display); font-size:16px; margin-bottom:12px; text-align:center;"
                id="scannerTitle">Scanner Active</h3>

            <div
                style="position:relative; width:100%; aspect-ratio:3/4; border-radius:12px; background:#1F2937; display:flex; align-items:center; justify-content:center; border:2px dashed var(--primary); overflow:hidden;">
                <!-- laser line -->
                <div
                    style="position:absolute; width:100%; height:2px; background:var(--primary); box-shadow: 0 0 8px var(--primary); animation: scannerLaserPulse 2s infinite ease-in-out;">
                </div>
                <i class="fa-solid fa-receipt" style="font-size:72px; opacity:0.25;" id="scannerIcon"></i>
            </div>

            <p style="text-align:center; font-size:12px; color:#94A3B8; margin-top:16px;" id="scannerHelperText">Align
                target receipt checklist within layout guides</p>

            <div style="display:flex; gap:10px; margin-top:20px;">
                <button class="app-btn app-btn-secondary app-btn-md"
                    style="flex:1; border-color:#374151; color:white; background:none;"
                    onclick="closeScannerSimulator()">Cancel</button>
                <button class="app-btn app-btn-primary app-btn-md" style="flex:1;"
                    onclick="completeSimulatedScanPipeline()">Simulate scan</button>
            </div>
        </div>
    </div>

    <style>
        @keyframes scannerLaserPulse {
            0% {
                top: 5%;
            }

            50% {
                top: 95%;
            }

            100% {
                top: 5%;
            }
        }
    </style>

    <!-- ==========================================================================
       8. JAVASCRIPT STATE ENGINE & CORE ACTIONS
       ========================================================================== -->

    
    
    
    
    
    
    
    
    
    
    
    
    <script>

    function frameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.vx; p.y += p.vy;
            p.vy += 0.2; // gravity
            p.alpha -= 0.02;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
            ctx.restore();
            if (p.alpha <= 0) particles.splice(index, 1);
        });

        if (particles.length > 0) requestAnimationFrame(frameLoop);
    }
    frameLoop();
}

// ==========================================================================
// PREMIUM DATA CHARTS INITIALIZATIONS
// ==========================================================================
let instancesOfCharts = {};

function initializeChartVisualizations() {
    const isDark = document.body.classList.contains('dark');
    const textClr = isDark ? '#94A3B8' : '#475569';
    const gridClr = isDark ? '#334155' : '#E2E8F0';

    // Clean up to avoid garbage rendering leaks
    Object.values(instancesOfCharts).forEach(c => c.destroy());

    // 1. Dashboard Line Chart
    const ctxLine = document.getElementById('dashboardWeeklyLineCanvas')?.getContext('2d');
    if (ctxLine) {
        instancesOfCharts.line = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    { label: 'Consumed (kg)', data: [1.8, 2.4, 2.0, 3.2, 2.5, 4.0, 2.8], borderColor: '#10B981', fill: false, tension: 0.4 },
                    { label: 'Wasted (kg)', data: [0.2, 0.4, 0.1, 0.8, 0.2, 0.9, 0.3], borderColor: '#EF4444', fill: false, tension: 0.4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { labels: { color: textClr } } },
                scales: {
                    x: { grid: { color: gridClr }, ticks: { color: textClr } },
                    y: { grid: { color: gridClr }, ticks: { color: textClr } }
                }
            }
        });
    }

    // 2. Insights Spend Pie Chart
    const ctxPie = document.getElementById('chartCategorySpendCanvas')?.getContext('2d');
    if (ctxPie) {
        instancesOfCharts.pie = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['Dairy 🥛', 'Fruits 🍎', 'Bakery 🍞', 'Veggies 🥦'],
                datasets: [{
                    data: [42, 28, 18, 12],
                    backgroundColor: ['#10B981', '#F59E0B', '#3B82F6', '#EF4444']
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: textClr } } }
            }
        });
    }

    // 3. Sustainability Donut Chart
    const ctxDonut = document.getElementById('chartSustainabilityCanvas')?.getContext('2d');
    if (ctxDonut) {
        instancesOfCharts.donut = new Chart(ctxDonut, {
            type: 'doughnut',
            data: {
                labels: ['Consumed ✅', 'Wasted 🗑️'],
                datasets: [{
                    data: [82, 18],
                    backgroundColor: ['#10B981', '#EF4444'],
                    borderWidth: 2, borderColor: isDark ? '#1E293B' : '#FFFFFF'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: textClr } } }
            }
        });
    }
}
</script>
    <script>

function performSystemLogout() {
    if (!confirm("Are you sure you want to log out of PantryWise?")) return;

    showSystemToast("Signed Out", "You have successfully signed out of your session.");

    // Clear current user from session memory
    currentUserId = null;
    pantryItems = [];
    shoppingChecklist = [];
    familyMembers = [];

    // Reveal auth view overlay
    const authView = document.getElementById('appAuthView');
    authView.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Hide browser scrollbars in onboarding screen

    // Redirect session to welcome slide (stage 4)
    document.querySelectorAll('.auth-slider-stage').forEach(stage => stage.classList.remove('active-stage'));
    document.getElementById('authStage-4').classList.add('active-stage');
}

// Auto initialize on load uploader
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('splashProgressIndicator');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 4;
        if (progressBar) progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            const splashOverlay = document.getElementById('appSplashScreenOverlay');
            if (splashOverlay) {
                splashOverlay.style.opacity = '0';
                setTimeout(() => {
                    splashOverlay.style.display = 'none';
                }, 500);
            }
        }
    }, 40); // 1-second splash animation
});
        btn.style.borderColor = "";
        if (statusEl) statusEl.textContent = "Closed";
        if (lightEl) lightEl.style.opacity = "0";
        if (camBadge) { camBadge.className = "app-badge app-badge-success"; camBadge.innerText = "Camera Online"; }
        showSystemToast("Door Closed", "Secured. Compressor stabilizing temp.");
        logActivity("fa-solid fa-door-closed", "success", "<strong>User</strong> closed the fridge door.");
    }
}

function setNewFridgeTargetTemp(val) {
    iotTargetTemp = parseFloat(val);
    logActivity("fa-solid fa-temperature-arrow-down", "info", \`<strong>User</strong> changed target temp to \${val}°F\`);
}

function renderIotPowerChart() {
    const canvas = document.getElementById('chartIotPowerCanvas');
    if (!canvas) return;

    // If chart exists, just update data, otherwise init
    if (!instancesOfCharts.iotPower) {
        const isDark = document.body.classList.contains('dark');
        instancesOfCharts.iotPower = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: Array(60).fill(''),
                datasets: [{
                    label: 'Power Draw (W)',
                    data: iotPowerHistory,
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    fill: true,
                    tension: 0.1,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                animation: { duration: 0 },
                scales: {
                    x: { display: false },
                    y: { min: 0, max: 200, grid: { color: isDark ? '#334155' : '#E2E8F0' }, ticks: { color: isDark ? '#94A3B8' : '#475569' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    } else {
        instancesOfCharts.iotPower.data.datasets[0].data = iotPowerHistory;
        instancesOfCharts.iotPower.update();
    }
}

function simulateIoTSensors() {
</script>
    <script>
    if (iotSimulationInterval) clearInterval(iotSimulationInterval);

    const tempEl = document.getElementById('iotSensorTemp');
    if (!tempEl) return;

    // Run thermal physics engine every 1 second
    iotSimulationInterval = setInterval(() => {
        // 1. Thermal Dynamics
        if (iotDoorOpen) {
            // Temperature rises extremely fast if door is open
            iotCurrentTemp += Math.random() * 0.4 + 0.2;
            iotCompressorOn = true; // Compressor maxes out trying to save it
        } else {
            if (iotCurrentTemp > iotTargetTemp + 0.5) {
                // Compressor is ON, cooling down
                iotCompressorOn = true;
                iotCurrentTemp -= Math.random() * 0.3 + 0.1;
            } else if (iotCurrentTemp < iotTargetTemp - 0.5) {
                // Compressor is OFF, warming up naturally
                iotCompressorOn = false;
                iotCurrentTemp += Math.random() * 0.1;
            } else {
                // Deadband holding
                iotCompressorOn = false;
                iotCurrentTemp += (Math.random() * 0.1) - 0.05;
            }
        }

        // 2. Power Draw Calculation
        let currentPower = 10; // Idle draw (lights, sensors)
        if (iotCompressorOn) {
            currentPower = iotDoorOpen ? 180 + (Math.random() * 15) : 120 + (Math.random() * 10);
        }

        // Add noise
        currentPower += Math.random() * 5 - 2.5;
        if (currentPower < 10) currentPower = 10;

        // Update Arrays
        iotPowerHistory.shift();
        iotPowerHistory.push(currentPower);

        // 3. UI Renders
        tempEl.textContent = iotCurrentTemp.toFixed(1) + "°F";
        if (iotDoorOpen) tempEl.style.color = "var(--danger)";
        else tempEl.style.color = "";

        renderIotPowerChart();

    }, 1000);
}

function updateDashboardStatCards() {
    const totalEl = document.getElementById('statTotalItems');
    const expiringEl = document.getElementById('statExpiringItems');
    const shoppingEl = document.getElementById('statShoppingCount');
    const familyEl = document.getElementById('statFamilyCount');

    if (totalEl) totalEl.textContent = pantryItems.length;
    if (expiringEl) expiringEl.textContent = pantryItems.filter(i => i.daysLeft <= 3).length;
    if (shoppingEl) shoppingEl.textContent = shoppingChecklist.filter(i => !i.checked).length;
    if (familyEl) familyEl.textContent = familyMembers.length;
}

function updateWelcomeBanner() {
    const dateEl = document.getElementById('dashboardDateDisplay');
    if (dateEl) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = now.toLocaleDateString('en-US', options);
    }

    const hour = new Date().getHours();
    let greeting = 'Good morning';
    if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
    else if (hour >= 17) greeting = 'Good evening';

    const bannerH1 = document.querySelector('.welcome-banner h1');
    const signupName = document.getElementById('signupName');
    const userName = signupName?.value || 'Sarah';
    if (bannerH1) bannerH1.textContent = \`\${greeting}, \${userName} 👋\`;

    const bannerP = document.querySelector('.welcome-banner > p');
    const expiring = pantryItems.filter(i => i.daysLeft <= 3).length;
                        <span>\${member.name} (Add Inventory)</span>
                        <label class="toggle-switch-ds">
                            <input type="checkbox" \${member.permissions.add ? 'checked' : ''} onchange="toggleFamilyMemberPermissionState('\${member.name}', 'add')">
                            <span class="slider-switch-bg"></span>
                        </label>
                    \`;
            permissions.appendChild(row);
        }
    });
}

</script>
    <script>
function toggleFamilyMemberPermissionState(name, permissionKey) {
    const member = familyMembers.find(f => f.name === name);
    if (member) {
        member.permissions[permissionKey] = !member.permissions[permissionKey];
        showSystemToast("Permissions Synced", \`\${name} access limits updated.\`);
    }
}

function removeFamilyMember(name) {
    if (!confirm(\`Are you sure you want to remove \${name} from your household?\`)) return;
    familyMembers = familyMembers.filter(f => f.name !== name);
    showSystemToast("Member Removed", \`\${name} access revoked.\`);
    reloadAppUIRenderers();
}

function openInviteFamilyMemberPrompt() {
    const name = prompt("Enter family member full name:");
    if (!name) return;

    familyMembers.push({
        name: name,
        role: "Editor",
        email: name.toLowerCase().replace(" ", "") + "@family.com",
        avatar: "👧",
        permissions: { add: true, edit: true, delete: false }
    });

    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Invitation Synced", "New profile registered.");
}

// ==========================================================================
// SUPABASE DATABASE LOGGING SETUP
// ==========================================================================
async function logUserAction(actionName, extraDetails) {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { user } } = await sb.auth.getUser();
    if (user) {
        await sb.from('activity_logs').insert([
            { user_id: user.id, action: actionName, details: extraDetails }
        ]);
    }
}

// ==========================================================================
// SCANNERS SIMULATORS OVERLAYS
// ==========================================================================
function openSimulatedScanner(mode) {
    activeScannerMode = mode;
    const modal = document.getElementById('scannerSimulatorModal');
    const title = document.getElementById('scannerTitle');
    const icon = document.getElementById('scannerIcon');
    const help = document.getElementById('scannerHelperText');

    if (mode === 'ocr') {
        title.innerText = "OCR checkout receipt scanner";
        icon.className = "fa-solid fa-receipt";
        help.innerText = "Focus scanner camera over receipt layout lines";
    } else {
        title.innerText = "Barcode Laser Scanner active";
        icon.className = "fa-solid fa-barcode";
        help.innerText = "Center item UPC code within target indicators";
    }

    modal.style.display = 'flex';
}

function closeScannerSimulator() {
    document.getElementById('scannerSimulatorModal').style.display = 'none';
}

function completeSimulatedScanPipeline() {
    const title = document.getElementById('scannerTitle');
    const help = document.getElementById('scannerHelperText');

    title.innerText = "Analyzing optical frames...";
    help.innerText = "Decrypting cloud product matrices...";

    setTimeout(() => {
        closeScannerSimulator();

        if (activeScannerMode === 'ocr') {
            pantryItems.unshift({
                id: Date.now(),
                name: "Fresh Strawberries Box",
                category: "Fruits",
                quantity: 1,
                unit: "box",
                expiry: "2026-05-29",
                daysLeft: 8,
                status: "success",
                image: "🍓",
                location: "Fridge"
</script>
    <script>
            });
            showSystemToast("OCR bill Scan complete", "Strawberries added from receipt logs checkout");
            logUserAction('ocr_scanned', { item: 'Fresh Strawberries Box', method: 'receipt' });
        } else {
            pantryItems.unshift({
                id: Date.now(),
                name: "Greek Style Yogurt",
                category: "Dairy",
                quantity: 1,
                unit: "pcs",
                expiry: "2026-05-28",
                daysLeft: 7,
                status: "success",
                image: "🥛",
                location: "Fridge"
            });
            showSystemToast("Barcode Scan Success", "Greek Style Yogurt added from cloud dictionary.");
            logUserAction('barcode_scanned', { item: 'Greek Style Yogurt', method: 'barcode' });
        }

        reloadAppUIRenderers();
        fireCelebrationConfettiLoop();
    }, 1200);
}

// ==========================================================================
// SETTINGS & FAQ CHATBOT COMMAND LINE INTERPRETER
// ==========================================================================
function runSimulatedCloudBackup() {
    showSystemToast("Cloud Synchronizer", "Writing data backup sync arrays...");
    let progress = 0;
// Initialize Supabase Client lazily (SDK loads with defer, so it may not be ready at script parse time)
const supabaseUrl = 'https://yupxgfgntbhihnzehhnv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cHhnZmdudGJoaWhuemVoaG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMzU5MzEsImV4cCI6MjA5NTYxMTkzMX0.4lmWW2VWb7Tyn6UQ0w2rM0OLKLKKO1pOIJ3m98NIT_s';
let _supabaseClient = null;
function getSupabase() {
    if (_supabaseClient) return _supabaseClient;
    try {
        if (window.supabase && window.supabase.createClient) {
            _supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
            return _supabaseClient;
        }
    } catch (e) {
        console.error('Supabase init failed:', e);
    }
    return null;
}

// ==========================================================================
// WAVE 3 COMMAND PALETTE & KEYBOARD SHORTCUTS
// ==========================================================================
function openCommandPalette() {
    const overlay = document.getElementById('commandPaletteOverlay');
    overlay.classList.add('active');
    setTimeout(() => document.getElementById('cmdPaletteInput').focus(), 100);
}

function closeCommandPalette(e) {
    if (e && e.target !== document.getElementById('commandPaletteOverlay') && e.type === 'click') return;
    document.getElementById('commandPaletteOverlay').classList.remove('active');
    document.getElementById('cmdPaletteInput').value = ''; // Reset input
}

function executeCommandSearch(e) {
    if (e.key === 'Escape') {
        closeCommandPalette();
        return;
    }
    if (e.key === 'Enter') {
        const val = e.target.value.toLowerCase();
        if (val.includes('add') || val.includes('new')) {
            closeCommandPalette();
            openAddPantryItemModal();
        } else if (val.includes('shop') || val.includes('list')) {
            closeCommandPalette();
            routeToView('shopping');
        } else if (val.includes('pantry') || val.includes('inventory')) {
            closeCommandPalette();
            routeToView('pantry');
        } else if (val.includes('ai') || val.includes('bot')) {
            closeCommandPalette();
            routeToView('settings');
            setTimeout(() => document.getElementById('pantryBotCmdInput').focus(), 300);
        }
    }
}

// Global Keyboard Shortcut Listener
window.addEventListener('keydown', (e) => {
    // Cmd+K or Ctrl+K to open palette
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openCommandPalette();
    }
    // Escape to close palette
</script>
    <script>
    if (e.key === 'Escape') {
        closeCommandPalette();
    }
});

// Real-world client databases state driven by localStorage
let currentUserId = null;
let pantryItems = [];
let shoppingChecklist = [];
let familyMembers = [];
let recentActivity = [];

function initDefaultUserIfNone() {
    if (!localStorage.getItem('pantryWise_user_harish')) {
        const harishData = {
            name: 'Harish',
            pantryItems: [
                { id: 1, name: "Organic Fresh Milk", category: "Dairy", quantity: 2, unit: "liters", expiry: "2026-05-23", daysLeft: 2, status: "warning", image: "🥛", location: "Fridge" },
                { id: 2, name: "Sourdough Toast Bread", category: "Bakery", quantity: 1, unit: "pack", expiry: "2026-05-22", daysLeft: 1, status: "danger", image: "🍞", location: "Pantry" },
                { id: 3, name: "Free-range Grade A Eggs", category: "Dairy", quantity: 12, unit: "pcs", expiry: "2026-06-12", daysLeft: 22, status: "success", image: "🥚", location: "Fridge" },
                { id: 4, name: "Fresh Hass Avocados", category: "Fruits", quantity: 3, unit: "pcs", expiry: "2026-05-24", daysLeft: 3, status: "warning", image: "🥑", location: "Counter" }
            ],
            shoppingChecklist: [
                { id: 101, name: "Organic Strawberries", quantity: 1, unit: "box", checked: false, store: "Walmart", assigned: "Harish" },
                { id: 102, name: "Creamy Peanut Butter", quantity: 1, unit: "jar", checked: true, store: "Instacart", assigned: "David" },
                { id: 103, name: "Greek Style Yogurt Tub", quantity: 2, unit: "cups", checked: false, store: "Local Shop", assigned: "Harish" }
            ],
            familyMembers: [
                { name: "Harish", role: "Admin", email: "harish@family.com", avatar: "👨‍🍳", permissions: { add: true, edit: true, delete: true } },
                { name: "David Johnson", role: "Editor", email: "david.j@family.com", avatar: "👨‍💻", permissions: { add: true, edit: true, delete: false } }
            ],
            recentActivity: [
                { id: 1, icon: "fa-solid fa-user-plus", color: "#A855F7", text: "<strong>System</strong> initialized Harish's workspace", time: "Just now" }
            ]
        };
        localStorage.setItem('pantryWise_user_harish', JSON.stringify(harishData));
    }
}
initDefaultUserIfNone();

function loadUserData(userId, userName) {
    let data = localStorage.getItem(\`pantryWise_user_\${userId}\`);
    if (data) {
        const parsed = JSON.parse(data);
        pantryItems = parsed.pantryItems || [];
        shoppingChecklist = parsed.shoppingChecklist || [];
        familyMembers = parsed.familyMembers || [];
        recentActivity = parsed.recentActivity || [];
        document.getElementById('currentUserLabel').innerText = parsed.name || userName;

        const signupNameEl = document.getElementById('signupName');
        if (signupNameEl) signupNameEl.value = parsed.name || userName;
    } else {
        // Initialize new empty user profile
        pantryItems = [];
        shoppingChecklist = [];
        familyMembers = [{ name: userName, role: "Admin", email: \`\${userId}@family.com\`, avatar: "🧑", permissions: { add: true, edit: true, delete: true } }];
        recentActivity = [{ id: Date.now(), icon: "fa-solid fa-user-plus", color: "#A855F7", text: \`<strong>System</strong> created new profile for \${userName}\`, time: "Just now" }];

        document.getElementById('currentUserLabel').innerText = userName;
        const signupNameEl = document.getElementById('signupName');
        if (signupNameEl) signupNameEl.value = userName;
    }
    currentUserId = userId;
    saveCurrentUserData(); // Ensure it is saved if new
}

function saveCurrentUserData() {
    if (!currentUserId) return;
    const data = {
        name: document.getElementById('currentUserLabel').innerText,
        pantryItems,
        shoppingChecklist,
    if (pantryCategoryFilter !== 'All') {
        filtered = filtered.filter(i => i.category === pantryCategoryFilter);
    }
    if (locationFilter !== 'All') {
        filtered = filtered.filter(i => i.location === locationFilter);
    }
    if (searchVal) {
        filtered = filtered.filter(i => i.name.toLowerCase().includes(searchVal));
    }

    if (filtered.length === 0) {
        wrapper.innerHTML = \`
                    <div style="text-align:center; padding:60px 24px; color:var(--text-secondary); display:flex; flex-direction:column; align-items:center; gap:16px; width:100%; grid-column: 1 / -1; background:var(--surface); border-radius:var(--radius-lg); border:1px solid var(--border); box-shadow:var(--shadow-1);">
                        <div style="width:72px; height:72px; border-radius:50%; background:var(--surface-2); display:flex; align-items:center; justify-content:center; border: 1.5px solid var(--border); box-shadow:var(--shadow-1);">
                            <i class="fa-solid fa-magnifying-glass" style="font-size:26px; color:var(--primary); opacity:0.85;"></i>
                        </div>
                        <div>
                            <strong style="font-family:var(--font-display); font-size:16px; color:var(--text-primary); display:block;">No matching products found</strong>
                            <span style="font-size:12.5px; color:var(--text-secondary); display:block; margin-top:4px; max-width:280px; margin-left:auto; margin-right:auto; line-height:18px;">Try refining your query search input or resetting category filter logs.</span>
                        </div>
                    </div>
                \`;
</script>
    <script>
        return;
    }

    if (pantryLayoutType === 'grid') {
        const grid = document.createElement('div');
        grid.className = 'responsive-dashboard-grid';

        filtered.forEach(item => {
            const card = document.createElement('div');
            card.className = 'app-premium-card';
            card.innerHTML = \`
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:32px;">\${item.image}</span>
                            <span class="app-badge \${item.status === 'danger' ? 'app-badge-danger' : item.status === 'warning' ? 'app-badge-warning' : 'app-badge-success'}">\${item.daysLeft}d left</span>
                        </div>
                        <div>
                            <strong style="font-size:14px; font-family:var(--font-display); cursor:pointer;" onclick="openEditPantryItemModal(\${item.id})">\${item.name} <i class="fa-solid fa-pen" style="font-size:10px; opacity:0.5;"></i></strong>
                            <p style="color:var(--text-secondary); font-size:11.5px; margin-top:2px;">\${item.quantity} \${item.unit} · \${item.location}</p>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                            <div class="value-stepper">
                                <button class="stepper-action" onclick="updateItemQuantityStepper(\${item.id}, -1)">-</button>
                                <span class="stepper-display">\${item.quantity}</span>
                                <button class="stepper-action" onclick="updateItemQuantityStepper(\${item.id}, 1)">+</button>
                            </div>
                            <button class="app-btn app-btn-ghost app-btn-sm" style="color:var(--danger);" onclick="deletePantryItem(\${item.id})"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    \`;
            grid.appendChild(card);
        });
        wrapper.appendChild(grid);
    } else {
        // List Layout swipable drawer revealers
        filtered.forEach(item => {
            const wrap = document.createElement('div');
            wrap.className = 'swipe-item-wrapper';
            wrap.innerHTML = \`
                        <div class="swipe-actions-under">
                            <div class="under-delete-btn" onclick="deletePantryItem(\${item.id})"><i class="fa-solid fa-trash"></i> Delete</div>
                            <div class="under-checklist-btn" onclick="addLowStockItemToChecklist('\${item.name}')">+ Checklist</div>
                        </div>
                        <div class="swipe-item-foreground" id="foregroundItem-\${item.id}" onmousedown="simulateListItemSwipe(\${item.id})">
                            <span style="font-size:30px;">\${item.image}</span>
                            <div style="flex:1;">
                                <strong style="font-size:13.5px; font-family:var(--font-display); cursor:pointer;" onclick="openEditPantryItemModal(\${item.id})">\${item.name} <i class="fa-solid fa-pen" style="font-size:10px; opacity:0.5;"></i></strong>
                                <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">\${item.quantity} \${item.unit} · Location: \${item.location}</span>
                            </div>
                            <span class="app-badge \${item.status === 'danger' ? 'app-badge-danger' : 'app-badge-success'}">\${item.daysLeft}d left</span>
                        </div>
                    \`;
            wrapper.appendChild(wrap);
        });
    }
}

function filterPantryCategory(category) {
    pantryCategoryFilter = category;
    document.querySelectorAll('.chip-button').forEach(c => c.classList.remove('active-chip'));
    document.getElementById(\`chip-\${category}\`).classList.add('active-chip');
    renderPantryInventoryGridList();
}

function togglePantryLayout(type) {
    pantryLayoutType = type;
    document.getElementById('layoutGridBtn').style.background = type === 'grid' ? 'var(--surface)' : 'none';
    document.getElementById('layoutListBtn').style.background = type === 'list' ? 'var(--surface)' : 'none';
    renderPantryInventoryGridList();
}

function simulateListItemSwipe(id) {
    const foreground = document.getElementById(\`foregroundItem-\${id}\`);
    foreground.style.transform = 'translateX(-40px)';
    setTimeout(() => { foreground.style.transform = 'translateX(0px)'; }, 1000);
}

function updateItemQuantityStepper(id, change) {
    const item = pantryItems.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        const action = change > 0 ? "increased" : "decreased";
        logActivity("fa-solid fa-boxes-stacked", "info", \`<strong>You</strong> \${action} stock level of \${item.name} to \${item.quantity}\`);
        reloadAppUIRenderers();
        showSystemToast("Stock Level Updated", \`\${item.name} quantity assigned: \${item.quantity}\`);
    }
}

function deletePantryItem(id) {
    const item = pantryItems.find(i => i.id === id);
    if (item) {
        logActivity("fa-solid fa-trash", "danger", \`<strong>You</strong> deleted \${item.name} from inventory\`);
    }
    pantryItems = pantryItems.filter(i => i.id !== id);
    reloadAppUIRenderers();
    showSystemToast("Product Deleted", "Removed from pantry inventory logs.");
}
</script>
    <script>

function triggerPantryListReload() {
    renderPantryInventoryGridList();
}

// Add pantry form uploader
function openAddPantryItemModal() {
    document.getElementById('addFoodItemModal').style.display = 'flex';
}

function closeAddPantryItemModal() {
    document.getElementById('addFoodItemModal').style.display = 'none';
}

function saveAddPantryItemForm() {
    const name = document.getElementById('formFoodName').value;
    const qty = parseInt(document.getElementById('formFoodQty').value);
    const unit = document.getElementById('formFoodUnit').value;
    const category = document.getElementById('formFoodCategory').value;
    const expiry = document.getElementById('formFoodExpiry').value;
        }
        reloadAppUIRenderers();
    }
}

function saveCustomShoppingItem() {
    const input = document.getElementById('addShoppingItemName');
    if (!input.value) return;

    shoppingChecklist.unshift({
        id: Date.now(),
        name: input.value,
        quantity: 1,
        unit: "pack",
        checked: false,
        store: "Walmart",
        assigned: "Sarah"
    });

    logActivity("fa-solid fa-cart-plus", "info", \`<strong>You</strong> manually added \${input.value} to shopping list\`);

    input.value = '';
    reloadAppUIRenderers();
    showSystemToast("Checklist Updated", "Custom shopping item registered.");
}

function triggerAIShortageChecklistBuilder() {
    showSystemToast("AI Forecasting", "Analyzing pantry depletion cycles...");
    setTimeout(() => {
        shoppingChecklist.push({
            id: Date.now(),
            name: "Organic Bananas Bundle",
            quantity: 1,
            unit: "bunch",
            checked: false,
            store: "Walmart",
            assigned: "Sarah"
        });
        reloadAppUIRenderers();
        fireCelebrationConfettiLoop();
        showSystemToast("AI Suggestions Synced", "Bananas shortage replenished.");
    }, 800);
}

function acceptAIDepletionSuggestion() {
    shoppingChecklist.push({
        id: Date.now(),
        name: "Fresh Hass Avocados",
        quantity: 3,
        unit: "pcs",
        checked: false,
        store: "Local Shop",
        assigned: "Sarah"
    });
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("AI Restock Added", "Hass Avocados shortages added to shopping checklist.");
}

// ==========================================================================
// CONNECTED IOT SMART FRIDGE SHELVES RENDER
// ==========================================================================
function renderFridgeShelfItems() {
    const topShelf = document.getElementById('fridgeShelfTopItems');
    const bottomShelf = document.getElementById('fridgeShelfBottomItems');
    if (!topShelf || !bottomShelf) return;

    topShelf.innerHTML = '';
    bottomShelf.innerHTML = '';

    const fridgeItems = pantryItems.filter(i => i.location === 'Fridge');
    fridgeItems.forEach((item, index) => {
        const el = document.createElement('div');
        el.style.textAlign = 'center';
        el.style.cursor = 'pointer';
</script>
    <script>
        el.title = \`\${item.name} (\${item.quantity} \${item.unit})\`;
        el.innerHTML = \`
                    <span style="font-size:36px; display:block; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">\${item.image}</span>
                    <span style="font-size:9px; color:#94A3B8; font-weight:800; display:block;">\${item.name.split(' ')[0]}</span>
                \`;

        // Distribute Shelf items
        if (index % 2 === 0) {
            topShelf.appendChild(el);
        } else {
            bottomShelf.appendChild(el);
        }
    });

    if (fridgeItems.length === 0) {
        topShelf.innerHTML = \`<span style="color:#475569; font-size:12px;">Fridge shelves empty. Add items from Pantry!</span>\`;
    }
}

function updateFridgeCompartmentTempDisplay(val) {
    document.getElementById('fridgeCompartmentTempDisplay').innerText = val + "°F";
    document.getElementById('dashboardFridgeSensorText').innerText = \`Internal Temp: \${val}°F · Door Closed\`;
    showSystemToast("Temp Synced", \`Fridge climate adjusted to \${val}°F\`);
}

// ==========================================================================
// FAMILY HUB ACCESS CONTROLS
// ==========================================================================
function renderFamilySyncHubLists() {
    const list = document.getElementById('familyListContainer');
    list.innerHTML = '';

    const permissions = document.getElementById('familyPermissionsControlWrapper');
    permissions.innerHTML = '';

    familyMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'swipe-item-foreground';
        card.style.borderRadius = '12px';
        card.style.border = '1px solid var(--border)';
        card.style.alignItems = 'center';

        let deleteBtnHtml = '';
        if (member.role !== 'Admin') {
            deleteBtnHtml = \`<button class="app-btn app-btn-ghost app-btn-sm" style="color:var(--danger); padding:4px 8px; margin-left:8px;" onclick="removeFamilyMember('\${member.name}')"><i class="fa-solid fa-trash-can"></i></button>\`;
        }
        card.innerHTML = \`
                    <div style="font-size:24px; width:40px; height:40px; border-radius:50%; background:var(--surface-2); display:flex; align-items:center; justify-content:center;">\${member.avatar}</div>
                    <div style="flex:1;">
                        <strong style="font-size:13.5px; font-family:var(--font-display);">\${member.name}</strong>
                        <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">\${member.email}</span>
                    </div>
                    <span class="app-badge" style="background:var(--surface-2);">\${member.role}</span>
                    \${deleteBtnHtml}
                \`;
        list.appendChild(card);

        // Permissions switches
        if (member.role !== 'Admin') {
            const row = document.createElement('div');
            row.className = 'switch-ds-row';
            row.innerHTML = \`
    const total = pantryItems.length;
    const freshness = total === 0 ? 100 : Math.max(0, Math.round(((total - expiring) / total) * 100));
    if (bannerP) bannerP.textContent = \`Your household pantry is \${freshness}% fresh. \${expiring} item\${expiring !== 1 ? 's' : ''} need\${expiring === 1 ? 's' : ''} attention.\`;
}

function recalculateFreshnessIndexGauges() {
    const total = pantryItems.length;
    if (total === 0) {
        setCircularRingGauges(100, "Storage Empty");
        return;
    }

    const expiredOrExpiring = pantryItems.filter(i => i.daysLeft <= 3).length;
    const freshnessPercent = Math.max(0, Math.round(((total - expiredOrExpiring) / total) * 100));

    setCircularRingGauges(freshnessPercent, \`\${expiredOrExpiring} products expiring soon\`);
}

function setCircularRingGauges(percent, descText) {
    const fillCircle = document.getElementById('dashboardFreshnessCircle');
    const circumference = 2 * Math.PI * 32; // r=32 -> 201
    const offset = circumference - (percent / 100) * circumference;
    fillCircle.style.strokeDashoffset = offset;

    document.getElementById('dashboardFreshnessVal').innerText = percent + "%";
    document.getElementById('dashboardFreshnessDesc').innerText = descText;
}

function renderDashboardHeatmapsForecasts() {
    const grid = document.getElementById('dashboardCalendarGrid');
    grid.innerHTML = '';

    const dayTitles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>
    <script>
    dayTitles.forEach(d => {
        const head = document.createElement('div');
        head.style.fontSize = '11px';
        head.style.fontWeight = '800';
        head.style.color = 'var(--text-secondary)';
        head.innerText = d;
        grid.appendChild(head);
    });

    // Plotted 35 visual forecast squares
    for (let day = 1; day <= 35; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-cell-block';
        cell.innerText = day;

        // Highlight exiries risk days matching our mockup data parameters
        if (day === 22) {
            cell.className += ' cell-danger';
            cell.title = "Sourdough Toast Bread expires!";
        }
        if (day === 23 || day === 24) {
            cell.className += ' cell-warning';
        }

        grid.appendChild(cell);
    }
}

function renderDashboardLowStockScrolls() {
    const wrapper = document.getElementById('dashboardLowStockScroll');
    wrapper.innerHTML = '';

    const lowStocks = pantryItems.filter(i => i.daysLeft <= 3);
    if (lowStocks.length === 0) {
        wrapper.innerHTML = \`<span style="font-size:12px; color:var(--text-secondary); padding:10px 0;">All quantities optimal ✅</span>\`;
        return;
    }

    lowStocks.forEach(item => {
        const card = document.createElement('div');
        card.className = 'app-premium-card';
        card.style.minWidth = '160px';
        card.style.padding = '12px';
        card.style.textAlign = 'center';

        card.innerHTML = \`
                    <span style="font-size:30px;">\${item.image}</span>
                    <strong style="font-size:12.5px; display:block; margin-top:6px;">\${item.name}</strong>
                    <div style="margin-top:6px; display:flex; justify-content:center; gap:6px; flex-wrap:wrap;">
                        <span class="app-badge \${item.status === 'danger' ? 'app-badge-danger' : 'app-badge-warning'}">\${item.daysLeft}d left</span>
                        <button class="app-btn app-btn-primary app-btn-sm" style="width:100%; border-radius:6px; height:24px; font-size:10px;" onclick="addLowStockItemToChecklist('\${item.name}')">+ Replenish</button>
                    </div>
                \`;
        wrapper.appendChild(card);
    });
}

function addLowStockItemToChecklist(name) {
    shoppingChecklist.unshift({
        id: Date.now(),
        name: name,
        quantity: 1,
        unit: "pack",
        checked: false,
        store: "Walmart",
        assigned: "Harish"
    });
    logActivity("fa-solid fa-cart-plus", "info", \`<strong>You</strong> auto-added low stock \${name} to shopping list\`);
    renderShoppingChecklists();
    showSystemToast("Pantry Replenished", \`\${name} added to Shopping List\`);
    fireCelebrationConfettiLoop();
}

// ==========================================================================
// VIEW NAVIGATION DIRECTORIES ROUTING
// ==========================================================================
function routeToView(viewId) {
    activeView = viewId;
    document.querySelectorAll('.app-view-panel').forEach(p => p.classList.remove('active-panel'));
    document.getElementById(\`view-\${viewId}\`).classList.add('active-panel');

    // Highlight sidebar & bottom nav items matching target viewId
    document.querySelectorAll('.nav-menu-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-btn').forEach(i => i.classList.remove('active'));

    const sidebarEl = document.getElementById(\`deskNav-\${viewId}\`);
    if (sidebarEl) sidebarEl.classList.add('active');

    const mobileEl = document.getElementById(\`mobNav-\${viewId}\`);
    if (mobileEl) mobileEl.classList.add('active');
}

// ==========================================================================
// SMART INVENTORY MODULE CONTROLLERS
// ==========================================================================
</script>
    <script>
function renderPantryInventoryGridList() {
    const wrapper = document.getElementById('pantryGridItemsWrapper');
    wrapper.innerHTML = '';

    const searchVal = document.getElementById('pantrySearchBox').value.toLowerCase();
    const locationFilter = document.getElementById('pantryLocationSelect').value;

    let filtered = pantryItems;

    const location = document.getElementById('formFoodLocation').value;

    if (!name) {
        alert("Please type a valid item name uploader");
        return;
    }

    pantryItems.unshift({
        id: Date.now(),
        name: name,
        category: category,
        quantity: qty,
        unit: unit,
        expiry: expiry,
        daysLeft: 10,
        status: "success",
        image: "🥗",
        location: location
    });

    closeAddPantryItemModal();
    logActivity("fa-solid fa-plus", "primary", \`<strong>You</strong> added \${qty} \${unit} of \${name} to \${location}\`);
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Product Registered", \`\${name} added successfully.\`);
}

// Edit pantry form uploader
function openEditPantryItemModal(id) {
    const item = pantryItems.find(i => i.id === id);
    if (!item) return;
    document.getElementById('editFormFoodId').value = item.id;
    document.getElementById('editFormFoodName').value = item.name;
    document.getElementById('editFormFoodQty').value = item.quantity;
    document.getElementById('editFormFoodUnit').value = item.unit;
    document.getElementById('editFormFoodCategory').value = item.category;
    document.getElementById('editFormFoodExpiry').value = item.expiry;
    document.getElementById('editFormFoodLocation').value = item.location;
    document.getElementById('editFoodItemModal').style.display = 'flex';
}

function closeEditPantryItemModal() {
    document.getElementById('editFoodItemModal').style.display = 'none';
}

function saveEditPantryItemForm() {
    const id = parseInt(document.getElementById('editFormFoodId').value);
    const item = pantryItems.find(i => i.id === id);
    if (!item) return;

    item.name = document.getElementById('editFormFoodName').value;
    item.quantity = parseInt(document.getElementById('editFormFoodQty').value);
    item.unit = document.getElementById('editFormFoodUnit').value;
    item.category = document.getElementById('editFormFoodCategory').value;
    item.expiry = document.getElementById('editFormFoodExpiry').value;
    item.location = document.getElementById('editFormFoodLocation').value;

    // Recalculate daysLeft
    const expDate = new Date(item.expiry);
    const today = new Date("2026-05-21"); // matching current system local date preset
    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    item.daysLeft = diffDays;
    item.status = diffDays <= 1 ? 'danger' : diffDays <= 3 ? 'warning' : 'success';

    closeEditPantryItemModal();
    logActivity("fa-solid fa-pen", "accent", \`<strong>You</strong> updated details for \${item.name}\`);
    reloadAppUIRenderers();
    fireCelebrationConfettiLoop();
    showSystemToast("Product Updated", \`\${item.name} revised successfully.\`);
}

// ==========================================================================
// SHOPPING LIST COMPONENT CONTROLLERS
// ==========================================================================
function renderShoppingChecklists() {
    const container = document.getElementById('shoppingChecklistContainer');
    container.innerHTML = '';

    const total = shoppingChecklist.length;
    const checkedCount = shoppingChecklist.filter(i => i.checked).length;

    // Calculate dynamic budget limit
    const budgetLimit = parseFloat(document.getElementById('budgetLimitInput')?.value || 200);
    const spent = checkedCount * 8.40 + 20;
    const percent = budgetLimit === 0 ? 0 : Math.min(100, Math.round((spent / budgetLimit) * 100));
</script>
    <script>

    // Update budget metrics dynamically
    document.getElementById('budgetSpentText').innerText = \`Spent: \$\${spent.toFixed(2)}\`;
    document.getElementById('budgetPercentText').innerText = percent + "%";
    document.getElementById('budgetLimitMeterBar').style.width = percent + "%";

    if (total === 0) {
        container.innerHTML = \`
                    <div style="text-align:center; padding:40px 16px; color:var(--text-secondary); display:flex; flex-direction:column; align-items:center; gap:12px;">
                        <div style="width:56px; height:56px; border-radius:50%; background:rgba(var(--primary-rgb), 0.12); display:flex; align-items:center; justify-content:center; border: 1.5px solid rgba(var(--primary-rgb), 0.25);">
                            <i class="fa-solid fa-circle-check" style="font-size:24px; color:var(--primary);"></i>
                        </div>
                        <div>
                            <strong style="font-family:var(--font-display); font-size:14.5px; color:var(--text-primary); display:block;">Checklist perfectly complete</strong>
                            <span style="font-size:12px; color:var(--text-secondary); display:block; margin-top:2px;">All household ingredients are currently stocked!</span>
                        </div>
                    </div>
                \`;
        return;
    }

    shoppingChecklist.forEach(item => {
        const card = document.createElement('div');
        card.className = 'swipe-item-foreground';
        card.style.borderRadius = '12px';
        card.style.border = '1px solid var(--border)';
        card.style.padding = '12px 16px';
        card.style.opacity = item.checked ? '0.6' : '1';

        card.innerHTML = \`
                    <input type="checkbox" \${item.checked ? 'checked' : ''} onchange="toggleShoppingItemCheckedState(\${item.id})" style="width:20px; height:20px; cursor:pointer; accent-color:var(--primary);">
                    <div style="flex:1;">
                        <strong style="font-size:13.5px; text-decoration: \${item.checked ? 'line-through' : 'none'};">\${item.name}</strong>
                        <span style="font-size:11px; color:var(--text-secondary); display:block; margin-top:2px;">\${item.quantity} \${item.unit} · \${item.store}</span>
                    </div>
                    <span class="app-badge" style="background:var(--surface-2); font-size:10px;">\${item.assigned}</span>
                \`;
        container.appendChild(card);
    });
}

function toggleShoppingItemCheckedState(id) {
    const item = shoppingChecklist.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        if (item.checked) {
            logActivity("fa-solid fa-check", "info", \`<strong>You</strong> checked off \${item.name} from shopping list\`);
            fireCelebrationConfettiLoop();
            showSystemToast("Item Checked", "Budget parameters synched.");
        } else {
            logActivity("fa-solid fa-rotate-left", "warning", \`<strong>You</strong> unchecked \${item.name} on shopping list\`);
        familyMembers,
        recentActivity
    };
    localStorage.setItem(\`pantryWise_user_\${currentUserId}\`, JSON.stringify(data));
}

let activeView = 'dashboard';
let pantryCategoryFilter = 'All';
let pantryLayoutType = 'grid';
let activeScannerMode = 'ocr'; // 'ocr' or 'barcode'

// ==========================================================================
// AUTHENTICATION FLOW MANAGEMENTS (STAGE 1 - 9)
// ==========================================================================
function navigateAuthStage(stage) {
    document.querySelectorAll('.auth-slider-stage').forEach(s => s.classList.remove('active-stage'));
    document.getElementById(\`authStage-\${stage}\`).classList.add('active-stage');

    // If going to OTP screen, simulate OTP auth complete after 2 seconds
    if (stage === 7) {
        setTimeout(() => {
            const signupName = document.getElementById('signupName').value || 'New User';
            const userId = signupName.toLowerCase().replace(/[^a-z0-9]/g, '');
            loadUserData(userId, signupName);
            completeAppLoginFlow();
        }, 2000);
    }
}

function triggerBiometricBypass() {
    showSystemToast("Biometric Scan", "FaceID scanned. Synchronizing profile datasets...");
    loadUserData('harish', 'Harish');
    completeAppLoginFlow();
}

async function sendPasswordResetEmail() {
    const email = document.getElementById('recoverEmailInput').value;
    if (!email) return alert("Please enter your email.");

    // Mock Email Sending with OTP
    alert(\`MOCK EMAIL SENT to \${email}!\n\nSubject: Password Reset Request\nYour OTP is: 1234\`);
    navigateAuthStage(10);
}

</script>
    <script>
function verifyResetOTP() {
    const otpCode = document.getElementById('resetOtpInput').value;
    if (otpCode === '1234') {
        alert("OTP verified successfully! You can now set a new password.");
        navigateAuthStage(9);
    } else {
        alert("Invalid OTP! Please try again. (Hint: 1234)");
    }
}

async function saveNewPassword() {
    const newPass = document.getElementById('newPasscodeInput').value;
    if (!newPass) return alert("Please enter a new password.");
    const sb = getSupabase();
    const { error } = await sb.auth.updateUser({ password: newPass });
    if (error) alert("Error: " + error.message);
    else {
        alert("Password updated! Please log in.");
        navigateAuthStage(5);
    }
}

async function completeAppLogin() {
    const loginEmail = document.getElementById('loginEmailInput').value;
    const loginPass = document.getElementById('loginPassInput').value;

    if (!loginEmail || !loginPass) {
        alert("Please enter both email and password.");
        return;
    }

    const sb = getSupabase();
    if (!sb) {
        alert("Supabase is not connected. Please open this page using Live Server (right-click → Open with Live Server in VS Code) instead of opening the file directly.");
        return;
    }

    // Authenticate with Supabase
    const { data, error } = await sb.auth.signInWithPassword({
        email: loginEmail,
        password: loginPass,
    });

    if (error) {
        alert("Login failed: " + error.message);
        return;
    }

    let loginName = loginEmail.split('@')[0];
    // Format name nicely if possible (e.g. harish.kumar -> Harish Kumar)
    loginName = loginName.split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (!loginName) loginName = "User";

    const userId = data.user.id;
    loadUserData(userId, loginName);
    completeAppLoginFlow();
}

function completeAppLoginFlow() {
    document.getElementById('appAuthView').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrollbars when entering dashboard
    window.scrollTo({ top: 0, behavior: 'instant' }); // Ensure dashboard starts exactly at the top
    fireCelebrationConfettiLoop();
    initializeChartVisualizations();
    reloadAppUIRenderers();
}

async function completeAppSignup() {
    const signupName = document.getElementById('signupName').value || 'New User';
    const signupEmail = document.getElementById('signupEmail').value;
    const signupPass = document.getElementById('signupPass').value;

    if (!signupEmail || !signupPass) {
        alert("Please enter both email and password.");
        return;
    }

    const sb = getSupabase();
    if (!sb) {
        alert("Supabase is not connected. Please open this page using Live Server (right-click → Open with Live Server in VS Code) instead of opening the file directly.");
        return;
    }

    // Create user in Supabase
    const { data, error } = await sb.auth.signUp({
        email: signupEmail,
        password: signupPass,
        options: {
            data: {
                full_name: signupName
            }
        }
    });

    if (error) {
</script>
    <script>
        alert("Signup failed: " + error.message);
        return;
    }

    if (data.session == null && data.user != null) {
        alert("Account created! Please check your email to confirm your account before logging in.");
        navigateAuthStage(5); // Go back to login screen
        return;
    }

    alert("Account created successfully! Logging you in...");

    const userId = data.user.id;
    loadUserData(userId, signupName);
    completeAppLoginFlow();
}

// ==========================================================================
// DYNAMIC RENDERING RELOADS FOR HOME DASHBOARDS
// ==========================================================================
function reloadAppUIRenderers() {
    recalculateFreshnessIndexGauges();
    renderDashboardHeatmapsForecasts();
    renderDashboardLowStockScrolls();
    renderPantryInventoryGridList();
    renderShoppingChecklists();
    renderFamilySyncHubLists();
    renderFridgeShelfItems();
    updateDashboardStatCards();
    updateWelcomeBanner();
    updateInventorySummary();
    updateShoppingProgress();
    simulateIoTSensors();
    renderActivityTimeline();
    saveCurrentUserData(); // Persist all real-time mutations
}

function logActivity(icon, color, text) {
    recentActivity.unshift({
        id: Date.now(),
        icon: icon,
        color: color,
        text: text,
        time: "Just now"
    });
    if (recentActivity.length > 10) recentActivity.pop(); // keep last 10
}

function renderActivityTimeline() {
    const container = document.getElementById('recentActivityContainer');
    if (!container) return;
    container.innerHTML = '';

    recentActivity.forEach(act => {
        // rgb calculation for background opacity
        const isHex = act.color.startsWith('#');
        let bgStyle = isHex ? \`background:\${act.color}22; color:\${act.color};\` : \`background:rgba(var(--\${act.color}-rgb), 0.12); color:var(--\${act.color});\`;
        if (act.color === '#A855F7') bgStyle = \`background:rgba(168, 85, 247, 0.12); color:#A855F7;\`;

        const itemHTML = \`
                    <div class="timeline-item">
                        <div class="timeline-dot" style="\${bgStyle}">
                            <i class="\${act.icon}"></i>
                        </div>
                        <div>
                            <div class="timeline-text">\${act.text}</div>
                            <span class="timeline-time">\${act.time}</span>
                        </div>
                    </div>
                \`;
        container.innerHTML += itemHTML;
    });
}

function updateInventorySummary() {
    const sumTotal = document.getElementById('summaryTotal');
    const sumFridge = document.getElementById('summaryFridge');
    const sumPantry = document.getElementById('summaryPantry');
    const sumCounter = document.getElementById('summaryCounter');

    if (sumTotal) sumTotal.textContent = pantryItems.length;
    if (sumFridge) sumFridge.textContent = pantryItems.filter(i => i.location === 'Fridge').length;
    if (sumPantry) sumPantry.textContent = pantryItems.filter(i => i.location === 'Pantry').length;
    if (sumCounter) sumCounter.textContent = pantryItems.filter(i => i.location === 'Counter').length;
}

function updateShoppingProgress() {
    const total = shoppingChecklist.length;
    const checked = shoppingChecklist.filter(i => i.checked).length;
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

    const ring = document.getElementById('shoppingProgressRing');
    const text = document.getElementById('shoppingProgressText');
    const sub = document.getElementById('shoppingProgressSubtitle');

</script>
    <script>
    if (ring) {
        const circumference = 138; // 2 * Math.PI * 22
        const offset = circumference - (percentage / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }
    if (text) text.textContent = \`\${percentage}%\`;
    if (sub) sub.textContent = \`\${checked} of \${total} items checked off today.\`;
}

// ==========================================================================
// IOT COMPRESSOR & THERMAL SIMULATION ENGINE
// ==========================================================================
let iotSimulationInterval = null;
let iotDoorOpen = false;
let iotCurrentTemp = 37.0;
let iotTargetTemp = 37.0;
let iotCompressorOn = false;
let iotPowerHistory = Array(60).fill(10); // Base idle draw 10W

function toggleFridgeDoorState() {
    iotDoorOpen = !iotDoorOpen;
    const btn = document.getElementById('simulateDoorBtn');
    const statusEl = document.getElementById('iotSensorDoor');
    const lightEl = document.getElementById('fridgeInternalLight');
    const camBadge = document.getElementById('cameraStatusBadge');

    if (iotDoorOpen) {
        btn.innerText = "Close Fridge Door";
        btn.classList.replace('app-btn-primary', 'app-btn-secondary');
        btn.style.color = "var(--danger)";
        btn.style.borderColor = "var(--danger)";
        if (statusEl) statusEl.textContent = "OPEN ALARM";
        if (lightEl) lightEl.style.opacity = "1";
        if (camBadge) { camBadge.className = "app-badge app-badge-danger"; camBadge.innerText = "Motion Detected"; }
        showSystemToast("Door Opened", "Internal light activated. Thermal loss accelerating.");
        logActivity("fa-solid fa-door-open", "danger", "<strong>User</strong> opened the main fridge door.");
    } else {
        btn.innerText = "Open Fridge Door";
        btn.classList.replace('app-btn-secondary', 'app-btn-primary');
        btn.style.color = "";

    const interval = setInterval(() => {
        progress += 25;
        showSystemToast("Backing up...", \`Uploading database arrays: \${progress}%\`);
        if (progress >= 100) {
            clearInterval(interval);
            showSystemToast("Backup Saved", "Active household datasets successfully stored in Cloud Drive ✅");
            fireCelebrationConfettiLoop();
        }
    }, 300);
}

function submitFAQKeyword(keyword) {
    if (!keyword) return;
    const chat = document.getElementById('settingsChatbotLog');
    const input = document.getElementById('pantryBotCmdInput');

    chat.innerHTML += \`<div style="text-align:right; margin-bottom:8px;"><strong>You:</strong> \${keyword}</div>\`;
    input.value = '';

    // Premium dynamic visual soundwave processor
    const visualizerId = 'voicewave-' + Date.now();
    chat.innerHTML += \`
                <div id="\${visualizerId}" style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
                    <strong style="color:var(--primary);">PantryBot:</strong>
                    <span style="font-size:12px; color:var(--text-secondary);">Analyzing patterns</span>
                    <span class="voicewave-container">
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                        <span class="voicewave-bar"></span>
                    </span>
                </div>
            \`;
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        const visualizerEl = document.getElementById(visualizerId);
        if (visualizerEl) visualizerEl.remove();

        const query = keyword.toLowerCase();
        if (query.includes('add') && (query.includes('pantry') || query.includes('fridge'))) {
            const match = query.match(/add\s+(\d+)?\s*(.+?)\s+to/);
            let qty = 1;
            let name = "Custom Item";
            if (match) {
                qty = match[1] ? parseInt(match[1]) : 1;
                name = match[2].trim();
            } else {
                name = query.replace('add', '').replace('to pantry', '').replace('to fridge', '').trim();
            }
            name = name.charAt(0).toUpperCase() + name.slice(1);
            pantryItems.unshift({
                id: Date.now(),
</script>
    <script>
                name: name,
                category: "Dairy",
                quantity: qty,
                unit: "pcs",
                expiry: "2026-05-30",
                daysLeft: 9,
                status: "success",
                image: "🥦",
                location: "Fridge"
            });
            reloadAppUIRenderers();
            fireCelebrationConfettiLoop();
            chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Processed! I added **\${qty} \${name}** to your Fridge shelf.</div>\`;
        } else if (query.includes('add') && query.includes('shopping')) {
            const name = query.replace('add', '').replace('to shopping', '').replace('list', '').trim();
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
            shoppingChecklist.unshift({
                id: Date.now(),
                name: formattedName,
                quantity: 1,
                unit: "pack",
                checked: false,
                store: "Walmart",
                assigned: "Sarah"
            });
            reloadAppUIRenderers();
            fireCelebrationConfettiLoop();
            chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Processed! I added **\${formattedName}** to your Shared Shopping Checklist.</div>\`;
        } else if (query.includes('expir') || query.includes('what is expiring')) {
            const expiring = pantryItems.filter(i => i.daysLeft <= 3);
            if (expiring.length > 0) {
                const names = expiring.map(i => \`\${i.image} \${i.name} (\${i.daysLeft}d left)\`).join(', ');
                chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Found **\${expiring.length}** expiring items: \${names}. Recommend cooking today!</div>\`;
            } else {
                chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> All clear! No items are expiring soon in your databases.</div>\`;
            }
        } else if (query.includes('how to configure ocr')) {
            chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Tap OCR Scan in Pantry filters, take photo checkouts to parse date expiries instantly!</div>\`;
        } else if (query.includes('family sharing permissions')) {
            chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Household admins can edit individual Viewers or Editors checklists limits in the Family Sync hub.</div>\`;
        } else {
            chat.innerHTML += \`<div><strong style="color:var(--primary);">PantryBot:</strong> Parsed command! You can type: *"add 2 Apples to pantry"* or *"what is expiring?"* for dynamic automation!</div>\`;
        }
        chat.scrollTop = chat.scrollHeight;
    }, 500);
}

// ==========================================================================
// APPEARANCES & CELEBRATIONS EFFECTS
// ==========================================================================
function toggleGlobalAppearanceTheme() {
    const isDark = document.body.classList.toggle('dark');
    document.getElementById('settingsDarkModeToggle').checked = isDark;
    initializeChartVisualizations();
}

function showSystemToast(title, desc) {
    const toast = document.getElementById('systemToast');
    document.getElementById('toastTitle').innerText = title;
    document.getElementById('toastDesc').innerText = desc;
    toast.style.display = 'flex';
    setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function fireCelebrationConfettiLoop() {
    const canvas = document.getElementById('confetti-celebrate-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10 - 4,
            color: \`hsl(\${Math.random() * 360}, 100%, 50%)\`,
            size: Math.random() * 6 + 4,
            alpha: 1
        });
    }

</script>
</body>

</html>`;
