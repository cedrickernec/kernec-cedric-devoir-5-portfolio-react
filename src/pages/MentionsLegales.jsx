import { Helmet } from "react-helmet";
import SectionDivider from "../components/common/SectionDivider";
import Container from "../components/common/Container";
import AccordionItem from "../components/ui/AccordionItem";
import { mentionsSection } from "../data/mentionsData";

export default function MentionsLegales() {
  const parentId="mentions-legales";

  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex,nofollow"/>
    </Helmet>
    
    <section aria-labelledby="mentions-legales-title">
      <Container>
        <h1 id="mentions-legales-title" className="visually-hidden">
          Section Mentions légales du site
        </h1>
        <SectionDivider
        title="Mentions légales"
        variant="centered"
        />

        <div className="accordion" id={parentId}>
          {mentionsSection.map((item, index) => (
            <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            parentId={parentId}
            defaultOpen={index === 0}>
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </Container>
    </section>
    </>
  )
}