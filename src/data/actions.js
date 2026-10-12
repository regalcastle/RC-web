/* ------------------------------------------------------------------
   Button actions — edit these to wire up behaviour.
------------------------------------------------------------------- */

// "Plan Your Event" buttons (hero). Default: smooth-scroll to the contact section.
export function onPlanEventClick() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
