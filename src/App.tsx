import CheckComponent from "./components/CheckComponent";

import { Proof } from "@reclaimprotocol/js-sdk";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">Proof of Identity</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Verify social media accounts instantly with our secure verification
            system. Quick, reliable, and trustworthy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <CheckComponent onProofReceived={(proof: Proof) => console.log(proof)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
