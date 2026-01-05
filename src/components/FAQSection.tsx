import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I contribute as an author?",
    answer: "We welcome submissions from scholars, researchers, and passionate writers. Please visit our 'Contribute' page to review our editorial guidelines and submit your manuscript. Our editorial team reviews all submissions within 2-3 weeks."
  },
  {
    question: "What is included in a premium subscription?",
    answer: "Premium subscribers gain unlimited access to our entire archive of over 5,000 articles, exclusive author interviews, ad-free reading experience, early access to new publications, and invitations to virtual scholarly events and discussions."
  },
  {
    question: "How are articles curated and fact-checked?",
    answer: "Every article undergoes a rigorous editorial process including peer review by subject matter experts, fact-checking by our dedicated research team, and final review by our senior editors. We maintain the highest standards of academic integrity."
  },
  {
    question: "Can I access articles offline?",
    answer: "Yes, premium subscribers can download articles for offline reading through our mobile app. The app is available for both iOS and Android devices and allows you to build your personal library of saved articles."
  },
  {
    question: "Do you offer institutional or library subscriptions?",
    answer: "We offer special rates for educational institutions, libraries, and research organizations. Please contact our institutional sales team for customized packages that include multi-user access and usage analytics."
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding px-6 lg:px-12">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about The Scholarly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-border/50 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-medium text-ink hover:text-primary transition-colors duration-200 py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
