import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQPageProps {
  faqs: FAQ[];
}

export default function FAQPage({ faqs }: FAQPageProps) {
  return (
    <Layout>
      <Head>
        <title>FAQ - E-commerce Admin Dashboard</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real-world scenario, you would fetch this data from an API or database
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I add a new product?",
      answer:
        "To add a new product, go to the Products page and click on the 'Add New Product' button. Fill in the required information and click 'Save'.",
    },
    {
      id: 2,
      question: "How can I view order details?",
      answer:
        "Navigate to the Orders page and click on the order number to view its details, including customer information and purchased items.",
    },
    {
      id: 3,
      question: "How often is the dashboard data updated?",
      answer:
        "The dashboard data is updated in real-time for the most accurate representation of your e-commerce store's performance.",
    },
  ];

  return {
    props: {
      faqs,
    },
    // Revalidate every hour (3600 seconds)
    revalidate: 3600,
  };
};
