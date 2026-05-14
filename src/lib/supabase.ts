import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://ftomxgquiovafqjqjuke.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjQ4ODc3Y2NkLWNiZjEtNDJlYS1iYjc4LWZjYzYxMGExNjUwOSJ9.eyJwcm9qZWN0SWQiOiJmdG9teGdxdWlvdmFmcWpxanVrZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc4NzQ1NDY5LCJleHAiOjIwOTQxMDU0NjksImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.XHCextt4IuvuPyU9-gFwdB9J-dEQA9sd1TKlRnidsTg';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };