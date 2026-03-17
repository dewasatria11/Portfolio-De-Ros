import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ubgchjdxxrugmznrsypa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZ2NoamR4eHJ1Z216bnJzeXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MTQzNTUsImV4cCI6MjA4OTE5MDM1NX0.IY4WGRXqKUhagyBE9b8vegUIUyxBgEuK-QwXWR9oZ8g'
);

async function check() {
  const { data, error } = await supabase.from('certificates').select('*');
  console.log('Certificates data:', data);
  if (error) console.error('Certificates error:', error);

  const { data: buckets, error: bucketErr } = await supabase.storage.listBuckets();
  console.log("Buckets:", buckets?.map(b => ({ name: b.name, public: b.public })));
  if (bucketErr) console.error("Bucket err:", bucketErr);
}
check();
