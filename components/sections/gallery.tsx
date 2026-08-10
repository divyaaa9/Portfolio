import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  // Duplicated once so the track can loop seamlessly at -50% translateX.
  const track = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="section-y overflow-hidden bg-base-alt">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Moments, in motion" />
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="false"
      >
        <div className="flex w-max animate-marquee">
          {track.map((image, i) => (
            <div
              key={`${image.id}-${i}`}
              className="relative mx-3 h-[260px] w-[360px] shrink-0 overflow-hidden rounded-md border border-border bg-surface-card md:h-[320px] md:w-[440px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="440px"
                loading="eager"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
