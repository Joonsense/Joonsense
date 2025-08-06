// Supabase Edge Function to fetch latest yields
import { createClient } from 'https://esm.sh/@supabase/supabase-js'
import { serve } from 'https://esm.sh/std@0.168.0/http/server.ts'

serve(async (req) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data, error } = await supabase
    .from('yields')
    .select(`*, assets(*, markets(*))`)
    .order('timestamp', { ascending: false })
    .limit(100)

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }

  return new Response(JSON.stringify({ data }), {
    headers: { 'Content-Type': 'application/json' },
  })
})
