import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | BrowseEast",
  description: "Get in touch with the BrowseEast team.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-600">
        Have a question or want to get in touch? Reach out below.
      </p>
      <ContactForm />
    </main>
  );
}