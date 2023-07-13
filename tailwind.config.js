/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#ffbe0b',
        'custom-orange': '#f3722c',
        'custom-cream': '#eae2b7',
        'custom-maroon': '#780000',
        'custom-naples-yellow': '#f5cd5b'
      },
      backgroundImage: {
        'main-pattern': "url('https://picsum.photos/id/924/1200/')",
        'about-pattern': "url('https://picsum.photos/id/835/1200/')",
        'collections-pattern': "url('https://picsum.photos/id/999/1200/')",
        'contact-pattern': "url('https://picsum.photos/id/3/1200/')"
      }
    },
  },
  plugins: [],
}

