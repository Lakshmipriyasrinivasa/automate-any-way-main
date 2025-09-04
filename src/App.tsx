import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Fields from "./pages/Fields";
// import Workers from "./pages/Workers";
import NotFound from "./pages/NotFound";
import FieldWorkforce from '@/components/FieldWorkforce';
import FieldWorkerForm from '@/components/FieldWorkerForm';
import ScheduleOverview from '@/components/ScheduleOverview.jsx';
import Assets from "./components/Assets";
import NewAsset from "@/components/NewAsset"
import Newservicecontract from "@/components/New Serive Contract"
import ServiceContractInfo from "@/components/Service Contract Info"
import WorkerList from "@/components/WorkerList.tsx"
import Account from "@/components/Account"
import Accountform from "@/components/Accountform"
import Contactform from "@/components/Contactform"
import Contact from "@/components/Contact"
import Workorder from "@/components/Workorder"
import Workorderform from "@/components/Workorderform"
import User from "@/components/user"
import Newuser from "@/components/Newuser"
import NewInventory from "@/components/Newinventory"
import Inventory from "@/components/inventory"
import Setting from "@/components/Setting"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fields" element={<Layout title="Field Management"><Fields /></Layout>} />
          {/* <Route path="/workers" element={<Layout title="Field Workers"><Workers /></Layout>} /> */}
          <Route path="/scheduling" element={<Layout title="Scheduling"><div><h1 className="text-2xl font-bold"></h1><ScheduleOverview /></div></Layout>} />
          {/* <Route path="/equipment" element={<Layout title="Equipment"><div><h1 className="text-2xl font-bold">Equipment - Coming Soon</h1></div></Layout>} /> */}
          {/* <Route path="/reports" element={<Layout title="Reports"><div><h1 className="text-2xl font-bold">Reports - Coming Soon</h1></div></Layout>} /> */}
          {/* <Route path="/documents" element={<Layout title="Documents"><div><h1 className="text-2xl font-bold">Documents - Coming Soon</h1></div></Layout>} /> */}
          <Route path="/settings" element={<Layout title="Settings"><div><h1 className="text-2xl font-bold"><Setting/></h1></div></Layout>} />
          <Route path="/fieldwork" element={<Layout title="Fieldworkforce"> <div className="min-h-screen bg-gray-50 p-6">
      <FieldWorkforce /></div></Layout>}/>
    <Route path="/register" element={<FieldWorkerForm />} />
          <Route path="/assets" element={<Layout title="Assets"> <Assets /> </Layout>} />
          <Route path="/assets/new" element={<Layout title="Add New Asset"><NewAsset /></Layout>} />
          <Route path="/newservicecontract" element={<Layout title="Newservicecontract"><Newservicecontract/></Layout>} />
          <Route path="/servicecontractinfo" element={<Layout title="Service Contract Info"><ServiceContractInfo/></Layout>} />
          <Route path="/workerlist" element={<Layout title="WorkerList"> <WorkerList /> </Layout>} />
           <Route path="/account" element={<Layout title="Account"> <Account /> </Layout>} />
          <Route path="/accountform" element={<Layout title="Accountform"> <Accountform /> </Layout>} />
          <Route path="/contactform" element={<Layout title="Contactform"> <Contactform /> </Layout>} />
          <Route path="/Contact" element={<Layout title="Contact"> <Contact /> </Layout>} />
          <Route path="/workorderform" element={<Layout title="Workorderform"> <Workorderform /> </Layout>} />
          <Route path="/workorder" element={<Layout title="Workorder"> <Workorder/> </Layout>} />
          <Route path="/user" element={<Layout title="User"> <User /> </Layout>} />
          <Route path="/newuser" element={<Layout title="Newuser"> <Newuser /> </Layout>} />
          <Route path="/newinventory" element={<Layout title="newinventory"> <NewInventory /> </Layout>} />
          <Route path="/inventory" element={<Layout title="inventory"> <Inventory /> </Layout>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
