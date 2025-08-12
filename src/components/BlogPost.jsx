import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import './Blog.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog posts data (in a real app, this would come from an API or state management)
  const blogPosts = {
    1: {
      id: 1,
      title: 'Advanced Threat Detection Techniques for Modern Enterprises',
      category: 'Cybersecurity',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '8 min read',
      content: `
        <p>In today's rapidly evolving digital landscape, traditional security measures are no longer sufficient to protect against sophisticated cyber threats. Organizations must adopt advanced threat detection techniques to stay ahead of malicious actors.</p>

        <h2>Understanding Modern Threat Landscape</h2>
        <p>The cybersecurity threat landscape has evolved dramatically over the past decade. Attackers now employ advanced persistent threats (APTs), zero-day exploits, and AI-powered attacks that can bypass conventional security measures.</p>

        <h3>Key Characteristics of Modern Threats:</h3>
        <ul>
          <li>Stealth and persistence</li>
          <li>Multi-vector attack approaches</li>
          <li>AI and machine learning integration</li>
          <li>Supply chain targeting</li>
          <li>Cloud-native attack techniques</li>
        </ul>

        <h2>Advanced Detection Methodologies</h2>
        <p>To combat these sophisticated threats, organizations need to implement advanced detection methodologies that go beyond signature-based detection.</p>

        <h3>Behavioral Analysis</h3>
        <p>Behavioral analysis focuses on identifying anomalous patterns in user and system behavior. By establishing baselines of normal activity, security systems can detect deviations that may indicate malicious activity.</p>

        <h3>Machine Learning Integration</h3>
        <p>Machine learning algorithms can process vast amounts of security data to identify patterns and anomalies that human analysts might miss. These systems continuously learn and adapt to new threat patterns.</p>

        <h2>Implementation Best Practices</h2>
        <p>Successfully implementing advanced threat detection requires a strategic approach:</p>

        <ol>
          <li><strong>Comprehensive Data Collection:</strong> Gather data from all network endpoints, applications, and user activities.</li>
          <li><strong>Real-time Analysis:</strong> Implement systems capable of analyzing threats in real-time to enable rapid response.</li>
          <li><strong>Integration with SIEM:</strong> Ensure your detection systems integrate seamlessly with Security Information and Event Management platforms.</li>
          <li><strong>Continuous Monitoring:</strong> Maintain 24/7 monitoring capabilities with automated alerting systems.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Advanced threat detection is not just a technology investment—it's a strategic imperative for modern enterprises. By implementing these techniques and maintaining a proactive security posture, organizations can significantly improve their ability to detect and respond to sophisticated cyber threats.</p>
      `
    },
    2: {
      id: 2,
      title: 'Zero Trust Security: Implementation Guide',
      category: 'Network Security',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      content: `
        <p>Zero Trust security represents a fundamental shift from traditional perimeter-based security models. This comprehensive guide will walk you through the implementation of Zero Trust architecture in your organization.</p>

        <h2>What is Zero Trust?</h2>
        <p>Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.</p>

        <h3>Core Principles of Zero Trust:</h3>
        <ul>
          <li>Never trust, always verify</li>
          <li>Least privilege access</li>
          <li>Assume breach mentality</li>
          <li>Verify explicitly</li>
          <li>Use least privileged access</li>
        </ul>

        <h2>Implementation Strategy</h2>
        <p>Implementing Zero Trust requires a phased approach that considers your organization's current infrastructure and security posture.</p>

        <h3>Phase 1: Assessment and Planning</h3>
        <p>Begin by conducting a comprehensive assessment of your current security infrastructure, identifying all assets, users, and data flows within your organization.</p>

        <h3>Phase 2: Identity and Access Management</h3>
        <p>Implement robust identity and access management (IAM) solutions that provide strong authentication and authorization capabilities.</p>

        <h2>Key Technologies</h2>
        <p>Several key technologies enable Zero Trust implementation:</p>

        <ol>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Ensures strong user authentication</li>
          <li><strong>Conditional Access:</strong> Provides context-aware access decisions</li>
          <li><strong>Micro-segmentation:</strong> Limits lateral movement within networks</li>
          <li><strong>Endpoint Detection and Response (EDR):</strong> Monitors and protects endpoints</li>
        </ol>

        <h2>Common Challenges and Solutions</h2>
        <p>Organizations often face several challenges when implementing Zero Trust:</p>

        <h3>Legacy System Integration</h3>
        <p>Many organizations struggle with integrating legacy systems into a Zero Trust framework. The solution involves gradual modernization and the use of proxy solutions where direct integration isn't possible.</p>

        <h3>User Experience Impact</h3>
        <p>Zero Trust can impact user experience if not implemented thoughtfully. Focus on seamless authentication methods and risk-based access controls to minimize friction.</p>

        <h2>Measuring Success</h2>
        <p>Success in Zero Trust implementation can be measured through various metrics including reduced security incidents, improved compliance posture, and enhanced visibility into network activities.</p>
      `
    },
    3: {
      id: 3,
      title: 'Cloud Security Best Practices for 2024',
      category: 'Data Protection',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      content: `
        <p>As organizations continue their digital transformation journey, cloud security remains a top priority. This guide outlines the essential security practices every organization should follow in 2024.</p>

        <h2>The Current Cloud Security Landscape</h2>
        <p>Cloud adoption has accelerated dramatically, with organizations leveraging multiple cloud providers and hybrid architectures. This complexity introduces new security challenges that require updated approaches and best practices.</p>

        <h3>Key Security Challenges in 2024:</h3>
        <ul>
          <li>Multi-cloud complexity</li>
          <li>Container and serverless security</li>
          <li>Data sovereignty and compliance</li>
          <li>Identity and access management at scale</li>
          <li>Supply chain security</li>
        </ul>

        <h2>Fundamental Security Practices</h2>
        <p>Implementing these fundamental practices forms the foundation of a robust cloud security strategy.</p>

        <h3>1. Implement Strong Identity and Access Management</h3>
        <p>Use centralized identity providers, implement multi-factor authentication, and follow the principle of least privilege for all cloud resources.</p>

        <h3>2. Enable Comprehensive Logging and Monitoring</h3>
        <p>Ensure all cloud activities are logged and monitored. Use cloud-native security tools and integrate with your existing SIEM solutions.</p>

        <h3>3. Encrypt Data at Rest and in Transit</h3>
        <p>Implement encryption for all sensitive data, both when stored and when transmitted between services and users.</p>

        <h2>Advanced Security Strategies</h2>
        <p>Beyond the fundamentals, organizations should implement advanced security strategies to address sophisticated threats.</p>

        <h3>Cloud Security Posture Management (CSPM)</h3>
        <p>CSPM tools help identify misconfigurations, compliance violations, and security risks across your cloud infrastructure.</p>

        <h3>Container Security</h3>
        <p>As containerization becomes more prevalent, implement container-specific security measures including image scanning, runtime protection, and network segmentation.</p>

        <h2>Compliance and Governance</h2>
        <p>Maintaining compliance in the cloud requires ongoing attention to regulatory requirements and industry standards.</p>

        <ol>
          <li><strong>Data Classification:</strong> Classify data based on sensitivity and regulatory requirements</li>
          <li><strong>Regular Audits:</strong> Conduct regular security audits and compliance assessments</li>
          <li><strong>Policy Automation:</strong> Implement automated policy enforcement to maintain consistent security posture</li>
        </ol>

        <h2>Future Considerations</h2>
        <p>As cloud technology continues to evolve, organizations must stay ahead of emerging trends and threats. This includes preparing for quantum computing impacts, AI-driven security tools, and evolving regulatory landscapes.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-detail">
        <button onClick={() => navigate('/blog')} className="back-to-blog">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h1>Blog post not found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="blog-post-detail">
      <button onClick={() => navigate('/blog')} className="back-to-blog">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </button>

      <article>
        <div className="blog-post-header">
          <h1>{post.title}</h1>
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
            <span>
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div 
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
