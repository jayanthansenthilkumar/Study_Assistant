# Study Assistant - Deployment Guide

## Database Setup

You need to run the following SQL migrations in your Supabase dashboard in this order:

### 1. First Migration - Notes and Study Materials
File: `supabase/migrations/20251026000001_add_notes_and_materials.sql`

This creates:
- `notes` table for user notes
- `study_materials` table for learning resources
- Row-level security policies
- Automatic timestamp triggers
- GIN indexes for tag searches

### 2. Second Migration - User Profiles
File: `supabase/migrations/20251026000002_add_profiles_table.sql`

This creates:
- `profiles` table for user preferences and profile data
- Automatic profile creation on user signup
- Row-level security policies
- Preference storage (JSON)

## How to Deploy

### Option 1: Using Supabase Dashboard
1. Go to your Supabase project
2. Navigate to SQL Editor
3. Copy the content from `supabase/migrations/20251026000001_add_notes_and_materials.sql`
4. Run the SQL
5. Copy the content from `supabase/migrations/20251026000002_add_profiles_table.sql`
6. Run the SQL

### Option 2: Using Supabase CLI
```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Push migrations
supabase db push
```

## Environment Variables

Make sure your `.env` file has:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Features After Deployment

Once deployed, users will have access to:

### ✅ Dashboard
- Real-time statistics from database
- Chat session counts
- Notes and materials counts
- Learning streak tracking

### ✅ Chat
- AI-powered conversations
- Message history stored in database
- Session management

### ✅ Notes
- Create, read, update, delete notes
- Tag-based organization
- Full-text search capability

### ✅ Study Materials
- Organize learning resources
- Categorization system
- URL linking
- CRUD operations

### ✅ Analytics
- Learning activity tracking
- Weekly and monthly statistics
- Progress visualization
- AI-powered insights

### ✅ Settings
- User preferences saved to database
- Email notification settings
- Auto-save preferences
- Dark mode toggle (UI only)
- Profile information display

## Security

All tables have Row-Level Security (RLS) enabled:
- Users can only access their own data
- Automatic user ID association
- Secure by default

## Testing

After deployment, test:
1. Sign up a new user
2. Create a chat session
3. Add a note
4. Add study material
5. Check analytics page
6. Update settings
7. Verify all data persists after logout/login

## Support

For issues, check:
- Supabase dashboard logs
- Browser console for errors
- Network tab for API calls
