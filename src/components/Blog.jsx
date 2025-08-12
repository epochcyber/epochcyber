import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import BlogSidebar from './BlogSidebar';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Advanced Threat Detection Techniques for Modern Enterprises',
      excerpt: 'Explore cutting-edge methods for identifying and mitigating sophisticated cyber threats in today\'s digital landscape.',
      category: 'Cybersecurity',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'Threat Detection'
    },
    {
      id: 2,
      title: 'Zero Trust Security: Implementation Guide',
      excerpt: 'A comprehensive guide to implementing Zero Trust architecture in your organization for enhanced security.',
      category: 'Network Security',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'Zero Trust'
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for 2024',
      excerpt: 'Essential security practices every organization should follow when migrating to and operating in the cloud.',
      category: 'Data Protection',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'Cloud Security'
    },
    {
      id: 4,
      title: 'Incident Response Planning: A Step-by-Step Guide',
      excerpt: 'Learn how to create an effective incident response plan to minimize damage and recovery time during security breaches.',
      category: 'Best Practices',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '15 min read',
      image: 'Incident Response'
    },
    {
      id: 5,
      title: 'Endpoint Security Solutions Comparison',
      excerpt: 'Compare the latest endpoint security solutions and find the best fit for your organization\'s needs.',
      category: 'Security Tools',
      author: 'David Wilson',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'Endpoint Security'
    },
    {
      id: 6,
      title: 'AI-Powered Threat Analysis: The Future of Cybersecurity',
      excerpt: 'Discover how artificial intelligence is revolutionizing threat detection and analysis in cybersecurity.',
      category: 'Threat Analysis',
      author: 'Lisa Anderson',
      date: '2024-01-03',
      readTime: '11 min read',
      image: 'AI Security'
    },
    {
      id: 7,
      title: 'Multi-Factor Authentication: Beyond Passwords',
      excerpt: 'Explore advanced MFA solutions and their role in creating a robust security framework.',
      category: 'Data Protection',
      author: 'Robert Taylor',
      date: '2024-01-01',
      readTime: '6 min read',
      image: 'MFA Security'
    },
    {
      id: 8,
      title: 'Penetration Testing: Essential Techniques and Tools',
      excerpt: 'A comprehensive overview of penetration testing methodologies and the tools that security professionals use.',
      category: 'Security Tools',
      author: 'Jennifer Brown',
      date: '2023-12-28',
      readTime: '14 min read',
      image: 'Pen Testing'
    }
  ];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-container">
      <div className="blog-main">
        <div className="blog-header">
          <h1>EpochCyber Blog</h1>
          <p className="blog-subtitle">
            Stay updated with the latest cybersecurity insights, trends, and best practices
          </p>
        </div>

        <div className="blog-posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-post-card"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="blog-post-image">
                  {post.image}
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-meta">
                    <span className="blog-post-category">{post.category}</span>
                    <span className="blog-post-date">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="blog-post-author">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <a href="#" className="read-more" onClick={(e) => e.preventDefault()}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              color: 'rgba(255, 255, 255, 0.6)' 
            }}>
              <h3>No blog posts found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </div>

      <BlogSidebar
        onCategoryFilter={handleCategoryFilter}
        onSearch={handleSearch}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Blog;
