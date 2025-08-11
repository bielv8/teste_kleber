import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wragghnfslzxudieihwf.supabase.conp,m'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYWdnaG5mc2x6eHVkaWVpaHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDk0ODUsImV4cCI6MjA3MDUyNTQ4NX0.NFTmrVrL8Q4dM3LNCHqsvAaaW3BnbdoNIPIX6l-dzXY'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);