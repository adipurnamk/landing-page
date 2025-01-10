const Hero = () => {
  return (
    <section className="pt-20 pb-12 px-6">
      <div className="container mx-auto text-center">
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHh8CvLFMBcdw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1733888494501?e=1737104400&v=beta&t=qsno8J8PchLVUmbr6i9t8drghmkxrBPLOo9okieVlZM"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Muhammad Adipurna Kusumawardana
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Site Reliability Engineer | DevOps Engineer | Cloud Engineer
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero 