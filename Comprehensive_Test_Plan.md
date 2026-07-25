# PantryWise Comprehensive Test Plan

## 1. UI/UX Testing (Test Cases 1-25)
1. Verify the application layout adapts correctly to mobile screens (< 768px).
2. Verify the application layout adapts correctly to tablet screens (768px - 1024px).
3. Verify the application layout adapts correctly to desktop screens (> 1024px).
4. Verify the Dark Mode toggle changes all primary surface colors correctly.
5. Verify the Light Mode toggle restores the default color palette.
6. Verify font families (Inter, Outfit) load and apply correctly across all browsers.
7. Verify text contrast ratios meet WCAG 2.1 AA standards in Light Mode.
8. Verify text contrast ratios meet WCAG 2.1 AA standards in Dark Mode.
9. Verify all interactive elements (buttons, links) have a visible hover state.
10. Verify all interactive elements have a visible active/pressed state.
11. Verify the bottom tab navigation bar is sticky on mobile devices.
12. Verify the side navigation menu expands and collapses smoothly on desktop.
13. Verify the Chart.js/react-native-chart-kit animations load smoothly without blocking the main thread.
14. Verify input fields have visible focus states (e.g., a colored border ring).
15. Verify error messages are displayed with the correct semantic color (Red/Danger).
16. Verify success messages are displayed with the correct semantic color (Green/Success).
17. Verify the floating action button (FAB) for the barcode scanner is easily reachable on mobile.
18. Verify the loading spinner or skeleton loaders appear during asynchronous data fetching.
19. Verify images (like avatars) have fallback placeholders if the image URL fails to load.
20. Verify touch targets on mobile are at least 44x44 CSS pixels.
21. Verify modal dialogs (like the Add Item popup) center correctly on all screen sizes.
22. Verify modal dialogs have a dark semi-transparent overlay behind them.
23. Verify clicking outside a modal dialog closes it.
24. Verify long lists of pantry items can be scrolled smoothly without jitter.
25. Verify empty states (e.g., no items in pantry) display a user-friendly illustration and prompt.

## 2. Functional Testing (Test Cases 26-60)
26. Verify a new user can successfully register with a valid email and password.
27. Verify an existing user can log in with valid credentials.
28. Verify login fails with an incorrect password and displays an error.
29. Verify login fails with an unregistered email and displays an error.
30. Verify the "Forgot Password" flow sends a reset email to the user.
31. Verify the user can successfully log out, clearing local session tokens.
32. Verify the user is redirected to the Auth screen if they try to access the Dashboard while logged out.
33. Verify a user can create a new "Family" group.
34. Verify a user can generate an invite link or code for their Family group.
35. Verify another user can join a Family using a valid invite code.
36. Verify a user can add a new item to the pantry with a name and quantity.
37. Verify a user can edit the quantity of an existing pantry item.
38. Verify a user can delete a pantry item.
39. Verify the total item count on the Dashboard updates immediately after adding an item.
40. Verify the total item count on the Dashboard updates immediately after deleting an item.
41. Verify a user can assign an expiration date to a pantry item.
42. Verify items close to their expiration date appear in the "Expiring Soon" widget.
43. Verify a user can categorize an item (e.g., Dairy, Produce, Meat).
44. Verify the pantry list can be filtered by category.
45. Verify the pantry list can be sorted alphabetically.
46. Verify the pantry list can be sorted by expiration date.
47. Verify the Barcode Scanner successfully activates the device camera.
48. Verify the Barcode Scanner successfully reads a standard UPC-A barcode.
49. Verify the Barcode Scanner successfully reads an EAN-13 barcode.
50. Verify a scanned barcode queries the external product API to fetch the item name.
51. Verify a scanned item is automatically added to the inventory upon confirmation.
52. Verify a user can remove a member from their Family group.
53. Verify a removed member instantly loses access to the Family's shared inventory.
54. Verify data synchronization across devices (e.g., User A adds an item, User B sees it refresh).
55. Verify the application handles offline mode gracefully (displays a "No Connection" banner).
56. Verify local changes made offline are queued for synchronization.
57. Verify local changes sync to the backend once the internet connection is restored.
58. Verify a user can update their profile name.
59. Verify a user can update their profile avatar.
60. Verify the app handles large inventories (e.g., 1000+ items) using pagination or infinite scroll.

