'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function RootError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <main className="flex-grow flex items-center justify-center py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-xl w-full text-center">
        <div className="  p-8  mb-8 inline-block">
          <span className="material-symbols-outlined text-6xl text-red-500 mb-4 block">error</span>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm italic">
            {error.message || "An unexpected error occurred."}
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We apologize for the inconvenience. Our team has been notified.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => reset()}
              size="lg" 
              className="w-full sm:w-auto h-12 shadow-lg shadow-primary/20"
            >
              Try Again
            </Button>
            <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto h-12"
                onClick={() => window.location.href = '/'}
            >
              Go to Homepage
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-gray-400 text-sm">
          If the problem persists, please contact support at <a href="mailto:support@paahibuspace.org" className="text-secondary hover:underline font-medium">support@paahibuspace.org</a>
        </div>
      </div>
    </main>
  );
}
