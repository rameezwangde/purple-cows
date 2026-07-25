import imgBranding from '../assets/blog/branding.png'
import imgSeo from '../assets/blog/seo.png'
import imgAi from '../assets/blog/ai.png'
import imgWeb from '../assets/blog/web.png'
import editorialCollage from '../assets/insights/editorial-collage.png'

export const blogCategories = [
  'All',
  'Branding',
  'Website Design',
  'SEO',
  'Performance Marketing',
  'Social Media',
  'Artificial Intelligence',
  'Content Marketing',
  'Business Growth',
  'UI/UX Design',
  'Case Studies'
]

const sampleContent = `
<h2>Introduction</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h2>Key Takeaways</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<blockquote>"The best marketing doesn't feel like marketing."</blockquote>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<h2>Conclusion</h2>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
`;

export const blogArticles = [
  {
    id: 'unforgettable-brands',
    title: 'Why Great Brands Don\'t Compete—They Become Unforgettable',
    description: 'The world\'s most successful businesses rarely win by shouting the loudest. They win by creating memorable experiences, distinctive branding, and consistent customer journeys. Discover how strategic design, storytelling, and digital marketing work together to transform businesses into brands people remember.',
    category: 'Branding',
    featured: true,
    image: imgBranding,
    date: 'Jul 24, 2026',
    readingTime: '7 min read',
    visual: 'psychology',
    content: sampleContent
  },
  {
    id: 'psychology-memorable',
    title: 'The Psychology Behind Memorable Brand Identities',
    description: 'A memorable logo is only the beginning. Learn how colors, typography, messaging, and emotional design influence customer perception and create lasting brand recognition.',
    category: 'Branding',
    image: imgBranding,
    date: 'Jul 20, 2026',
    readingTime: '5 min read',
    visual: 'idea',
    content: sampleContent
  },
  {
    id: 'high-performance-website',
    title: 'Why Every Business Needs a High-Performance Website in 2026',
    description: 'Your website should generate leads—not just look attractive. Discover the essential features every modern business website needs to convert visitors into customers.',
    category: 'Website Design',
    image: imgWeb,
    date: 'Jul 15, 2026',
    readingTime: '6 min read',
    visual: 'notebook',
    content: sampleContent
  },
  {
    id: 'seo-smarter',
    title: 'SEO Isn\'t Dead—It\'s Smarter Than Ever',
    description: 'Search engines continue to evolve. Learn the latest SEO strategies, AI search optimization techniques, and content practices that improve visibility and organic traffic.',
    category: 'SEO',
    image: imgSeo,
    date: 'Jul 10, 2026',
    readingTime: '8 min read',
    visual: 'search',
    content: sampleContent
  },
  {
    id: 'ai-changing-marketing',
    title: 'AI Is Changing Marketing Faster Than Most Businesses Realize',
    description: 'Artificial intelligence is transforming content creation, customer support, advertising, automation, and analytics. Explore how businesses can leverage AI without losing authenticity.',
    category: 'Artificial Intelligence',
    image: imgAi,
    date: 'Jul 5, 2026',
    readingTime: '5 min read',
    visual: 'ai',
    content: sampleContent
  },
  {
    id: 'building-trust',
    title: 'Building Trust Through Consistent Brand Design',
    description: 'Customers trust brands that maintain consistency across websites, social media, advertising, and communication. Learn why consistency directly impacts customer confidence and sales.',
    category: 'Branding',
    image: imgBranding,
    date: 'Jun 28, 2026',
    readingTime: '4 min read',
    visual: 'chess',
    content: sampleContent
  },
  {
    id: 'social-media-not-viral',
    title: 'Social Media Isn\'t About Going Viral',
    description: 'Success comes from building relationships—not chasing trends. Discover practical social media strategies that create loyal communities and sustainable business growth.',
    category: 'Social Media',
    image: editorialCollage,
    date: 'Jun 22, 2026',
    readingTime: '6 min read',
    visual: 'social',
    content: sampleContent
  },
  {
    id: 'speed-matters',
    title: 'Why Speed Matters More Than Ever',
    description: 'A one-second delay can cost valuable leads. Learn how website speed affects SEO rankings, user experience, and conversion rates.',
    category: 'Website Design',
    image: imgWeb,
    date: 'Jun 15, 2026',
    readingTime: '5 min read',
    visual: 'analytics',
    content: sampleContent
  },
  {
    id: 'digital-marketing-trends',
    title: 'Digital Marketing Trends Every Business Should Watch',
    description: 'From AI-powered personalization to voice search and interactive content, explore the trends shaping the future of digital marketing.',
    category: 'Performance Marketing',
    image: imgAi,
    date: 'Jun 10, 2026',
    readingTime: '7 min read',
    visual: 'future',
    content: sampleContent
  }
]
