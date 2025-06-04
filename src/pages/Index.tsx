
import { useState } from 'react';
import SurveyForm from '../components/SurveyForm';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            WitRent Survey
          </h1>
          <p className="text-slate-600 text-lg">
            Help us understand Witbank's rental market
          </p>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              🔒 Your privacy matters - all responses are anonymous by default
            </p>
          </div>
        </div>
        
        <Card className="p-6 shadow-lg">
          <SurveyForm />
        </Card>
        
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>POPIA Compliant • Data processed in South Africa</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
