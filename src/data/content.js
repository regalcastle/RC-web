/* ------------------------------------------------------------------
   All copy, links and image paths live here.
   Replace the files in /public/images using the same file names,
   or change the paths below.
------------------------------------------------------------------- */

export const links = {
  // Social profiles — add your URLs
  instagram: 'https://www.instagram.com/regalcastle.in/',
  facebook: 'https://www.facebook.com/p/Regal-Castle-61582589786059/',
  // WhatsApp / phone (international format, digits only for wa.me)
  whatsapp: 'https://wa.me/919995430222',
  // "Call Now" button
  call: 'tel:+919995430222',
  contacts: [
    { name: 'Ebin', display: '+91 90728 08422', tel: '+919072808422', wa: 'https://wa.me/919072808422' },
    { name: 'Anandu', display: '+91 999 543 0222', tel: '+919995430222', wa: 'https://wa.me/919995430222' },
  ],
}

// Hero "Watch Our Story" video. Supports a YouTube / Vimeo link
// (e.g. https://www.youtube.com/watch?v=XXXX) or a direct .mp4 path.
export const storyVideo = '/videos/story.mp4'

export const images = {
  logo: '/images/logo.png', // dark version — header
  logoLight: '/images/logo-light.png', // light version — footer & mobile menu
  heroDesktop: '/images/hero-desktop.jpg',
  heroMobile: '/images/hero-mobile.jpg',
  aboutMain: '/images/about-main.jpg',
  aboutTop: '/images/about-top.jpg',
  aboutBottom: '/images/about-bottom.jpg',
  footerBlob: '/images/footer-image.jpg',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Complete Event Management Across India',
  lines: ['Your Dream.', 'Our Creation.'],
  script: 'A Celebration to Remember.',
  text: 'From intimate gatherings to grand celebrations, Regal Castle brings your vision to life with creativity, elegance and seamless event coordination.',
  stats: [
    { value: 500, suffix: '+', label: 'Events Managed' },
    { value: 300, suffix: '+', label: 'Happy Clients' },
    { text: 'All Over India', label: 'Our Reach' },
  ],
}

export const about = {
  eyebrow: 'About Regal Castle',
  title: ['Turning', 'Moments Into', 'Memories.'],
  text: 'At Regal Castle, we believe every celebration has a story. Our passion is to turn your vision into a beautifully curated experience with thoughtful planning, exquisite decor and flawless execution.',
  quote: ['Celebrations', 'Curated', 'with Heart.'],
  features: [
    { icon: 'concept', label: 'Creative Concepts' },
    { icon: 'plan', label: 'Personalised Planning' },
    { icon: 'execute', label: 'Seamless Execution' },
  ],
}

export const services = {
  eyebrow: 'Our Services',
  title: ['Events for Every', 'Special Moment.'],
  intro: 'From weddings to corporate events, we bring creativity, precision and passion to every occasion.',
  intro2: 'Complete event management across India, based in Kottayam, Kerala.',
  items: [
    {
      icon: 'rings',
      title: 'Weddings & Receptions',
      titleDesktop: ['Weddings &', 'Receptions'],
      text: 'Timeless celebrations designed around your love story.',
      textMobile: 'Timeless celebrations designed around your unique story.',
      image: '/images/service-wedding.jpg',
    },
    {
      icon: 'gem',
      title: 'Engagements & Pre-Wedding Events',
      titleDesktop: ['Engagements &', 'Pre-Wedding Events'],
      text: 'Beautiful beginnings filled with unforgettable moments.',
      image: '/images/service-engagement.jpg',
    },
    {
      icon: 'cake',
      title: 'Birthday & Private Celebrations',
      titleDesktop: ['Birthday &', 'Private Celebrations'],
      text: 'Personalised themes for life’s special milestones.',
      image: '/images/service-birthday.jpg',
    },
    {
      icon: 'briefcase',
      title: 'Corporate & Business Events',
      titleDesktop: ['Corporate &', 'Business Events'],
      text: 'Professional event management for brands and organisations.',
      image: '/images/service-corporate.jpg',
    },
  ],
}

export const gallery = {
  eyebrow: 'Our Work',
  title: ['Moments', 'We’ve', 'Brought to Life.'],
  titleMobile: ['Moments', 'We’ve Brought', 'to Life.'],
  text: 'Every event is unique. Here’s a glimpse of the celebrations we’ve created across India.',
  cta: 'View Full Gallery',
  items: [
    { label: 'Weddings', image: '/images/gallery-weddings.jpg' },
    { label: 'Engagements', image: '/images/gallery-engagements.jpg' },
    { label: 'Private Celebrations', image: '/images/gallery-private.jpg' },
    { label: 'Corporate Events', image: '/images/gallery-corporate.jpg' },
  ],
}

export const howItWorks = {
  eyebrow: 'How It Works',
  title: 'From Your First Idea to the Final Celebration.',
  steps: [
    { icon: 'chat', title: 'Share Your Vision', text: 'Tell us about your event, ideas, date and requirements.' },
    { icon: 'plan', title: 'Plan Your Experience', text: 'We discuss concepts, decor and every detail.' },
    { icon: 'gear', title: 'Watch It Come Alive', text: 'Our team brings the plan to life with precision.' },
    { icon: 'spark', title: 'Celebrate Every Moment', text: 'Enjoy your event while we take care of the rest.' },
  ],
}

export const testimonials = {
  eyebrow: 'Testimonials',
  title: ['What Our', 'Clients Say'],
  items: [
    {
      quote:
        'Regal Castle made our wedding an unforgettable experience. The decor, planning and coordination were exceptional. Truly a team you can trust!',
      author: 'A Happy Couple',
    },
    {
      quote:
        'From the first call to the last dance, every detail was handled with care. Our guests are still talking about the evening.',
      author: 'A Happy Family',
    },
    {
      quote:
        'Professional, creative and always one step ahead. Our annual corporate gala has never looked or run better.',
      author: 'A Happy Client',
    },
  ],
  images: ['/images/testimonial-1.jpg', '/images/testimonial-2.jpg', '/images/testimonial-3.jpg'],
}

export const cta = {
  eyebrow: 'Let’s Create Something Beautiful',
  title: 'Ready to Plan Your Event?',
  textDesktop: 'Get in touch with our team and let’s turn your ideas into an extraordinary celebration.',
  textMobile:
    'Get in touch with our team and let’s turn your ideas into an extraordinary celebration. We manage events across India, with our home base in Kottayam.',
  whatsappLabel: 'Chat on WhatsApp',
  callLabel: 'Call Now',
  location: { title: 'Kottayam, Kerala, India', text: 'Complete event management across India.' },
}

export const footer = {
  tagline: 'Creating extraordinary celebrations, one event at a time.',
  blobText: ['Complete Event', 'Management', 'Across India'],
  location: 'Kottayam, Kerala, India',
  reach: 'Events Across India',
}
