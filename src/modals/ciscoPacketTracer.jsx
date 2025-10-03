import React from 'react'
import SectionTitle from '../components/tokens/atoms/sectionTitle'


const PacketTracer= () =>{
    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      <div className="max-w-3xl mx-auto px-6 py-10">
        
        {/* Title + Date */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            🚀 Building a Simple SOHO Network in Packet Tracer
          </h1>
          <p className="text-sm text-gray-500 mt-2">October 3, 2025</p>
        </header>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            This week I built a{" "}
            <span className="font-semibold">
              Small Office/Home Office (SOHO) network
            </span>{" "}
            in Cisco Packet Tracer, going through device setup, cabling, and
            connectivity verification.
          </p>
        </section>

        {/* Devices */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            🔹 Devices Used
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>PC</li>
            <li>Laptop (wireless)</li>
            <li>Cable Modem</li>
            <li>Wireless Router</li>
            <li>Cloud</li>
          </ul>
        </section>

        {/* Tasks */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            🔹 Tasks Completed
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Deployed and renamed devices in the logical workspace</li>
            <li>Connected components using Ethernet & coaxial cables</li>
            <li>
              Configured the PC with{" "}
              <code className="bg-gray-200 px-1 rounded">DHCP</code> for IPv4
              assignment
            </li>
            <li>
              Replaced the Laptop’s wired NIC with a wireless NIC and connected
              via Wi-Fi
            </li>
            <li>
              Verified connectivity by pinging{" "}
              <code className="bg-gray-200 px-1 rounded">cisco.srv</code>
            </li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            🔹 Key Takeaways
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Learned how DHCP dynamically assigns IPs</li>
            <li>Worked with both wired and wireless end-devices</li>
            <li>
              Tested connectivity using{" "}
              <code className="bg-gray-200 px-1 rounded">ping</code> &{" "}
              <code className="bg-gray-200 px-1 rounded">ipconfig</code>
            </li>
            <li>
              Packet Tracer’s built-in CLI, GUI, and web tools bridge theory and
              practice
            </li>
          </ul>
        </section>

        {/* Screenshots Placeholder */}
        {/* Screenshots Placeholder */}
        <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">📸 Screenshots</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow">
            <img
              src="/sohoLab.png"
              alt="SOHO Network Topology"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow">
            <img
              src="/cmdSohoLab.png"
              alt="Ping test in CMD"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        </       section>


        {/* Reflection */}
        <section>
          <p className="text-lg leading-relaxed">
            This exercise showed how even a small simulated lab can build
            intuition for how devices talk to each other on real networks. A
            solid foundation for SOC and network defense work ahead.
          </p>
        </section>
      </div>
    </div>
    )
    
}
 export default PacketTracer;