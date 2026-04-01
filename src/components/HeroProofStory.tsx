import type { Copy } from "../locales";

/** Single vertical divider under each text beat (one line only between blocks). */
function Divider() {
  return (
    <div className="flex justify-center py-7 md:py-8" aria-hidden>
      <div className="h-14 w-px bg-neutral-900 md:h-16" />
    </div>
  );
}

/** One typographic style for all story copy: same weight & size. */
const storyTextClass =
  "mx-auto max-w-xl px-2 text-center text-base font-medium leading-relaxed text-neutral-900 md:text-lg md:leading-relaxed";

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className={storyTextClass}>{children}</p>;
}

export function HeroProofStory({ story }: { story: Copy["heroStory"] }) {
  const src = story.chatImage;

  return (
    <div className="flex flex-col items-center text-center">
      <BodyText>{story.realConversation}</BodyText>
      <Divider />
      <BodyText>{story.depositCollected}</BodyText>
      <Divider />
      <BodyText>{story.zeroHumans}</BodyText>
      <Divider />

      <div className="w-full max-w-lg px-2">
        <img
          src={src}
          alt={story.chatImageAlt}
          className="mx-auto block w-full max-w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <Divider />
      <BodyText>{story.readThatAgain}</BodyText>
      <Divider />
      <p className={storyTextClass}>
        {story.depositStoryLine1}
        {story.depositStoryLine2 ? (
          <>
            <br />
            {story.depositStoryLine2}
          </>
        ) : null}
      </p>
      <Divider />
      <BodyText>{story.opportunity}</BodyText>
      <Divider />
      <p className={storyTextClass}>
        {story.chatbotsLine1}
        <br />
        {story.chatbotsLine2}
      </p>
    </div>
  );
}
