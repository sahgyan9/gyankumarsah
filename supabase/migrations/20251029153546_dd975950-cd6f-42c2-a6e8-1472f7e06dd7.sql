-- Create certificates table if not exists
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  date TEXT NOT NULL,
  description TEXT,
  certificate_image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create Shakti Photon projects table if not exists
CREATE TABLE IF NOT EXISTS public.shakti_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_urls TEXT[],
  technologies TEXT[],
  achievements TEXT[],
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create undergraduate projects/activities table if not exists
CREATE TABLE IF NOT EXISTS public.undergraduate_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  mentor TEXT,
  collaborators TEXT[],
  image_urls TEXT[],
  technologies TEXT[],
  achievements TEXT[],
  date_range TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shakti_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.undergraduate_projects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Public can view certificates" ON public.certificates;
DROP POLICY IF EXISTS "Public can view shakti projects" ON public.shakti_projects;
DROP POLICY IF EXISTS "Public can view undergraduate projects" ON public.undergraduate_projects;
DROP POLICY IF EXISTS "Authenticated users can insert certificates" ON public.certificates;
DROP POLICY IF EXISTS "Authenticated users can update certificates" ON public.certificates;
DROP POLICY IF EXISTS "Authenticated users can delete certificates" ON public.certificates;
DROP POLICY IF EXISTS "Authenticated users can insert shakti projects" ON public.shakti_projects;
DROP POLICY IF EXISTS "Authenticated users can update shakti projects" ON public.shakti_projects;
DROP POLICY IF EXISTS "Authenticated users can delete shakti projects" ON public.shakti_projects;
DROP POLICY IF EXISTS "Authenticated users can insert undergraduate projects" ON public.undergraduate_projects;
DROP POLICY IF EXISTS "Authenticated users can update undergraduate projects" ON public.undergraduate_projects;
DROP POLICY IF EXISTS "Authenticated users can delete undergraduate projects" ON public.undergraduate_projects;

-- Public read access policies
CREATE POLICY "Public can view certificates"
  ON public.certificates FOR SELECT
  USING (true);

CREATE POLICY "Public can view shakti projects"
  ON public.shakti_projects FOR SELECT
  USING (true);

CREATE POLICY "Public can view undergraduate projects"
  ON public.undergraduate_projects FOR SELECT
  USING (true);

-- Authenticated users can manage content
CREATE POLICY "Authenticated users can insert certificates"
  ON public.certificates FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update certificates"
  ON public.certificates FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete certificates"
  ON public.certificates FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert shakti projects"
  ON public.shakti_projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update shakti projects"
  ON public.shakti_projects FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete shakti projects"
  ON public.shakti_projects FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert undergraduate projects"
  ON public.undergraduate_projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update undergraduate projects"
  ON public.undergraduate_projects FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete undergraduate projects"
  ON public.undergraduate_projects FOR DELETE
  TO authenticated
  USING (true);

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio-images', 'portfolio-images', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('certificates', 'certificates', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies
DROP POLICY IF EXISTS "Public can view portfolio images" ON storage.objects;
DROP POLICY IF EXISTS "Public can view certificate images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload portfolio images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload certificates" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update portfolio images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete portfolio images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete certificates" ON storage.objects;

-- Storage policies
CREATE POLICY "Public can view portfolio images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Public can view certificate images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'certificates');

CREATE POLICY "Authenticated users can upload portfolio images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'portfolio-images');

CREATE POLICY "Authenticated users can upload certificates"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'certificates');

CREATE POLICY "Authenticated users can update portfolio images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Authenticated users can delete portfolio images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Authenticated users can delete certificates"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'certificates');