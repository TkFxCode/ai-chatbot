import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default async function IndexPage() {
  return (
    <div className="relative w-full">
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
      <div className="flex flex-row items-center justify-center size-full ">
        <Card className=" shadow-2xl bg-transparent border-black">
          <CardHeader>
            <CardTitle className="text-4xl text-gray-300">Hey there!</CardTitle>
            <CardDescription className="text-xl text-gray-300">
              We are Learner A.I, a cool chatbot company based in Johannesburg
              (Sandton,Bryanston) <br />
              that aims to create an A.I-powered assistant to help students with
              their research <br /> and studying. Our chatbot will act as a
              guide, tutor, and quiz master, with information sourced from the
              best academic blogs on the web.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src="ai.jpg" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
