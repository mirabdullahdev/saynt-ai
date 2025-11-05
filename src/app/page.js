// src/app/page.js
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to your main frontend page inside (frontend)
  redirect('/about_us'); // replace with your main page route
}
