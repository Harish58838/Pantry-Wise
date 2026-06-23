# React Native & Supabase Migration Guide for PantryWise

## 1. Analysis of Current Application
The current PantryWise app is a massive single-file web application (`index.html` ~5000 lines). It uses:
- **Vanilla HTML/CSS/JS**: No frontend frameworks.
- **Custom Design System**: Extensive use of CSS variables for theming (Light/Dark mode).
- **Chart.js**: For rendering data visualizations in the dashboard.
- **Local Storage/Mock Data**: Currently simulating backend interactions.

### Features Identified:
1. **Authentication Overlay**: Login/Signup flow with PIN/OTP inputs.
2. **Dashboard**: Stats, recent activities, and charts.
3. **Inventory Management**: Adding, scanning, and tracking pantry items.
4. **Family Sync Hub**: Managing household members.

## 2. Supabase Manual Setup Instructions
Since you are new to Supabase, follow these exact manual steps to set up your backend:

### Step 1: Create a Project
1. Go to [database.new](https://database.new) or [supabase.com](https://supabase.com) and sign up/log in.
2. Click **New Project**, select an organization, give it a name (e.g., `PantryWise`), and set a secure database password.
3. Wait a few minutes for the project to provision.

### Step 2: Get API Keys
1. In your Supabase dashboard, go to **Project Settings** (gear icon) -> **API**.
2. Copy the **Project URL** and the **anon / public key**. You will need these for your React Native app.

### Step 3: Set Up Authentication
1. Go to **Authentication** (left sidebar) -> **Providers**.
2. **Email** is enabled by default. You can disable "Confirm email" for testing purposes under **Auth Providers -> Email**.

### Step 4: Create Database Tables
Go to the **SQL Editor** (left sidebar) and run the following SQL to create your tables:

```sql
-- 1. Profiles Table (Extends Supabase Auth)
create table public.profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  family_id uuid
);

-- 2. Families Table
create table public.families (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Pantry Items Table
create table public.pantry_items (
  id uuid default uuid_generate_v4() primary key,
  family_id uuid references public.families not null,
  name text not null,
  quantity integer default 1,
  category text,
  expiry_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.families enable row level security;
alter table public.pantry_items enable row level security;

-- (You will need to write specific RLS policies to restrict data access per family)
```

## 3. React Native Conversion Strategy
To convert your Web App to React Native, the following mental shifts are required:
*   `<div>` becomes `<View>`
*   `<p>`, `<h1>`, `<span>` become `<Text>`
*   `<button>` becomes `<TouchableOpacity>` or `<Pressable>`
*   `<input>` becomes `<TextInput>`
*   `<img>` becomes `<Image>`
*   **CSS**: Replaced by React Native's `StyleSheet.create({ ... })` using Flexbox.

### Initializing the Project
You will need Node.js installed. Open your terminal and run:
```bash
npx create-expo-app PantryWiseMobile -t expo-template-blank-typescript
cd PantryWiseMobile
npm install @supabase/supabase-js @react-navigation/native @react-navigation/native-stack react-native-reanimated react-native-gesture-handler react-native-safe-area-context react-native-screens @expo/vector-icons
```