## 3. Input Validation Testing (Test Cases 61-80)
61. Verify the email input field rejects strings without an "@" symbol.
62. Verify the email input field rejects strings without a domain suffix (e.g., ".com").
63. Verify the password input enforces a minimum length of 8 characters during signup.
64. Verify the password input requires at least one number during signup.
65. Verify the password input requires at least one special character during signup.
66. Verify the "Item Name" field cannot be submitted empty.
67. Verify the "Item Name" field strips trailing and leading whitespace before submission.
68. Verify the "Item Name" field rejects scripts or HTML tags (XSS prevention).
69. Verify the "Quantity" field only accepts positive integers.
70. Verify the "Quantity" field rejects alphabetic characters.
71. Verify the "Quantity" field rejects floating-point numbers (e.g., 1.5).
72. Verify the "Quantity" field has a maximum upper limit (e.g., 9999) to prevent overflow.
73. Verify the "Expiration Date" field does not accept dates in the past.
74. Verify the "Expiration Date" field correctly formats dates based on the user's locale.
75. Verify the Barcode Scanner gracefully handles invalid or corrupted barcode inputs.
76. Verify the Search input is rate-limited (debounced) to prevent excessive API calls.
77. Verify the API rejects requests with missing JWT authorization headers.
78. Verify the API rejects SQL injection payloads in the search parameter (e.g., `' OR 1=1--`).
79. Verify profile avatar uploads restrict file types to standard images (JPEG, PNG, WebP).
80. Verify profile avatar uploads enforce a maximum file size limit (e.g., 5MB).

## 4. Unit Testing (Test Cases 81-100)
81. Test the `calculateTotalInventory` utility function returns the correct sum of an item array.
82. Test the `calculateTotalInventory` function returns 0 for an empty array.
83. Test the `formatDateString` function returns `MM/DD/YYYY` for US locales.
84. Test the `formatDateString` function returns `DD/MM/YYYY` for EU locales.
85. Test the `isExpiringSoon` function returns `true` if the date is within 3 days.
86. Test the `isExpiringSoon` function returns `false` if the date is beyond 3 days.
87. Test the `generateInviteCode` function returns a string of exactly 6 alphanumeric characters.
88. Test the `validateEmail` regex function returns `true` for `test@example.com`.
89. Test the `validateEmail` regex function returns `false` for `test@example`.
90. Test the `validatePasswordStrength` function returns `strong` for valid complex passwords.
91. Test the `validatePasswordStrength` function returns `weak` for passwords under 8 chars.
92. Test the `ThemeContext` reducer correctly toggles the `isDarkMode` state boolean.
93. Test the `AuthContext` reducer correctly sets the `user` object upon the `LOGIN_SUCCESS` action.
94. Test the `AuthContext` reducer correctly clears the `user` object upon the `LOGOUT` action.
95. Test the Supabase `fetchPantryItems` wrapper function correctly parses the returning JSON array.
96. Test the Supabase `fetchPantryItems` wrapper function handles network timeouts and returns a formatted error object.
97. Test the `parseBarcodeData` function extracts the correct UPC string from the raw camera output.
98. Test the `DashboardScreen` component mounts without crashing given mock data.
99. Test the `InventoryList` component renders the exact number of child `ItemCard` components as the input array length.
100. Test the `ItemCard` component triggers the `onDelete` callback when the trash icon is clicked.

## 5. Deployment & Configuration Testing (Test Cases 101-115)
101. Verify the application builds successfully using `npm run build` or `npx expo export`.
102. Verify all environment variables (Supabase URL, API keys) are injected correctly into the production bundle.
103. Verify no source maps or debug logs are exposed in the production build.
104. Verify the database Row Level Security (RLS) policies are active on the production Supabase project.
105. Verify a user cannot query `pantry_items` belonging to a `family_id` they are not a member of.
106. Verify CORS policies are correctly configured to only accept requests from the deployed application domain.
107. Verify the production hosting environment serves the app over HTTPS.
108. Verify the domain SSL certificate is valid and not expired.
109. Verify static assets (images, CSS, JS) are served with correct Cache-Control headers for performance.
110. Verify the application scores above 90 on Google Lighthouse (Performance).
111. Verify the application scores above 90 on Google Lighthouse (Accessibility).
112. Verify the application scores above 90 on Google Lighthouse (SEO).
113. Verify automated database backups are enabled and scheduled.
114. Verify API rate limiting is enforced on the authentication endpoints to prevent brute force attacks.
115. Verify the terms of service and privacy policy pages are accessible from the deployment root.
