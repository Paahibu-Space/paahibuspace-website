/**
 * PROGRAM STATUS EXPLANATION (as of January 9, 2026)
 * ===================================================
 * 
 * The system automatically determines if programs are OPEN or CLOSED based on:
 * 1. is_application_open flag
 * 2. application_status field
 * 3. application_start_date (must be in the past)
 * 4. application_end_date (must be in the future)
 * 
 * Current Status:
 * ---------------
 * 
 * ✅ OPEN PROGRAMS (showing in "Open Programs & Cohorts"):
 * 
 * 1. GROW Program (ID: 99)
 *    - is_application_open: true
 *    - Dates: Jan 1, 2026 - Dec 31, 2026
 *    - Status: OPEN (current date is within range)
 * 
 * 2. TechsiStars Mentorship Program (ID: 101)
 *    - is_application_open: true
 *    - Dates: Jan 1, 2026 - Dec 31, 2026
 *    - Status: OPEN (current date is within range)
 * 
 * 3. Community Ambassadors Program (ID: 104)
 *    - is_application_open: true
 *    - Dates: Jan 1, 2026 - Dec 31, 2026
 *    - Status: OPEN (current date is within range)
 * 
 * ❌ CLOSED PROGRAMS (NOT showing in "Open Programs & Cohorts"):
 * 
 * 4. WiDEI Program (ID: 100)
 *    - is_application_open: false
 *    - Dates: Mar 1, 2026 - Mar 31, 2026
 *    - Status: CLOSED (flag is false)
 * 
 * 5. WiDiB Program (ID: 102)
 *    - is_application_open: false
 *    - Dates: Oct 1, 2026 - Nov 15, 2026
 *    - Status: CLOSED (flag is false)
 * 
 * 6. Skills2Work Program (ID: 103)
 *    - is_application_open: false
 *    - Dates: Jun 1, 2026 - Aug 31, 2026
 *    - Status: CLOSED (flag is false)
 * 
 * 
 * HOW TO MAKE A PROGRAM OPEN/CLOSED:
 * -----------------------------------
 * 
 * To OPEN a program:
 * 1. Set is_application_open: true
 * 2. Set application_status: "Open"
 * 3. Set application_start_date to today or earlier
 * 4. Set application_end_date to a future date
 * 
 * To CLOSE a program:
 * 1. Set is_application_open: false, OR
 * 2. Set application_status: "Closed", OR
 * 3. Set application_end_date to a past date
 * 
 * Example - To open WiDEI right now:
 * {
 *   id: 100,
 *   name: "WiDEI Program",
 *   is_application_open: true,           // ← Change to true
 *   application_status: "Open",          // ← Change to "Open"
 *   application_start_date: "2026-01-01", // ← Already in past ✓
 *   application_end_date: "2026-12-31",   // ← Change to future date
 * }
 * 
 * The system will automatically:
 * - Show it in "Open Programs & Cohorts" section
 * - Display "Apply Now" button
 * - Show green "Applications Open" badge
 */

export default {};
