import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

export function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={cn('w-full py-20', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl font-bold text-center mb-12">{children}</h2>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-900 border border-dpd-purple rounded-2xl shadow-dpd p-6 text-center">{children}</div>;
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block bg-dpd-purple hover:bg-dpd-purple-dark transition-colors text-white text-lg px-6 py-4 rounded-2xl shadow-dpd"
    >
      {children}
    </a>
  );
}

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-purple-900 via-black to-black">
      {children}
    </div>
  );
}
