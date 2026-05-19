export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
      )}
      <div className={`divider-gold mt-8 w-32 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
