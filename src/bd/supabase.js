import { createClient } from '@supabase/supabase-js'
//creando conexion con supabase
const supabaseUrl = 'https://fwenbohmshqxqteyvyie.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZW5ib2htc2hxeHF0ZXl2eWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2Mzk0MTcsImV4cCI6MjAyMjIxNTQxN30.C3jC85q8IVS-7Pq92IyM_7ndmjDYSKki1hlJhdRx3_Y'


//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)


console.log('conexión', supabase)