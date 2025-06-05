import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, MapPin, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        await import('aos/dist/aos.css');
        AOS.default.init({
          duration: 800,
          once: true,
          easing: 'ease-out'
        });
      } catch (error) {
        console.log('AOS not available:', error);
      }
    };
    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Enhanced Logo Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-md mb-6 border border-slate-200/60 hover:shadow-lg transition-all duration-300">
            <img 
              src="/lovable-uploads/e9660e74-0675-4977-a3ba-4c1107120e3d.png" 
              alt="WitRent Logo" 
              className="h-24 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))',
                transform: 'translateZ(0)' // Improves rendering quality
              }}
            />
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-witblue to-witorange mx-auto rounded-full opacity-90 mt-2"></div>
        </div>

        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Help Shape Witbank's
            <span className="text-witblue block">Rental Future</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your voice matters in understanding Witbank's rental market. Join our anonymous survey to help create better housing solutions for students and workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/survey">
              <Button size="lg" className="bg-witblue hover:bg-witblue/90 text-white px-8 py-3 text-lg">
                Take Survey (2 minutes)
              </Button>
            </Link>
            <p className="text-sm text-slate-500">
              🔒 100% Anonymous • POPIA Compliant
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-none shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardHeader>
              <Shield className="w-12 h-12 text-witblue mx-auto mb-4" />
              <CardTitle className="text-lg">Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">No personal information required. Your privacy is our priority.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <Clock className="w-12 h-12 text-witorange mx-auto mb-4" />
              <CardTitle className="text-lg">Quick & Easy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Smart questions that adapt to your situation. Complete in under 2 minutes.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardHeader>
              <Users className="w-12 h-12 text-witblue mx-auto mb-4" />
              <CardTitle className="text-lg">Community Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Help us understand the real challenges facing Witbank residents.</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <CardHeader>
              <MapPin className="w-12 h-12 text-witorange mx-auto mb-4" />
              <CardTitle className="text-lg">Local Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Specifically designed for Witbank's unique rental market needs.</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Your Voice Matters */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Why Your Voice Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-witblue mb-2">1000+</div>
              <p className="text-slate-600">Students & workers need better housing options</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-witorange mb-2">60%</div>
              <p className="text-slate-600">Report difficulty finding suitable rentals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-witblue mb-2">2min</div>
              <p className="text-slate-600">Is all it takes to make a difference</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-witblue to-witorange rounded-xl p-8 text-white" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="mb-6 opacity-90">Join hundreds of others who've already shared their experience</p>
          <Link to="/survey">
            <Button size="lg" variant="secondary" className="bg-white text-witblue hover:bg-gray-100">
              Start Survey Now
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;