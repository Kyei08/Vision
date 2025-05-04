export default function AboutDashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#748881] to-[#427977] text-white">
      <div className="pl-[220px] w-full">
        <div className="max-w-[800px] mx-auto p-10">
          <section className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-[0_0_45%] max-w-[45%]">
              <img 
                src="/images/pexels-pok-rie-33563-1726310.jpg" 
                alt="About Us Image : Pexels" 
                className="w-full h-auto"
              />
            </div>
            <div className="flex-[0_0_55%] max-w-[55%] bg-white p-8 border border-dotted border-gray-400 self-center -ml-[10%] z-10">
              <p className="text-gray-800 leading-relaxed">
                Vision is a dynamic group of junior developers navigating the continuous learning curve of ever changing technology landscape. We believe that by building projects, experimenting with new technologies, and collaborating closely, we can gain the experience necessary to thrive in the dynamic tech industry. Our goal is not just to learn, but strive to bring new innovations to the tech world.
              </p>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-4xl text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-sm text-center">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly seek new and better ways to innovate.</p>
              </div>
              <div className="bg-[#639d91] p-6 rounded-sm text-center text-white">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4 7.5c-.42-1.2-1.5-2.1-2.79-2.38C14.5 14.5 13.28 14 12 14s-2.5.5-3.21 1.12C7.5 15.4 6.42 16.3 6 17.5c-.53-1.35-.9-2.94-.9-4.5C5.1 8.04 8.14 5 12 5s6.9 3.04 6.9 6.98c0 1.48-.35 3.09-.9 4.52z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customer Focus</h3>
                <p>Our customers are at the heart of everything we do.</p>
              </div>
              <div className="bg-white p-6 rounded-sm text-center">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 fill-[#639d91]" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty and transparency in all our interactions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}