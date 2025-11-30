export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-border-dark py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 text-primary mb-6">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-black dark:text-white text-lg font-bold">
              NexusUI
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            Building the tools for tomorrow&apos;s digital ecosystem. Empowering
            developers and businesses to reach their full potential.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#243647] text-slate-700 dark:text-white flex items-center justify-center hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#243647] text-slate-700 dark:text-white flex items-center justify-center hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Changelog
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-gray-100 dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 NexusUI Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
