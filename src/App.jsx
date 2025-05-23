import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import FindTalents from "./pages/FindTalents";
import HowItWorks from "./pages/HowItWorks";
import DigitalTransformation from "./pages/DigitalTransformation";
import MainLayout from "./layout/MainLayout";
import TalentAquisition from "./pages/TalentAquisition";
import EnterpriseSoftware from "./pages/EnterpriseSoftware";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import IdentityVerification from "./pages/IdentityVerification";
import AddPortfolio from "./pages/AddPortfolio";
import PortfolioListings from "./pages/PortfolioListings";
import SavedItems from "./pages/SavedItems";
import Dispute from "./pages/Dispute";
import Support from "./pages/Support";
import EditProfile from "./pages/EditProfile";
import PostService from "./pages/PostService";
import Proposals from "./pages/Proposals";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import CancelledProjects from "./pages/CancelledProjects";
import PostedServices from "./pages/PostedServices";
import OngoingServices from "./pages/OngoingServices";
import CompletedServices from "./pages/CompletedServices";
import CancelledServices from "./pages/CancelledServices";
import Insights from "./pages/Insights";
import PayoutSettings from "./pages/PayoutSettings";
import AccountSettings from "./pages/AccountSettings";
import Invoices from "./pages/Invoices";
import Messages from "./pages/Messages";
import SearchedTalent from "./pages/SearchedTalent";
import Talents from "./pages/Talents";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs/:category" element={<Jobs />} />
        <Route path="/search-talents" element={<FindTalents />} />
        <Route path="/find-talents" element={<SearchedTalent />} />
        <Route path="/talents/:id" element={<Talents />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route
          path="/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route
          path="/talent-aquistion-and-management-services"
          element={<TalentAquisition />}
        />
        <Route
          path="/enterprise-software-development"
          element={<EnterpriseSoftware />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            element={
              <div className="flex justify-between items-center p-3 bg-amber-100 rounded">
                <div className="flex gap-2">
                  <h3 className="font-semibold text-amber-900">
                    Restricted Access :
                  </h3>
                  <p className="text-gray-500">
                    You have not any privilege to view this page.
                  </p>
                </div>
              </div>
            }
          />
          <Route path="post-service" element={<PostService />} />
          <Route
            path="identity-verification"
            element={<IdentityVerification />}
          />
          <Route path="portfolio">
            <Route path="add-portfolio" element={<AddPortfolio />} />
            <Route path="portfolio-listings" element={<PortfolioListings />} />
          </Route>
          <Route path="projects">
            <Route path="proposal" element={<Proposals />} />
            <Route path="ongoing-projects" element={<OngoingProjects />} />
            <Route path="completed-projects" element={<CompletedProjects />} />
            <Route path="cancelled-projects" element={<CancelledProjects />} />
          </Route>
          <Route path="services">
            <Route path="post-a-service" element={<PostService />} />
            <Route path="posted-services" element={<PostedServices />} />
            <Route path="ongoing-services" element={<OngoingServices />} />
            <Route path="completed-services" element={<CompletedServices />} />
            <Route path="cancelled-services" element={<CancelledServices />} />
          </Route>
          <Route path="saved-items" element={<SavedItems />} />
          <Route path="dispute" element={<Dispute />} />
          <Route path="help-and-support" element={<Support />} />
          <Route path="insights" element={<Insights />} />
          <Route path="settings">
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="payouts-settings" element={<PayoutSettings />} />
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
          <Route path="invoices" element={<Invoices />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
