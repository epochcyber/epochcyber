import { Search, Tag, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

const BlogSidebar = ({ onCategoryFilter, onSearch, selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Cybersecurity', count: 8 },
    { name: 'Data Protection', count: 5 },
    { name: 'Network Security', count: 6 },
    { name: 'Threat Analysis', count: 4 },
    { name: 'Security Tools', count: 7 },
    { name: 'Best Practices', count: 9 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Advanced Threat Detection Techniques',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Zero Trust Security Implementation',
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Incident Response Planning',
      date: '2024-01-08'
    },
    {
      id: 5,
      title: 'Endpoint Security Solutions',
      date: '2024-01-05'
    }
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryClick = (categoryName) => {
    onCategoryFilter(categoryName === selectedCategory ? null : categoryName);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="blog-sidebar">
      {/* Search Section */}
      <div className="sidebar-section">
        <h3>
          <Search className="sidebar-icon" />
          Search
        </h3>
        <input
          type="text"
          placeholder="Search blog posts..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Categories Section */}
      <div className="sidebar-section">
        <h3>
          <Tag className="sidebar-icon" />
          Categories
        </h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="sidebar-section">
        <h3>
          <Clock className="sidebar-icon" />
          Recent Posts
        </h3>
        <ul className="recent-posts">
          {recentPosts.map((post) => (
            <li key={post.id} className="recent-post-item">
              <div className="recent-post-title">{post.title}</div>
              <div className="recent-post-date">{formatDate(post.date)}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Archive Section */}
      <div className="sidebar-section">
        <h3>
          <Calendar className="sidebar-icon" />
          Archive
        </h3>
        <ul className="category-list">
          <li className="category-item">
            <span className="category-name">January 2024</span>
            <span className="category-count">12</span>
          </li>
          <li className="category-item">
            <span className="category-name">December 2023</span>
            <span className="category-count">8</span>
          </li>
          <li className="category-item">
            <span className="category-name">November 2023</span>
            <span className="category-count">6</span>
          </li>
          <li className="category-item">
            <span className="category-name">October 2023</span>
            <span className="category-count">9</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
