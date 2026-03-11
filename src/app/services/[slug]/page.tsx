import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, services } from "@/lib/services";
import ContactForm from "@/components/ContactForm";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | TradeFront South" };
  return {
    title: `${service.title} | TradeFront South`,
    description: service.content[0].slice(0, 155) + "...",
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="border-b border-navy/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-4 md:px-10">
          <Link
            href="/#strategies"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-navy"
          >
            <ArrowLeft size={18} />
            Our services
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <section className="relative h-[40vh] min-h-[280px] w-full overflow-hidden bg-navy">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 flex h-full items-end px-6 pb-10 md:px-10">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-navy/90">
          {service.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* CTA + form */}
        <div className="mx-auto mt-16 max-w-2xl border-t border-navy/10 pt-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-navy/70">
            Speak to an advisor
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy">
            Get in touch
          </h2>
          <p className="mt-3 text-navy/80">
            Send a message and an advisor will reply about {service.title.toLowerCase()}.
          </p>
          <div className="mt-8">
            <ContactForm
              defaultService={service.slug}
              formId={`${service.slug}-page-form`}
              compact
            />
          </div>
        </div>
      </section>
    </div>
  );
}
