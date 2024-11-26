import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/supabase';

export const supabaseAnon = createClient<Database>(
	'https://ahixgcqifvllefpafjim.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoaXhnY3FpZnZsbGVmcGFmamltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNzMyNTMsImV4cCI6MjA0NzY0OTI1M30.eODLMaqIXNrllkNFnSaAlrXZwHWIeTHTvfqjaP_-fcI'
);
