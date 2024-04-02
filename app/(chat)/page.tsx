export default async function IndexPage() {
  return (
    <div className="relative">
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/about">About</a>
          <a href="/contactme">Contact me</a>
        </nav>
      </header>
      {/* Background Image */}
      <div className="fixed top-0 left-0 size-full z-[-1]">
        <img src="./background.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
