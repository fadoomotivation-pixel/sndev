export default function Footer() {
  return (
    <footer className="bg-[#10243E] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white">SN Developers</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Building ultra-luxury living spaces in the spiritual heart of India. Legacy of trust, innovation, and supreme quality.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#CDA85A]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#overview" className="hover:text-white transition-colors">Project Overview</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Plots</a></li>
              <li><a href="#roi" className="hover:text-white transition-colors">Investment ROI</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#CDA85A]">Get In Touch</h4>
            <div className="space-y-4 text-sm text-white/60">
              <p className="leading-relaxed">
                A-963, JC Tower, First Floor, Chawla Colony, 100 Feet Road, Ballabhgarth, 121004
              </p>
              <p>
                <a href="https://wa.me/917678122463" target="_blank" className="hover:text-white transition-colors">
                  WhatsApp: +91 76781 22463
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#CDA85A]">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe for premium real estate insights.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 text-sm flex-1 outline-none focus:border-[#CDA85A] transition-colors" />
              <button className="bg-[#CDA85A] text-[#10243E] px-4 py-3 font-bold uppercase text-xs tracking-wider hover:bg-[#b89345] transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} SN Developers. All rights reserved.</p>
          <div className="flex gap-4">
            <span>80c Approved</span>
            <span>|</span>
            <span>Firm Registry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
