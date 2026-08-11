"use client";
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '@/components/ui/Button';

export default function WaitlistModal({ isOpen, onClose, programId, programName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Use Next.js API route to avoid CORS issues
      const res = await fetch(`/api/v1/programs/${programId}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to join waitlist');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', location: '', notes: '' });
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 text-left align-middle shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-3xl" aria-hidden="true">check_circle</span>
                    </div>
                    <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      You&apos;re on the list!
                    </Dialog.Title>
                    <p className="text-gray-500 dark:text-gray-400">
                      We&apos;ve received your details for <strong>{programName}</strong>. We&apos;ll be in touch as soon as spots open up.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 dark:text-white">
                          Join Waitlist
                        </Dialog.Title>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Applications for <strong>{programName}</strong> are currently closed. Sign up to be notified when they reopen.
                        </p>
                      </div>
                      <button onClick={onClose} aria-label="Close dialog" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <span className="material-symbols-outlined" aria-hidden="true">close</span>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                        <input 
                          required 
                          type="text" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <input 
                          required 
                          type="email" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone (Optional)</label>
                            <input 
                            type="tel" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="+233..."
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City/Country</label>
                            <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="Accra, Ghana"
                            value={formData.location}
                            onChange={e => setFormData({...formData, location: e.target.value})}
                            />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes (Optional)</label>
                        <textarea 
                          rows="3"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Let us know if you're a student, professional, or entrepreneur..."
                          value={formData.notes}
                          onChange={e => setFormData({...formData, notes: e.target.value})}
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">{errorMessage}</p>
                      )}

                      <div className="mt-2">
                        <Button 
                            disabled={status === 'submitting'}
                            className="w-full justify-center py-4 text-base"
                        >
                          {status === 'submitting' ? (
                              <span className="flex items-center gap-2">
                                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/>
                                  Submitting...
                              </span>
                          ) : "Submit & Join Waitlist"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
