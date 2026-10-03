import Reveal from './Reveal';

type SectionHeadingProps = {
  /** Two-digit section number shown in the left rail, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

/**
 * Editorial section header: a hairline across the full measure, a numbered
 * label in the left rail, and the title set large in the main column.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="rule pt-6">
        <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-12">
          <p className="meta pt-2">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-line-strong" aria-hidden>
              /
            </span>
            {eyebrow}
          </p>

          <div>
            <h2 id={id} className="heading-2">
              {title}
            </h2>
            {description ? <p className="lede">{description}</p> : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
