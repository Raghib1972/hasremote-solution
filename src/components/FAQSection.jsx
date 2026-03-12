import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Who Works In Digital Marketing?',
    a: 'Digital marketing has advanced to the purpose where a huge variety of experts advise firms to create efficient plans. Consider hiring a talented digital marketing consultant if you are new to digital marketing or lack resources or experience. Professionals include SEO specialists, social media managers, content writers, PPC experts, and more.',
  },
  {
    q: 'What Am I Able To Accomplish With Google Analytics?',
    a: "A free website analytics tool called Google Analytics provides you with information on how people find and use your website. You'll monitor the return on investment for your online marketing with Google Analytics and look over key metrics to help you decide. Primary data classifications are acquisition, behavior, and conversions.",
  },
  {
    q: 'Would Digital Marketing Be Beneficial To My Company?',
    a: 'Definitely. Even while many businesses still view digital marketing with mistrust, neglecting it prevents your company from reaching the media that the majority of consumers use as their first stop. Digital marketing provides measurable results, allows for targeted campaigns, and offers exceptional ROI compared to traditional marketing channels.',
  },
  {
    q: 'How Are Program Rankings Decided?',
    a: 'Google and other search engine providers have complex algorithms that evaluate authority and relevance to determine rankings. There are many factors that go into creating rankings. Making a web page that is as comprehensive as possible for a particular keyword or topic is the best way to achieve a high search engine ranking.',
  },
  {
    q: 'How does Has Remote Solution develop customized marketing strategies for each client?',
    a: 'We work closely with each client to understand their goals and challenges and create a customized strategy. This involves a discovery session, industry analysis, competitor research, and developing a tailored action plan aligned with your business objectives and budget.',
  },
  {
    q: 'What types of digital marketing services does Has Remote Solution offer?',
    a: 'We offer a wide range of digital marketing services, including SEO, social media management, pay-per-click advertising, reputation management, content marketing, influencer marketing, and more. We also provide web development, app development, and remote staffing solutions.',
  },
  {
    q: 'How does Has Remote Solution measure the success of its digital marketing campaigns?',
    a: 'We measure success through data-driven metrics such as increased organic traffic, lead generation, conversion rates, ROI, search engine rankings, social media engagement, and overall revenue growth. We provide detailed monthly reports to keep clients informed.',
  },
  {
    q: 'What is the process for working with hasremotesolution?',
    a: 'Our process involves discovery (understanding your business), strategy development, implementation, and ongoing monitoring and optimization. We start with a free consultation to assess your needs and then create a customized proposal outlining our recommended approach.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">FAQs</p>
          <h2 className="section-title">We Also Help Our Clients</h2>
          <p className="section-subtitle">Clients To Find The Right Solutions For Their FAQs</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? 'border-accent shadow-md' : 'border-gray-200'}`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm ${open === i ? 'text-accent' : 'text-primary'}`}>
                  {i + 1}. {faq.q}
                </span>
                <span className={`shrink-0 ml-4 transition-transform ${open === i ? 'text-accent' : 'text-gray-400'}`}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="w-12 h-0.5 bg-accent mb-3" />
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
