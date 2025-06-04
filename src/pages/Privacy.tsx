import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Database, Trash2 } from 'lucide-react';
import Footer from '../components/Footer';

const Privacy = () => {
  useEffect(() => {
    // Initialize AOS when available
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        await import('aos/dist/aos.css');
        AOS.default.init({
          duration: 600,
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8" data-aos="fade-down">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-slate-600 hover:text-witblue">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">How we protect your data and respect your privacy</p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-witblue" />
                Privacy by Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                WitRent Survey is built with privacy as our foundation. We collect the minimum data necessary to understand Witbank's rental market while ensuring your anonymity.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-green-800 font-semibold">✓ No personal identification required</p>
                <p className="text-green-700">✓ Anonymous responses by default</p>
                <p className="text-green-700">✓ POPIA compliant data handling</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 text-witorange" />
                What We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Required Information:</h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Housing search status</li>
                    <li>• User type (student/worker)</li>
                    <li>• Age group (ranges only)</li>
                    <li>• General preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Optional Information:</h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Phone number (early access only)</li>
                    <li>• Additional feedback</li>
                    <li>• Feature preferences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>How We Use Your Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witblue rounded-full mt-2"></div>
                  <p className="text-slate-700"><strong>Market Research:</strong> Understanding rental needs and challenges in Witbank</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witorange rounded-full mt-2"></div>
                  <p className="text-slate-700"><strong>Product Development:</strong> Building better rental solutions based on real needs</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witblue rounded-full mt-2"></div>
                  <p className="text-slate-700"><strong>Aggregate Reporting:</strong> Creating anonymous insights for the community</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-red-500" />
                Data Retention & Deletion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                We believe in data minimization and automatic cleanup:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <ul className="space-y-2 text-blue-800">
                  <li>• Survey responses: Automatically deleted after 24 months</li>
                  <li>• Phone numbers: Stored separately, deleted on request</li>
                  <li>• Aggregated insights: Retained indefinitely (anonymous)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <CardHeader>
              <CardTitle>Your Rights Under POPIA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                As a South African resident, you have the right to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-slate-700">✓ Know what data we have</p>
                  <p className="text-slate-700">✓ Request data deletion</p>
                  <p className="text-slate-700">✓ Withdraw consent anytime</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700">✓ Data portability</p>
                  <p className="text-slate-700">✓ Correct inaccurate data</p>
                  <p className="text-slate-700">✓ File complaints</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8" data-aos="fade-up" data-aos-delay="500">
            <p className="text-slate-600 mb-4">Questions about our privacy practices?</p>
            <p className="text-sm text-slate-500">
              Last updated: December 2024 • Contact: privacy@witrent.co.za
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
