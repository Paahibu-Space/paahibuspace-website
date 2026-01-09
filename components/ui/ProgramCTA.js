"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import WaitlistModal from "@/components/ui/WaitlistModal";

// Helper to check if application is effectively open (duplicated logic to ensure consistency if passed raw program object)
export const isApplicationAccessible = (program) => {
    if (!program) return false;
    if (!program.is_application_open) return false;
    if (program.application_status === 'Closed') return false;

    const now = new Date();
    const start = program.application_start_date ? new Date(program.application_start_date) : null;
    const end = program.application_end_date ? new Date(program.application_end_date) : null;

    if (start && now < start) return false;
    if (end && now > end) return false;

    return true;
};

export default function ProgramCTA({ program, variant = "primary", className = "", labelOpen = "Apply Now", labelClosed = "Join Waitlist" }) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  if (!program) return null;

  const isOpen = isApplicationAccessible(program);

  const handleClick = (e) => {
      e.preventDefault();
      if (!isOpen) {
          setIsWaitlistOpen(true);
      }
  };

  // Base classes that are essential
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-bold transition-all";
  
  // Default padding if none provided (simplified assumption, though className overrides rely on CSS order)
  // We include default padding in the variant string. If user supplies 'px-2' in className, they might need '!px-2' if conflicts arise, 
  // but usually utility collision is managed by user.
  // To keep it safe, we'll just add reasonable defaults.
  
  const filledVariantClasses = "bg-primary text-white hover:bg-primary/90 shadow-lg px-8 py-3";
  const outlineVariantClasses = "border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3";
  const closedVariantClasses = "bg-gray-200 text-gray-700 hover:bg-secondary hover:text-white shadow-sm px-8 py-3";

  // If variant is outline, we use outline classes.
  // If variant is primary (default), we check isOpen status.
  
  let activeClasses = "";
  if (isOpen) {
      activeClasses = variant === 'outline' ? outlineVariantClasses : filledVariantClasses;
  } else {
      // If closed, we resort to a gray button usually, unless overridden?
      // "Join Waitlist" usually looks distinct.
      // The previous code had: variant === 'outline' ? outline : bg-gray-200...
      activeClasses = variant === 'outline' ? outlineVariantClasses : closedVariantClasses;
  }

  return (
    <>
      {isOpen ? (
        <a 
            href={program.application_link || "#"} 
            target="_blank" 
            rel="noreferrer"
            className={`${baseClasses} ${activeClasses} ${className}`}
        >
          {labelOpen}
        </a>
      ) : (
        <button
            onClick={handleClick}
            className={`${baseClasses} ${activeClasses} ${className}`}
        >
          {labelClosed}
        </button>
      )}

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
        programId={program.slug || program.id}
        programName={program.name}
      />
    </>
  );
}
