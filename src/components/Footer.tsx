
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white"><img 
              src="/lovable-uploads/e9660e74-0675-4977-a3ba-4c1107120e3d.png" 
              alt="WitRent Logo" 
              className="h-24 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))',
                transform: 'translateZ(0)' // Improves rendering quality
              }}
            />WitRent</h3>
            <p className="text-sm text-slate-400">
              Understanding Witbank's rental market through community-driven research.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-witblue" />
              <span>POPIA Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-witblue transition-colors">
                Home
              </Link>
              <Link to="/survey" className="block hover:text-witblue transition-colors">
                Take Survey
              </Link>
              <Link to="/privacy" className="block hover:text-witblue transition-colors flex items-center gap-2">
                <Shield className="w-3 h-3" />
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:text-witblue transition-colors flex items-center gap-2">
                <FileText className="w-3 h-3" />
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-witorange" />
                <a href="mailto:jayetheus@gmail.com" className="hover:text-witblue transition-colors">
                  jayetheus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-witorange" />
                <a href="tel:+27837961494" className="hover:text-witblue transition-colors">
                  +27 837 961 494
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-witorange mt-0.5" />
                <span className="text-slate-400">
                  Witbank, Mpumalanga<br />
                  South Africa
                </span>
              </div>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal & Privacy</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Data processed in South Africa</p>
              <p>Automatic data purging after 24 months</p>
              <p>Anonymous by default</p>
              <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-700">
                <p className="text-xs text-slate-300">
                  For data deletion requests:<br />
                  <a href="mailto:jayetheus@gmail.com" className="text-witblue hover:underline">
                    jayetheus@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; 2025 WitRent. All rights reserved.</p>
            <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                Jayethian Product
              </span>
            <div className="flex items-center gap-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                Research Initiative
              </span>
              <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">
                Community Driven
              </span>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Last updated: May 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
