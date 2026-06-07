-- ============================================
-- Student Dashboard - Supabase Setup
-- Run this in your Supabase SQL Editor
-- ============================================

-- Drop the table if it already exists (safe for re-runs)
DROP TABLE IF EXISTS courses;

-- Create the courses table
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Allow public read access (since we use the anon key for fetching)
CREATE POLICY "Allow public read access on courses"
  ON courses
  FOR SELECT
  TO anon
  USING (true);

-- Seed data with 4 courses
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('TypeScript Mastery', 45, 'FileCode'),
  ('Next.js Performance', 90, 'Zap'),
  ('UI/UX Design Principles', 60, 'Palette');
