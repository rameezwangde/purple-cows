import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogArticles } from '../data/blogArticles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArticleGrid from '../components/insights/ArticleGrid'
import { ArrowLeft } from 'lucide-react'

export default function BlogPost() {
  const { id } = useParams();
  const root = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const article = blogArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="blog-page" ref={root}>
        <style>{`
          .blog-page .site-header { background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.1); }
          .blog-page .nav-links a { color: #111; }
          .blog-page .brand img { background: transparent; padding: 0; }
        `}</style>
        <Navbar />
        <main style={{ minHeight: '60vh', paddingTop: '200px', textAlign: 'center' }}>
          <h2>Article not found</h2>
          <Link to="/blog" style={{ color: '#7a2eff', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get 4 other articles for the "Read More" section
  const otherArticles = blogArticles.filter(a => a.id !== id).slice(0, 4);

  return (
    <div className="blog-page" ref={root}>
      <style>{`
        .blog-page .site-header { background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.1); }
        .blog-page .nav-links a { color: #111; }
        .blog-page .brand img { background: transparent; padding: 0; }
        
        .blog-post-hero {
          padding: 160px 5vw 80px;
          background: #f8f6f2;
          text-align: center;
        }
        .blog-post-meta {
          color: #7a2eff;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }
        .blog-post-title {
          font-family: Anton, Impact, sans-serif;
          font-weight: 400;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.1;
          color: #111;
          max-width: 900px;
          margin: 0 auto 30px;
          text-transform: uppercase;
        }
        .blog-post-image {
          width: 100%;
          max-width: 1100px;
          height: clamp(300px, 50vh, 600px);
          margin: 0 auto 60px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .blog-post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-post-content {
          max-width: 800px;
          margin: 0 auto 80px;
          padding: 0 5vw;
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }
        .blog-post-content h2 {
          font-family: Inter, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin: 50px 0 20px;
          letter-spacing: -0.02em;
        }
        .blog-post-content p {
          margin-bottom: 24px;
        }
        .blog-post-content blockquote {
          margin: 40px 0;
          padding: 30px 40px;
          font-family: Caveat, cursive;
          font-size: 32px;
          line-height: 1.3;
          color: #7a2eff;
          background: #f3edfd;
          border-left: 5px solid #7a2eff;
          border-radius: 0 12px 12px 0;
        }
        .blog-back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
          color: #111;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
        }
        .blog-back-link:hover {
          color: #7a2eff;
        }
      `}</style>
      
      <Navbar />
      
      <main>
        <article>
          <header className="blog-post-hero">
            <Link to="/blog" className="blog-back-link">
              <ArrowLeft size={18} /> Back to Blog
            </Link>
            <div className="blog-post-meta">
              {article.category} • {article.date} • {article.readingTime}
            </div>
            <h1 className="blog-post-title">{article.title}</h1>
            
            <div className="blog-post-image">
              <img src={article.image} alt={article.title} />
            </div>
          </header>
          
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* More Articles Section */}
        <div style={{ background: '#f8f6f2', padding: '80px 4vw' }}>
          <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '40px', fontFamily: 'Anton', textTransform: 'uppercase' }}>More Articles</h3>
            <ArticleGrid articles={otherArticles} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
