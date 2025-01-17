import Head from "next/head";
import Layout from "../components/Layout";
import DashboardWidgets from "../components/DashboardWidgets";
import SalesChart from "../components/SalesChart";
import TopProducts from "../components/TopProducts";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>E-commerce Admin Dashboard</title>
        <meta name="description" content="E-commerce admin dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <DashboardWidgets />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <TopProducts />
        </div>
      </div>
    </Layout>
  );
}
