import { MapPin, Mail, Linkedin, MessageCircle } from "lucide-react";
import { BsTelegram } from "react-icons/bs";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "samxsouta@gmail.com",
      href: "mailto:samxsouta@gmail.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-400",
      hoverColor: "hover:bg-purple-500/20"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Message me instantly",
      href: "https://wa.me/601117901410",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-400",
      hoverColor: "hover:bg-green-500/20"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional network",
      href: "https://www.linkedin.com/in/sam-souta-a28384321/",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      icon: BsTelegram,
      title: "Telegram",
      description: "Join our official Telegram channel",
      href: "https://t.me/samsouta",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Petaling Jaya, Malaysia",
      href: null,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-400",
      hoverColor: "hover:bg-red-500/20"
    }
  ];

  return (
    <main className="pt-16 lg:pt-20 bg-gradient-to-br from-[#0f0f0f] via-[#121312] to-[#1a1a1a] text-white min-h-screen">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Let's Connect</h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Choose your preferred way to reach out. I'm always excited to discuss new opportunities!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const content = (
                  <div className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-gray-800/50 ${method.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-700/50 cursor-pointer`}>
                    <div className="flex items-center space-x-4">
                      <div className={`${method.bgColor} p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${method.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg sm:text-xl mb-1 text-white group-hover:text-white transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base break-words">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                );

                return method.href ? (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? "_blank" : undefined}
                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">24h</div>
                <div className="text-gray-400 text-xs sm:text-sm">Response Time</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </main>
  );
}