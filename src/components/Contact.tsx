import { useState } from "react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("youssifalkarim@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "youssifalkarim@gmail.com",
      action: copyEmail,
      copyable: true
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+974 5041 9694",
      action: () => window.open("tel:+97450419694"),
      copyable: false
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/yousif-ahmed-ba2598271/",
      action: () => window.open("https://linkedin.com/in/yousif-ahmed-ba2598271/", "_blank"),
      copyable: false
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/its-usif",
      action: () => window.open("https://github.com/its-usif", "_blank"),
      copyable: false
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-gray"># </span>Get in touch
          </h2>
          <div className="w-24 h-1 bg-terminal-cyan mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="terminal-section p-8 rounded-lg">
            <div className="text-terminal-green text-sm mb-6">
              <span className="text-terminal-gray">$ </span>cat contact.txt
            </div>

            <div className="space-y-6 font-mono">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 hover-glow cursor-pointer rounded border border-terminal-gray/20 hover:border-terminal-cyan/50 transition-all duration-300"
                  onClick={contact.action}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className="text-terminal-cyan text-sm">{contact.label}</div>
                      <div className="text-foreground">{contact.value}</div>
                    </div>
                  </div>
                  
                  <div className="text-terminal-gray text-sm">
                    {contact.copyable ? (
                      copiedEmail && contact.label === "Email" ? (
                        <span className="text-terminal-green">Copied!</span>
                      ) : (
                        <span>Click to copy</span>
                      )
                    ) : (
                      <span>Click to open</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="text-terminal-gray font-mono text-sm">
                <span className="text-terminal-green">console.log</span>(
                <span className="text-terminal-cyan">"Looking forward to connecting!"</span>)
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-terminal-gray/20">
          <div className="text-terminal-gray font-mono text-sm">
            <span className="text-terminal-green">// </span>
            Built with React & TypeScript
            <span className="text-terminal-cyan"> · </span>
            Designed with ❤️ by Yousif Ahmed
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;