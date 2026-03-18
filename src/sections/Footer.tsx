import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg">Chirag N Vijay</p>
          <p className="text-slate-500 text-sm mt-1">
            AI Engineer • Entrepreneur • Builder of Intelligent Systems
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="sr-only">GitHub</span>
            <Github size={18} />
          </a>
          <a
            href="mailto:chirag@example.com"
            className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="sr-only">Email</span>
            <Mail size={18} />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-white transition-colors text-sm font-medium"
          >
            <span className="sr-only">Resume</span>
            <FileText size={18} />
          </a>
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Chirag N Vijay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
