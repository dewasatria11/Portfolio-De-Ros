import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkCols() {
  const { data, error } = await supabase.from('projects').select('*').limit(1);
  if (error) console.error(error);
  else if (data && data.length > 0) console.log(Object.keys(data[0]));
  else console.log('Empty table, cannot determine keys easily without reflection, but assuming lowercase.');
}
checkCols();
