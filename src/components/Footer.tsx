const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/adipurnamk" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/adipurnamk" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/adipurnamk" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} adipurnamk. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 