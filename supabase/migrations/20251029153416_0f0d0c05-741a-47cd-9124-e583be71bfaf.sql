-- Create tables for portfolio data

-- Profile/CV information table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT,
  email TEXT,
  phone TEXT,
  location TEXT,
  about_me TEXT,
  profile_image_url TEXT,
  cv_pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Certificates table
CREATE TABLE public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  date TEXT NOT NULL,
  description TEXT,
  certificate_image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Shakti Photon projects table
CREATE TABLE public.shakti_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_urls TEXT[],
  technologies TEXT[],
  achievements TEXT[],
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Undergraduate projects/activities table
CREATE TABLE public.undergraduate_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- 'research', 'academic', 'hackathon', 'eca'
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
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shakti_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.undergraduate_projects ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables (portfolio is public)
CREATE POLICY "Public can view profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Public can view certificates"
  ON public.certificates FOR SELECT
  USING (true);

CREATE POLICY "Public can view shakti projects"
  ON public.shakti_projects FOR SELECT
  USING (true);

CREATE POLICY "Public can view undergraduate projects"
  ON public.undergraduate_projects FOR SELECT
  USING (true);

-- Authenticated users can manage content (for admin access later)
CREATE POLICY "Authenticated users can insert profiles"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update profiles"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (true);

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

-- Create storage buckets for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio-images', 'portfolio-images', true);

INSERT INTO storage.buckets (id, name, public) 
VALUES ('certificates', 'certificates', true);

-- Storage policies for public read access
CREATE POLICY "Public can view portfolio images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-images');

CREATE POLICY "Public can view certificate images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'certificates');

-- Authenticated users can upload images
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

-- Trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();