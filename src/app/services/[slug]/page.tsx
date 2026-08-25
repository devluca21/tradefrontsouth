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
  if (!service) return { title: "Capability | TradeFront South" };
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
    <div className="min-h-screen">
      <div className="border-b border-line bg-canvas/90">
        <div className="mx-auto max-w-[1200px] px-6 py-4 md:px-10">
          <Link
            href="/#strategies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Capabilities
          </Link>
        </div>
      </div>

      <section className="relative h-[38vh] min-h-[240px] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,247,249,0.55) 0%, rgba(246,247,249,0.85) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-6 pb-10 md:px-10">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-ink-soft">
          {service.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl border-t border-line pt-14">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted">
            Contact
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
            Talk with us
          </h2>
          <p className="mt-3 text-muted">
            Send a note about {service.title.toLowerCase()}—we will follow up.
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
