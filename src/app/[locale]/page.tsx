import CarouselWrapper from '@/components/CarouselWrapper';
import { Suspense } from 'react';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <Suspense fallback={<p className="text-2xl text-center">Loading...</p>}>
        <CarouselWrapper>
          <>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <CarouselItem key={index}>
                  <section className="relative h-150 overflow-hidden">
                    <div className="carousel-container flex h-full overflow-x-auto overflow-y-hidden">
                      <div className="carousel-item relative min-w-full h-full flex items-center">
                        <Image
                          fill
                          alt="Dashboard Preview"
                          className="absolute inset-0 w-full h-full object-cover opacity-40"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqAwfZ1mC3Avt6v2friUSqyGcmAk7Pajb9k5IrfOVoxDovxS301sSnC9yz3jLgRSoBuJLOogr7-8gNJsy_j0SFp4sJJkEVL2bKrQWT_u7B5y-ftDr73QVT9vpm7fmPHH3veOt2eqzEcKicgwFg9evZDUHQlBrPCgG_wt56DkhhFzZSkl4jLqH7gAaQKomznvCBSN2SYGqVQqJDa69E_FN5vEyzVJCXcMCUXp1Nfmbn-ppf23ibF-UIMRjD_o1xW3o0FGeVE-6HWe7L"
                        />
                        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
                          <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                              New Release v4.0
                            </span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                              Master Your Workflow with NexusUI
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                              The ultimate platform for modern developers.
                              Build, scale, and manage your applications with
                              unprecedented speed and efficiency.
                            </p>
                            <div className="flex flex-wrap gap-4">
                              <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30">
                                Get Started Free
                              </button>
                              <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </CarouselItem>
              );
            })}
          </>
        </CarouselWrapper>
      </Suspense>

      {/* <div className="flex w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-red-200 dark:bg-black sm:items-start mt-5"></div> */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools designed to empower your business at every stage
            of the digital lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary transition-colors group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                analytics
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Real-time data visualization and processing to give you the
              insights you need to grow faster.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary transition-colors group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                cloud_sync
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Scalable server solutions that grow with your user base without
              any downtime or performance drops.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary transition-colors group">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                security
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Bank-grade encryption and automated threat detection to keep your
              data and users safe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-[#0c1218]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose NexusUI?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Unmatched Performance
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our core engine is optimized for sub-millisecond response
                    times under heavy loads.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Dev-First Experience
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Extensive documentation, API explorers, and SDKs for all
                    major programming languages.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Scale</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Edge nodes in over 150 countries ensuring low latency for
                    your global user base.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl"></div>
            <Image
              width={512}
              height={512}
              alt="Platform Screenshot"
              className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-border-dark"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeEnxXWmTJiHduK4IphXJyKsNcnski6P4ZIcitorW2KE9wJjLHHvIsJuU-QAJ2o8V-C6hBpnVHB6CRmny32lm3GGQz8BgByt2C9iUSBioDNrZQYRNxyoC9vDhPLwAh7eR3BXGJLYjArTRZBtKUGSrAtky9BVDDhYZIiDhDFeEoKA5h8OsQwCDOstEOJirSj_9P05nwsvRcDvFfvZXX89Zi9vC4AUsXG4UZ40VBoDE45lB8qtnPahk0BiEW26n-h27yG75Y_CdxmgQh"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
